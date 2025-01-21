'use client';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useActionState, useRef, useState } from 'react';

import FullTriangle from '@/images/fullTriangle.svg';
import SearchIcon from '@/images/searchIcon.svg';

import searchAction from './action/searchAction';
import DropdownMenu from './components/DropdownMenu';
import useElementId from './hooks/useElementId';
import useOpenDropdownMenu from './hooks/useOpenDropdownMenu';
import styles from './index.module.scss';

type SearchCategory = 'title' | 'author';

const CATEGORY_NAME: Record<string, string> = {
  title: '도서',
  author: '저자',
} as const;

const Searchbar = () => {
  const [selectedCategory, setSelectedCategory] = useState('title');
  const [state, formAction, isPending] = useActionState(searchAction, null);

  const elementId = useElementId();
  const dropdownMenuButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = useRef<HTMLUListElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { isOpenDropdownMenu, handleClickDropdownOpenButton, closeDropdownMenu } = useOpenDropdownMenu({
    dropdownMenuButtonRef,
    dropdownMenuRef,
  });

  const changeCategory = (item: string) => {
    if (item === selectedCategory) return;
    setSelectedCategory(item);
    closeDropdownMenu();
  };

  const handleFormAction = (payload: FormData) => {
    if (!searchInputRef.current || searchInputRef.current.value.trim() === '') return;
    formAction(payload);
  };

  return (
    <form className={styles.searchbar} action={handleFormAction}>
      <button
        ref={dropdownMenuButtonRef}
        type="button"
        className={styles.categoryContainer}
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls={elementId.searchCategoryList}
        onClick={handleClickDropdownOpenButton}
      >
        <input title="검색유형" name="selectedCategory" readOnly hidden value={CATEGORY_NAME[selectedCategory]} />
        <span title="검색유형">{CATEGORY_NAME[selectedCategory]}</span>
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
        <DropdownMenu
          id={elementId.searchCategoryList}
          dropdownMenuRef={dropdownMenuRef}
          selectedCategory={selectedCategory}
          categoryInfo={CATEGORY_NAME}
          changeCategory={changeCategory}
        />
      )}
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
      <button type="submit" className={styles.searchButton} disabled={isPending}>
        <Image src={SearchIcon} alt="" width={17} height={18} />
      </button>
    </form>
  );
};

export default Searchbar;
