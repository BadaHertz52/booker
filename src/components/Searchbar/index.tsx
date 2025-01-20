'use client';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import FullTriangle from '@/images/fullTriangle.svg';
import SearchIcon from '@/images/searchIcon.svg';
import { debounce } from '@/utils/debounce';

import useElementId from './hooks/useElementId';
import styles from './index.module.scss';
type SearchCategory = 'title' | 'author';

const CATEGORY_NAME: Record<SearchCategory, string> = {
  title: '도서',
  author: '저자',
} as const;

const DELAY_TIME = 1 * 100;
interface CategoryDropdownMenuProps {
  id: string;
  category: SearchCategory;
  changeCategory: () => void;
}
const CategoryDropdownMenu = ({ id, category, changeCategory }: CategoryDropdownMenuProps) => {
  return (
    <ul id={id} className={styles.dropdownMenu}>
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
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
  const elementId = useElementId();

  const handleClickDropdownOpenButton = debounce(() => {
    setIsOpenDropdownMenu((prev) => !prev);
  }, DELAY_TIME);

  const handleDropdownMenu = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;

    if (e.target.closest(`#${elementId.searchCategoryList}`) || e.target.closest(`#${elementId.dropdownMenuButton}`))
      return;
    setIsOpenDropdownMenu(false);
  };

  const changeCategory = () => {};

  useEffect(() => {
    document.addEventListener('click', handleDropdownMenu);
    return () => {
      document.removeEventListener('click', handleDropdownMenu);
    };
  }, []);

  return (
    <form className={styles.searchbar}>
      <button
        id={elementId.dropdownMenuButton}
        type="button"
        className={styles.categoryContainer}
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls={elementId.searchCategoryList}
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
      {isOpenDropdownMenu && (
        <CategoryDropdownMenu id={elementId.searchCategoryList} category={category} changeCategory={changeCategory} />
      )}
      <label className="sr-only" htmlFor={elementId.searchInput}>
        검색어
      </label>
      <input id={elementId.searchInput} type="search" name="searchValue" placeholder="검색어를 입력해주세요" />
      <button className={styles.searchButton}>
        <Image src={SearchIcon} alt="" width={17} height={18} />
      </button>
    </form>
  );
};

export default Searchbar;
