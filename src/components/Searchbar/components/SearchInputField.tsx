import React from 'react';

interface Props {
  elementId: Record<string, string>;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  isPending: boolean;
}

const SearchInputField = ({ elementId, searchInputRef, isPending }: Props) => {
  return (
    <>
      <label className="sr-only" htmlFor={elementId.searchInput}>
        검색어
      </label>
      <input
        id={elementId.searchInput}
        type="search"
        ref={searchInputRef}
        disabled={isPending}
        name="searchValue"
        placeholder="검색어를 입력해주세요"
      />
    </>
  );
};

export default SearchInputField;
