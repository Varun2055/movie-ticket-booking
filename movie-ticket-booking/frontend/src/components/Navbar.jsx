// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo32 from "../assets/logo32.png";
// import { ArrowLeft, LogOut } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Login from "../pages/Login";

// const Navbar = () => {
//   const [isSideOpen, setIsSideOpen] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     setDropdownOpen(false);
//   };

//   const handleLoginSuccess = () => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//     setIsLoginOpen(false);
//   };

//   return (
//     <>
//       {/* ✅ Modern OTT Navbar */}
//       <nav
//         className="
//           fixed top-0 left-0 w-full z-50 
//           bg-black/40 backdrop-blur-xl
//           border-b border-white/10
//         "
//       >
//         <div className="flex items-center justify-between px-6 py-3">
          
//           {/* ✅ Logo + Name */}
//           <div
//             onClick={() => setIsSideOpen(true)}
//             className="flex items-center space-x-3 cursor-pointer"
//           >
//             <img src={logo32} alt="BYT" className="h-10 w-10" />
//             <span className="text-xl tracking-wide font-semibold text-white">
//               BookYourTickets
//             </span>
//           </div>

//           {/* ✅ Main Links (Desktop) */}
//           <ul className="hidden md:flex items-center space-x-8 text-white/90 font-medium">
//             <Link to="/" className="hover:text-white transition">Home</Link>
//             <Link to="/movies" className="hover:text-white transition">Movies</Link>
//             <Link to="/streaming" className="hover:text-white transition">Streaming</Link>
//             <Link to="/upcoming" className="hover:text-white transition">Upcoming</Link>
//           </ul>

//           {/* ✅ Search + User */}
//           <div className="flex items-center space-x-4 relative">
            
//             {/* Search Bar */}
//             <div className="hidden md:flex items-center relative">
//               <input
//                 type="text"
//                 placeholder="Search movies..."
//                 className="
//                   bg-white/10 text-white placeholder-white/60
//                   px-4 py-2 pr-10 rounded-md 
//                   focus:outline-none focus:ring-1 focus:ring-white
//                 "
//               />
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 absolute right-3 text-white/80"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
//                 />
//               </svg>
//             </div>

//             {/* ✅ Sign In or User Menu */}
//             {!user ? (
//               <button
//                 onClick={() => setIsLoginOpen(true)}
//                 className="px-5 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition"
//               >
//                 Sign In
//               </button>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen((prev) => !prev)}
//                   className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
//                 >
//                   <span className="font-semibold">
//                     {user.user_name ? `Hi, ${user.user_name}` : "My Account"}
//                   </span>
//                 </button>

//                 <AnimatePresence>
//                   {dropdownOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute right-0 mt-2 bg-black/90 text-white shadow-lg rounded-md w-40 border border-white/20"
//                     >
//                       <button
//                         onClick={handleLogout}
//                         className="w-full text-left px-4 py-2 hover:bg-white/10 flex items-center"
//                       >
//                         <LogOut size={16} className="mr-2" /> Logout
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* ✅ Side Navigation (Mobile Menu) */}
//       <div
//         className={`
//           fixed top-0 left-0 h-full w-64 bg-black/70 backdrop-blur-xl 
//           transform ${isSideOpen ? "translate-x-0" : "-translate-x-full"}
//           transition-transform duration-300 z-50
//         `}
//       >
//         <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
//           <h2 className="text-lg font-semibold text-white">Menu</h2>
//           <button
//             onClick={() => setIsSideOpen(false)}
//             className="text-white/80 hover:text-white"
//           >
//             <ArrowLeft size={26} />
//           </button>
//         </div>

//         <ul className="flex flex-col mt-4 space-y-4 px-6 text-white/90 font-medium">
//           <Link to="/" onClick={() => setIsSideOpen(false)}>Home</Link>
//           <Link to="/movies" onClick={() => setIsSideOpen(false)}>Movies</Link>
//           <Link to="/streaming" onClick={() => setIsSideOpen(false)}>Streaming</Link>
//           <Link to="/upcoming" onClick={() => setIsSideOpen(false)}>Upcoming</Link>

//           {!user && (
//             <button
//               className="mt-4 py-2 border-t border-white/20 text-left"
//               onClick={() => {
//                 setIsLoginOpen(true);
//                 setIsSideOpen(false);
//               }}
//             >
//               Sign In
//             </button>
//           )}
//         </ul>
//       </div>

//       {/* Dark Overlay */}
//       {isSideOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//           onClick={() => setIsSideOpen(false)}
//         />
//       )}

//       {/* Login Modal */}
//       {isLoginOpen && <Login onClose={handleLoginSuccess} />}
//     </>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo32 from "../assets/logo32.png";
// import { ArrowLeft, LogOut } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import * as jwt_decode from "jwt-decode";
// import Login from "../pages/Login";

// const Navbar = () => {
//   const [isSideOpen, setIsSideOpen] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   // Check token on load and auto-logout if expired
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const storedUser = localStorage.getItem("user");

//     if (token) {
//       try {
//         const decoded = jwt_decode(token);
//         const currentTime = Date.now() / 1000; // seconds

//         if (decoded.exp < currentTime) {
//           handleLogout();
//         } else if (storedUser) {
//           setUser(JSON.parse(storedUser));
//         }
//       } catch (err) {
//         // Invalid token
//         handleLogout();
//       }
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     setDropdownOpen(false);
//     navigate("/"); // Optional: redirect to home page
//   };

//   const handleLoginSuccess = () => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//     setIsLoginOpen(false);
//   };

