import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/all?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center relative w-full max-w-[340px] md:max-w-[420px] lg:max-w-[480px] transition-all duration-300"
      role="search"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="absolute left-4 fill-[#bdbecb] w-5 h-5 pointer-events-none z-10 top-1/2 -translate-y-1/2"
      >
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
      <input
        id="query"
        className="font-montserrat w-full h-[48px] pl-12 pr-4 shadow-[0_2px_16px_0_rgba(6,182,212,0.10)] border border-cyan-700/40 rounded-xl bg-[#181b22] outline-none text-cyan-100 placeholder:text-cyan-400 transition-all duration-250 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-text z-0 focus:shadow-[0_0_0_2.5px_#06b6d4,0_2px_16px_0_rgba(6,182,212,0.10)] focus:border-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_0_2.5px_#06b6d4,0_2px_16px_0_rgba(6,182,212,0.10)] active:scale-95"
        type="search"
        placeholder="Search for series, movie or anime..."
        name="searchbar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoComplete="off"
        aria-label="Search for series, movie or anime"
      />
    </form>
  );
};

export default SearchBar;
