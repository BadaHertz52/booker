'use client';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';

import FullTriangle from '@/images/fullTriangle.svg';
import SearchIcon from '@/images/searchIcon.svg';

import styles from './index.module.scss';
type SearchCategory = 'title' | 'author';

const CATEGORY_NAME: Record<SearchCategory, string> = {
  title: '도서',
  author: '저자',
} as const;

interface CategoryDropdownMenuProps {
  category: SearchCategory;
  changeCategory: () => void;
}
const CategoryDropdownMenu = ({ category, changeCategory }: CategoryDropdownMenuProps) => {
  return <></>;
};
const Searchbar = () => {
  const [category, setCategory] = useState<SearchCategory>('title');
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const changeCategory = () => {};
  return (
    <div className={styles.searchbar}>
      <button className={styles.categoryContainer}>
        <span>{CATEGORY_NAME[category]}</span>
        <Image
          className={classNames({ [styles.reverseTriangle]: isOpenMenu })}
          src={FullTriangle}
          alt=""
          width={10}
          height={8}
        />
        <span className={styles.bar}>|</span>
      </button>
      {isOpenMenu && <CategoryDropdownMenu category={category} changeCategory={changeCategory} />}
      <input placeholder="검색어를 입력해주세요" />
      <button className={styles.searchButton}>
        <Image src={SearchIcon} alt="" width={17} height={18} />
      </button>
    </div>
  );
};

export default Searchbar;