//   return (
//     <>
//       {/* ✅ Modern OTT Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
//         <div className="flex items-center justify-between px-6 py-3">
//           {/* ✅ Logo + Name */}
//           <div
//             onClick={() => setIsSideOpen(true)}
//             className="flex items-center space-x-3 cursor-pointer"
//           >
//             <img src={logo32} alt="BYT" className="h-10 w-10" />
//             <span className="text-xl tracking-wide font-semibold text-white">
//               BookYourTickets
//             </span>
//           </div>

//           {/* ✅ Main Links (Desktop) */}
//           {/* <ul className="hidden md:flex items-center space-x-8 text-white/90 font-medium">
//             <Link to="/" className="hover:text-white transition">Home</Link>
//             <Link to="/bookings" className="hover:text-white transition">Booking</Link>
//             <Link to="/streaming" className="hover:text-white transition">Streaming</Link>
//             <Link to="/upcoming" className="hover:text-white transition">Upcoming</Link>
//           </ul> */}

//           {/* ✅ Search + User */}
//           <div className="flex items-center space-x-4 relative">
//             {/* Search Bar */}
//             <div className="hidden md:flex items-center relative">
//               <input
//                 type="text"
//                 placeholder="Search movies..."
//                 className="bg-white/10 text-white placeholder-white/60 px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
//               />
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 absolute right-3 text-white/80"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
//                 />
//               </svg>
//             </div>

//             {/* ✅ Sign In or User Menu */}
//             {!user ? (
//               <button
//                 onClick={() => setIsLoginOpen(true)}
//                 className="px-5 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition"
//               >
//                 Sign In
//               </button>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen((prev) => !prev)}
//                   className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
//                 >
//                   <span className="font-semibold">
//                     {user.user_name ? `Hi, ${user.user_name}` : "My Account"}
//                   </span>
//                 </button>

//                 <AnimatePresence>
//                   {dropdownOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute right-0 mt-2 bg-black/90 text-white shadow-lg rounded-md w-40 border border-white/20"
//                     >
//                       <button
//                         onClick={handleLogout}
//                         className="w-full text-left px-4 py-2 hover:bg-white/10 flex items-center"
//                       >
//                         <LogOut size={16} className="mr-2" /> Logout
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* ✅ Side Navigation (Mobile Menu) */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-black/70 backdrop-blur-xl transform ${isSideOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}
//       >
//         <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
//           <h2 className="text-lg font-semibold text-white">Menu</h2>
//           <button
//             onClick={() => setIsSideOpen(false)}
//             className="text-white/80 hover:text-white"
//           >
//             <ArrowLeft size={26} />
//           </button>
//         </div>

//         <ul className="flex flex-col mt-4 space-y-4 px-6 text-white/90 font-medium">
//           <Link to="/" onClick={() => setIsSideOpen(false)}>Home</Link>
//           <Link to="/bookings" onClick={() => setIsSideOpen(false)}>Bookings</Link>
//           {/* <Link to="/streaming" onClick={() => setIsSideOpen(false)}>Streaming</Link>
//           <Link to="/upcoming" onClick={() => setIsSideOpen(false)}>Upcoming</Link> */}

//           {!user && (
//             <button
//               className="mt-4 py-2 border-t border-white/20 text-left"
//               onClick={() => {
//                 setIsLoginOpen(true);
//                 setIsSideOpen(false);
//               }}
//             >
//               Sign In
//             </button>
//           )}
//         </ul>
//       </div>

//       {/* Dark Overlay */}
//       {isSideOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//           onClick={() => setIsSideOpen(false)}
//         />
//       )}

//       {/* Login Modal */}
//       {isLoginOpen && <Login onClose={handleLoginSuccess} />}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo32 from "../assets/logo32.png";
import { ArrowLeft, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "../pages/Login";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ Modern OTT Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-3">
          {/* ✅ Logo + Name */}
          <div
            onClick={() => setIsSideOpen(true)}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img src={logo32} alt="BYT" className="h-10 w-10" />
            <span className="text-xl tracking-wide font-semibold text-white">
              BookYourTickets
            </span>
          </div>

          {/* ✅ Search + User */}
          <div className="flex items-center space-x-4 relative">
            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-white/10 text-white placeholder-white/60 px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>

            {/* ✅ Sign In or User Menu */}
            {!user ? (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-5 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition"
              >
                Sign In
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <span className="font-semibold">
                    {user.user_name
                      ? `Hi, ${user.user_name}`
                      : "My Account"}
                  </span>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 bg-black/90 text-white shadow-lg rounded-md w-40 border border-white/20"
                    >
                      <button
                        onClick={() => {
                          logout();
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-white/10 flex items-center"
                      >
                        <LogOut size={16} className="mr-2" /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ✅ Side Navigation (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black/70 backdrop-blur-xl transform ${
          isSideOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={() => setIsSideOpen(false)}
            className="text-white/80 hover:text-white"
          >
            <ArrowLeft size={26} />
          </button>
        </div>

        <ul className="flex flex-col mt-4 space-y-4 px-6 text-white/90 font-medium">
          <Link to="/" onClick={() => setIsSideOpen(false)}>
            Home
          </Link>
          <Link to="/bookings" onClick={() => setIsSideOpen(false)}>
            Bookings
          </Link>

          {!user && (
            <button
              className="mt-4 py-2 border-t border-white/20 text-left"
              onClick={() => {
                setIsLoginOpen(true);
                setIsSideOpen(false);
              }}
            >
              Sign In
            </button>
          )}
        </ul>
      </div>

      {/* Dark Overlay */}
      {isSideOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsSideOpen(false)}
        />
      )}

      {/* Login Modal */}
      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
    </>
  );
};

export default Navbar;
