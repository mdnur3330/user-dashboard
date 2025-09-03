import React from "react";
import { fetchUserById } from "@/lib";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

type Params = {
  userId: string;
};

const UserDetailsPage = async ({ params }: { params: Params }) => {
  const user = await fetchUserById(params.userId);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-xl sm:text-2xl font-bold text-red-600 text-center">
          User not found
        </h2>
        <Link
          href="/userlist"
          className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md mt-6 sm:mt-8 p-4 sm:p-6">
        {/* Back Button */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 mb-6 px-3 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition w-fit"
          >
            <FaArrowLeftLong className="text-gray-600" />
            <span className="text-sm sm:text-base">Back to Users</span>
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center md:text-right">
          User Details
        </h1>

        {/* Personal Info & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Personal Information */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Personal Information
            </h2>
            <div className="space-y-3 text-sm sm:text-base">
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
                  className="text-teal-600 hover:underline break-all"
                >
                  {user.website}
                </a>
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Address</h2>
            <div className="space-y-3 text-sm sm:text-base">
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
                <span className="font-medium text-gray-900 break-all">
                  {user.address.geo.lat}, {user.address.geo.lng}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mt-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Company</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm sm:text-base">
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
              <span className="font-medium text-gray-900">
                {user.company.bs}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
