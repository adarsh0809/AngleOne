import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Explore from "./pages/Explore";
import Main from "./pages/Main";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define Routes for Pages */}
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center h-screen bg-white">
              <div className="w-full max-w-md p-6 space-y-4 bg-white shadow-lg rounded-lg sm:max-w-lg md:max-w-xl">
                {/* Top 1/3 Section with Image */}
                <div className="flex items-center justify-center mb-4 flex-col">
                  <img
                    src="thumb.png"
                    alt="Placeholder"
                    className="object-cover w-full  rounded-lg sm:h-48 md:h-full"
                  />
                  <div className="text-2xl mt-4">Document Submitted!</div>
                  <div className="text-xl m-3">We have received your documents!</div>
                  <div className="text-md text-gray-500 font-semibold m-3 text-center">
                    It may take up to 3 working days to complete the verification. In the meantime, check out the app.
                  </div>
                </div>

                {/* Bottom 2/3 Section with Buttons */}
                <div className="flex flex-col space-y-4 items-center py-20">
                  <div className="flex items-center justify-center w-full flex-col">
                    <div className="text-xl text-blue-600 font-semibold">Explore the App</div>
                    <div className="text-xl text-slate-600 mt-2">Are you a Beginner?</div>
                    <Link to="/explore">
                      <button className="w-[300px] px-4 py-2 m-2 text-white font-bold bg-orange-400 rounded-lg shadow-md hover:bg-orange-500">
                        Guided Journey
                      </button>
                    </Link>

                    <div className="text-xl text-slate-600 my-2">Redirect to Main Page</div>
                    <Link to="/main">
                      <button className="w-[300px] px-4 py-2 text-white font-bold bg-blue-400 rounded-lg shadow-md hover:bg-blue-500">
                        Main Page
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
