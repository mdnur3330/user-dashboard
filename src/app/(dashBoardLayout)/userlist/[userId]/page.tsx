
import React from "react";
import { fetchUserById } from "@/lib";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";

type Params = {
  userId: string;
};

const UserDetailsPage = async ({ params }: { params: Params }) => {
  const user = await fetchUserById(params.userId);

  if (!user) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-red-600">User not found</h2>
        <Link
          href="/userlist"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Users
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/users"
            className="flex items-center gap-2 mb-6 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition w-fit"
          >
            <FaArrowLeftLong className="text-gray-600" />
            <span>Back to Users</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-right"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          User Details
        </motion.h1>

        {/* Personal Info & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Personal Information
            </h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                <span className="block text-gray-600">Name</span>
                <span className="font-medium text-gray-900">{user.name}</span>
              </p>
              <p>
                <span className="block text-gray-600">Username</span>
                <span className="text-gray-900">@{user.username}</span>
              </p>
              <p>
                <span className="block text-gray-600">Email</span>
                <span className="text-gray-900">{user.email}</span>
              </p>
              <p>
                <span className="block text-gray-600">Phone</span>
                <span className="text-gray-900">{user.phone}</span>
              </p>
              <p>
                <span className="block text-gray-600">Website</span>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {user.website}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-lg font-bold text-gray-800 mb-4">Address</h2>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                <span className="block text-gray-600">Street</span>
                <span className="font-medium text-gray-900">
                  {user.address.street}
                </span>
              </p>
              <p>
                <span className="block text-gray-600">Suite</span>
                <span className="font-medium text-gray-900">
                  {user.address.suite}
                </span>
              </p>
              <p>
                <span className="block text-gray-600">City</span>
                <span className="font-medium text-gray-900">
                  {user.address.city}
                </span>
              </p>
              <p>
                <span className="block text-gray-600">Zipcode</span>
                <span className="font-medium text-gray-900">
                  {user.address.zipcode}
                </span>
              </p>
              <p>
                <span className="block text-gray-600">Geo Location</span>
                <span className="font-medium text-gray-900">
                  {user.address.geo.lat}, {user.address.geo.lng}
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Company Info */}
        <motion.div
          className="bg-gray-50 p-6 rounded-lg mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-lg font-bold text-gray-800 mb-4">Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
            <p>
              <span className="block text-gray-600">Company Name</span>
              <span className="font-medium text-gray-900">
                {user.company.name}
              </span>
            </p>
            <p>
              <span className="block text-gray-600">Catch Phrase</span>
              <span className="font-medium text-gray-900">
                {user.company.catchPhrase}
              </span>
            </p>
            <p>
              <span className="block text-gray-600">Business</span>
              <span className="font-medium text-gray-900">{user.company.bs}</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default UserDetailsPage;
