'use client';

import Image from 'next/image';
import React, { useActionState, useRef } from 'react';

import SearchIcon from '@/images/searchIcon.svg';

import { Toast } from '../common';

import searchAction from './action/searchAction';
import CategorySelector from './components/CategorySelector';
import useElementId from './hooks/useElementId';
import useToast from './hooks/useToast';
import styles from './index.module.scss';

interface Props {
  categoryInfo: Record<string, string>;
}

const Searchbar = ({ categoryInfo }: Props) => {
  const [state, formAction, isPending] = useActionState(searchAction, null);
  const { isOpenToast, handleCloseToast } = useToast({ state });

  const elementId = useElementId();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleFormAction = (payload: FormData) => {
    if (!searchInputRef.current || searchInputRef.current.value.trim() === '') return;
    formAction(payload);
  };

  return (
    <form className={styles.searchbar} action={handleFormAction}>
      <CategorySelector elementId={elementId} categoryInfo={categoryInfo} />
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
        <Toast handleCloseToast={handleCloseToast}>
          <p>{state?.error}</p>
        </Toast>
      )}
    </form>
  );
};

export default Searchbar;
