'use client';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useActionState, useEffect, useRef, useState } from 'react';

import FullTriangle from '@/images/fullTriangle.svg';
import SearchIcon from '@/images/searchIcon.svg';

import { Toast } from '../common';

import searchAction from './action/searchAction';
import DropdownMenu from './components/DropdownMenu';
import useElementId from './hooks/useElementId';
import useOpenDropdownMenu from './hooks/useOpenDropdownMenu';
import styles from './index.module.scss';

interface Props {
  categoryInfo: Record<string, string>;
}

const Searchbar = ({ categoryInfo }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState('title');
  const [state, formAction, isPending] = useActionState(searchAction, null);
  const [isOpenToast, setIsOpenToast] = useState(false);

  useEffect(() => {
    if (!state) return;
    setIsOpenToast(!state?.status);
  }, [state]);

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
        <input title="검색유형" name="selectedCategory" readOnly hidden value={categoryInfo[selectedCategory]} />
        <span title="검색유형">{categoryInfo[selectedCategory]}</span>
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
          categoryInfo={categoryInfo}
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
      {isOpenToast && (
        <Toast handleCloseToast={() => setIsOpenToast(false)}>
          <p>{state?.error}</p>
        </Toast>
      )}
    </form>
  );
};

export default Searchbar;
