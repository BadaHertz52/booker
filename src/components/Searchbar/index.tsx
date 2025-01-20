'use client';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';

import FullTriangle from '@/images/fullTriangle.svg';
import SearchIcon from '@/images/searchIcon.svg';
import { debounce } from '@/utils/debounce';

import styles from './index.module.scss';
type SearchCategory = 'title' | 'author';

const CATEGORY_NAME: Record<SearchCategory, string> = {
  title: '도서',
  author: '저자',
} as const;

const ELEMENT_ID = {
  searchCategoryList: 'search-category-list',
  searchInput: 'searchInput',
  dropdownMenuButton: 'dropdownMenuButton',
} as const;

const DELAY_TIME = 1 * 100;
interface CategoryDropdownMenuProps {
  category: SearchCategory;
  changeCategory: () => void;
}
const CategoryDropdownMenu = ({ category, changeCategory }: CategoryDropdownMenuProps) => {
  return (
    <ul id={ELEMENT_ID.searchCategoryList} className={styles.dropdownMenu}>
      {Object.entries(CATEGORY_NAME).map(([key, value]) => (
        <li key={key} role="option" aria-selected={category === value} tabIndex={category === value ? 0 : -1}>
          {value}
        </li>
      ))}
    </ul>
  );
};
const Searchbar = () => {
  const [category, setCategory] = useState<SearchCategory>('title');
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(true);

  const handleClickDropdownOpenButton = debounce(() => {
    setIsOpenDropdownMenu((prev) => !prev);
  }, DELAY_TIME);

  const changeCategory = () => {};
  return (
    <form className={styles.searchbar}>
      <button
        id={ELEMENT_ID.dropdownMenuButton}
        type="button"
        className={styles.categoryContainer}
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls={ELEMENT_ID.searchCategoryList}
        onClick={handleClickDropdownOpenButton}
      >
        <span title="검색유형">{CATEGORY_NAME[category]}</span>
        <Image
          className={classNames(styles.triangle, { [styles.reverse]: isOpenDropdownMenu })}
          src={FullTriangle}
          alt=""
          width={10}
          height={8}
          aria-hidden="true"
        />
        <span aria-hidden="true" className={styles.bar}>
          |
        </span>
      </button>
      {isOpenDropdownMenu && <CategoryDropdownMenu category={category} changeCategory={changeCategory} />}
      <label className="sr-only" htmlFor={ELEMENT_ID.searchInput}>
        검색어
      </label>
      <input id={ELEMENT_ID.searchInput} type="search" name="searchValue" placeholder="검색어를 입력해주세요" />
      <button className={styles.searchButton}>
        <Image src={SearchIcon} alt="" width={17} height={18} />
      </button>
    </form>
  );
};

export default Searchbar;
