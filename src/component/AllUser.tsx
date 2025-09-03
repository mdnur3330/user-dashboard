
// "use client";

// import { useState } from "react";
// import { User } from "@/type/Type";
// import Link from "next/link";
// import { motion } from "framer-motion";

// type Props = {
//   users?: User[];
// };

// const UserList = ({ users = [] }: Props) => {
//   const [query, setQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const searchValue = formData.get("search") as string;
//     setQuery(searchValue);
//     setCurrentPage(1);
//   };

//   // Filter users by name or email
//   const filtered = users.filter(
//     (u) =>
//       u.name.toLowerCase().includes(query.toLowerCase()) ||
//       u.email.toLowerCase().includes(query.toLowerCase())
//   );

//   // Pagination logic
//   const totalPages = Math.ceil(filtered.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentUsers = filtered.slice(startIndex, startIndex + itemsPerPage);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <motion.div
//         className="w-11/12 lg:max-w-9/12 mt-5 lg:mt-9 mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Header */}
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
//           User Management
//         </h1>

//         {/* Search Bar */}
//         <motion.form
//           className="flex flex-col sm:flex-row gap-3 mb-6"
//           onSubmit={handleSearch}
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <input
//             type="text"
//             placeholder="Search by name or email..."
//             name="search"
//             defaultValue={query}
//             className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
//           />
//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
//           >
//             Search
//           </motion.button>
//         </motion.form>

//         {/* Table (Responsive) */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse min-w-[600px]">
//             <thead>
//               <tr className="bg-blue-50 text-gray-700 text-sm font-semibold border-b">
//                 <th className="py-3 px-4">NAME</th>
//                 <th className="py-3 px-4">EMAIL</th>
//                 <th className="py-3 px-4">PHONE</th>
//                 <th className="py-3 px-4">COMPANY</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentUsers.length > 0 ? (
//                 currentUsers.map((user, index) => (
//                   <motion.tr
//                     key={user.id}
//                     className="hover:bg-gray-50 transition border-b cursor-pointer"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <td className="py-3 px-4">
//                       <Link
//                         href={`/userlist/${user.id}`}
//                         className="block w-full"
//                       >
//                         <div>
//                           <p className="font-medium text-gray-800">{user.name}</p>
//                           <p className="text-xs text-gray-500">@{user.username}</p>
//                         </div>
//                       </Link>
//                     </td>
//                     <td className="py-3 px-4 text-gray-700">
//                       <Link href={`/userlist/${user.id}`}>{user.email}</Link>
//                     </td>
//                     <td className="py-3 px-4 text-gray-700 table-cell">
//                       <Link href={`/userlist/${user.id}`}>{user.phone}</Link>
//                     </td>
//                     <td className="py-3 px-4 text-gray-700 table-cell">
//                       <Link href={`/userlist/${user.id}`}>{user.company.name}</Link>
//                     </td>
//                   </motion.tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={4}
//                     className="text-center text-gray-500 py-6 italic"
//                   >
//                     No users found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="flex justify-center sm:justify-between items-center mt-6 flex-wrap gap-4">
//             <motion.button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
//               whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                 currentPage === 1
//                   ? "bg-gray-200 text-black cursor-not-allowed"
//                   : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//               Previous
//             </motion.button>

//             <div className="flex gap-2">
//               {Array.from({ length: totalPages }).map((_, index) => {
//                 const page = index + 1;
//                 return (
//                   <motion.button
//                     key={page}
//                     onClick={() => handlePageChange(page)}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
//                       currentPage === page
//                         ? "bg-blue-600 text-white"
//                         : "bg-gray-100 text-black hover:bg-gray-200"
//                     }`}
//                   >
//                     {page}
//                   </motion.button>
//                 );
//               })}
//             </div>

//             <motion.button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
//               whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                 currentPage === totalPages
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//               Next
//             </motion.button>
//           </div>
//         )}

//         {/* Footer */}
//         <div className="text-sm text-gray-500 mt-4 text-center sm:text-left">
//           Showing{" "}
//           <span className="font-medium">{currentUsers.length}</span> of{" "}
//           <span className="font-medium">{filtered.length}</span> filtered users
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default UserList;



"use client";

import { useState } from "react";
import { User } from "@/type/Type";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  users?: User[];
};

const UserList = ({ users = [] }: Props) => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("search") as string;
    setQuery(searchValue);
    setCurrentPage(1);
  };

  // Filter users by name or email
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <motion.div
        className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          User Management
        </h1>

        {/* Search Bar */}
        <motion.form
          className="flex flex-col sm:flex-row gap-3 mb-6"
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Search by name or email..."
            name="search"
            defaultValue={query}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm sm:text-base"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Search
          </motion.button>
        </motion.form>

        {/* Table (Responsive) */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm font-semibold border-b">
                <th className="py-3 px-4">NAME</th>
                <th className="py-3 px-4">EMAIL</th>
                <th className="py-3 px-4">PHONE</th>
                <th className="py-3 px-4">COMPANY</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    className="hover:bg-gray-50 transition border-b cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td className="py-3 px-4">
                      <Link
                        href={`/userlist/${user.id}`}
                        className="block w-full"
                      >
                        <div>
                          <p className="font-medium text-gray-800">{user.name}</p>
                          <p className="text-xs text-gray-500">@{user.username}</p>
                        </div>
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      <Link href={`/userlist/${user.id}`}>{user.email}</Link>
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      <Link href={`/userlist/${user.id}`}>{user.phone}</Link>
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      <Link href={`/userlist/${user.id}`}>{user.company.name}</Link>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center text-gray-500 py-6 italic"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center sm:justify-between items-center mt-6 flex-wrap gap-4">
            <motion.button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                currentPage === 1
                  ? "bg-gray-200 text-black cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Previous
            </motion.button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <motion.button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </motion.button>
                );
              })}
            </div>

            <motion.button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
              whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </motion.button>
          </div>
        )}

        {/* Footer */}
        <div className="text-sm text-gray-500 mt-4 text-center sm:text-left">
          Showing{" "}
          <span className="font-medium">{currentUsers.length}</span> of{" "}
          <span className="font-medium">{filtered.length}</span> filtered users
        </div>
      </motion.div>
    </div>
  );
};

export default UserList;
