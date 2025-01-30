import React from 'react';

import styles from './index.module.scss';

interface Props {
  elementId: Record<string, string>;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  isPending: boolean;
  initialSearchValue?: string;
}

const SearchInputField = ({ elementId, searchInputRef, isPending, initialSearchValue }: Props) => {
  return (
    <>
      <label className="sr-only" htmlFor={elementId.searchInput}>
        검색어
      </label>
      <input
        className={styles.input}
        id={elementId.searchInput}
        type="search"
        ref={searchInputRef}
        disabled={isPending}
        name="searchValue"
        placeholder="검색어를 입력해주세요"
        defaultValue={initialSearchValue}
      />
    </>
  );
};

export default SearchInputField;
