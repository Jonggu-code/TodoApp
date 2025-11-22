import { useRef } from 'react';
import { SearchProps } from '../../types/props';
import CancelIcon from '../ui/icons/CancelIcon';
import SearchIcon from '../ui/icons/SearchIcon';
import { useAutoFocus } from '../../hooks/useAutoFocus';

export default function SearchBar({
  search,
  setSearch,
  searchOn,
  setSearchOn,
}: SearchProps) {
  const inputRef = useAutoFocus<HTMLInputElement>(searchOn);
  return (
    <div
      className={`p-2 flex ${searchOn ? 'w-120 bg-lime-200' : 'overflow-hidden w-12 hover:bg-lime-200'} rounded-xl transition-all duration-300 cursor-pointer`}
    >
      <button onClick={() => setSearchOn(!searchOn)}>
        <SearchIcon
          className="cursor-pointer w-7 mr-2 text-lime-400"
          strokeWidth={2.5}
        />
      </button>
      {searchOn ? (
        <div className="flex justify-between">
          <input
            ref={inputRef}
            className="w-[90%] focus:outline-none focus:border-0"
            type="text"
            placeholder="내용 검색"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              setSearch('');
              setSearchOn(false);
            }}
          >
            <CancelIcon
              className="cursor-pointer w-5 text-lime-400"
              strokeWidth={1}
            />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
