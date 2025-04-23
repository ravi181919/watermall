import React, { useEffect, useState } from "react";
import axios from "../axios/Axios";

const ViewFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch feedback from the backend
  const fetchFeedback = async () => {
    try {
      const response = await axios.get(`/feedback/`);
      setFeedbackList(response.data); // Assuming backend sends an array of feedback
      setLoading(false);
      console.log(response);
      
    } catch (error) {
      console.error("Error fetching feedback:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-8 px-4">
      <div className="max-w-4xl mx-auto pt-10">
        <h1 className="text-2xl font-bold leading-none text-center mb-1">
          User Feedback
        </h1>
        {loading ? (
          <p className="text-center text-xs">Loading feedback...</p>
        ) : feedbackList.length > 0 ? (
          <div className="space-y-4">
            {feedbackList.map((feedback, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow"
              >
                <h2 className="font-semibold text-lg">
                  {feedback.name || "Anonymous"}
                </h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {feedback.comment}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Submitted on: {new Date(feedback.date).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xs">No feedback available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewFeedback;
