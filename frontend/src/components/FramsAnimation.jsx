import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const FramesAnimation = () => {
  const canvasRef = useRef(null);
  const frames = {
    framesCurrentIndex: 0,
    framesMaxIndex: 382,
  };
  const imageSaver = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let isAllImagesLoaded = 0;

    const framesPreloader = () => {
      for (let i = 1; i <= frames.framesMaxIndex; i++) {
        const frameURL = `/src/assets/frams/frame_${i.toString().padStart(4, "0")}.jpg`;
        const img = new Image();
        img.src = frameURL;

        img.onload = () => {
          isAllImagesLoaded++;
          if (isAllImagesLoaded === frames.framesMaxIndex) {
            framesAllImageLoader(frames.framesCurrentIndex);
            startAnimation();
          }
        };

        imageSaver.push(img);
      }
    };

    const framesAllImageLoader = (currentIndex) => {
      if (currentIndex >= 0 && currentIndex <= frames.framesMaxIndex) {
        const img = imageSaver[currentIndex];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);

        const newWidthX = img.width * scale;
        const newHeightY = img.height * scale;

        const offSetX = (canvas.width - newWidthX) / 2;
        const offsetY = (canvas.height - newHeightY) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        context.drawImage(img, offSetX, offsetY, newWidthX, newHeightY);

        frames.framesCurrentIndex = currentIndex;
      }
    };

    const startAnimation = () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          scrub: 2,
          end: "bottom bottom",
        },
      }).to(frames, {
        framesCurrentIndex: frames.framesMaxIndex,
        onUpdate: () => {
          framesAllImageLoader(Math.floor(frames.framesCurrentIndex));
        },
      });
    };

    framesPreloader();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full bg-white/10 ">
      <div className="parent relative h-[350vh] w-full top-0 left-0">
        <div className="sticky top-0 left-0 h-screen w-full">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default FramesAnimation;
