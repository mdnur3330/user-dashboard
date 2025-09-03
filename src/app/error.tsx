"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-red-600 mb-4"
      >
        Oops! Something went wrong
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 mb-6 text-center"
      >
        We couldn’t load this page properly. Please try again or return home.
      </motion.p>

      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md"
        >
          Try Again
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-gray-700 text-white rounded-xl shadow-md"
        >
          Go Home
        </motion.button>
      </div>
    </div>
  );
}
