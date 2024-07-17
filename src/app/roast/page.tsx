"use client";
import React, { useState, useEffect } from "react";
import { run } from "../action";

const Page = () => {
  const [website, setWebsite] = useState("");
  const [roast, setRoast] = useState("");
  const [displayedRoast, setDisplayedRoast] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setWebsite(event.target.value);
  };

  const handleRoast = async () => {
    if (!website.trim()) return; // Prevent roasting empty input
    setIsLoading(true);
    setRoast("");
    setDisplayedRoast("");
    const genRoast = await run(website);
    setRoast(genRoast);
    setIsLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleRoast();
    }
  };

  useEffect(() => {
    if (roast) {
      let index = 0;
      const intervalId = setInterval(() => {
        setDisplayedRoast((prev) => prev + roast[index]);
        index++;
        if (index === roast.length) {
          clearInterval(intervalId);
        }
      }, 30);

      return () => clearInterval(intervalId);
    }
  }, [roast]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-purple-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,0,255,0.2)_0%,transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center p-8">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
          WebRoast Master
        </h1>
        <p className="text-xl mb-8">
          Serve up a sizzling critique of any website!
        </p>

        <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md p-6 rounded-xl">
          <input
            name="website"
            type="text"
            placeholder="Enter website URL to roast"
            value={website}
            className="w-full p-3 border border-pink-300 rounded-lg mb-4 text-gray-800 focus:outline-none focus:border-purple-500 transition-all"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleRoast}
            disabled={isLoading}
            className={`
              w-full p-3 rounded-lg font-bold text-lg
              bg-gradient-to-r from-white 
              text-black shadow-lg
              transform transition-all duration-300 ease-in-out
              hover:from-pink-600 hover:to-purple-700
              hover:shadow-pink-500/50 hover:scale-105
              active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed
              relative overflow-hidden group
  `}
          >
            <span className="relative z-10">
              {isLoading ? "Preparing the Roast..." : "Roast It!"}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
          </button>
        </div>

        {displayedRoast && (
          <div className="w-full max-w-md mt-8 bg-white/20 p-6 rounded-xl backdrop-blur-md animate-fade-in mx-auto">
            <h2 className="text-2xl font-bold text-pink-300 mb-4">
              Your Spicy Website Roast Dont take it personally!:
            </h2>
            <p className="text-lg leading-relaxed text-white">
              {displayedRoast}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        )}
      </div>

      <footer className="relative z-10 mt-8 md:mt-12 px-4 py-3 md:py-4 text-center">
        <p className="text-xs md:text-sm opacity-75 max-w-xs md:max-w-none mx-auto leading-relaxed">
          Remember: We roast with love ❤️ <br className="md:hidden" />
          No websites were harmed in this process!
        </p>
      </footer>
    </div>
  );
};

export default Page;
