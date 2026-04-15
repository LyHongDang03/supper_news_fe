'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({ placeholder = "Nhập vào đây để tìm kiếm", className = "", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleClear = () => {
    setQuery('');
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    } else {
      console.log('Searching for:', query);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full border border-slate-300 rounded-sm py-2.5 px-4 outline-none focus:border-blue-500 text-slate-700 bg-white"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-400">
        {query && (
          <button 
            type="button" 
            onClick={handleClear} 
            className="hover:text-slate-600 transition-colors cursor-pointer"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <div className="w-px h-4 bg-slate-300"></div>
        <button 
          type="button" 
          onClick={handleSearch} 
          className="hover:text-slate-600 transition-colors cursor-pointer"
          aria-label="Search"
        >
          <Search className="w-5 h-5 text-slate-600" />
        </button>
      </div>
    </div>
  );
}
