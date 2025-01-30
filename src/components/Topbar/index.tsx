'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import { Searchbar } from '@/components';
import LogoIcon from '@/images/logo.svg';

import { ProcessSearchFunction, ProcessSearchParams } from '../search/Searchbar/action/searchAction';

import styles from './index.module.scss';

export const BOOK_SEARCH_CATEGORY_NAME: Record<string, string> = {
  title: '도서',
  author: '저자',
} as const;

const Topbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const processSearch: ProcessSearchFunction = ({ selectedCategory, searchValue }: ProcessSearchParams) => {
    router.push(`/search?category=${selectedCategory}&keyword=${searchValue}`);
  };

  const initialFormData = {
    category: searchParams.get('category') ?? Object.keys(BOOK_SEARCH_CATEGORY_NAME)[0],
    searchValue: searchParams.get('keyword') ?? '',
  };

  return (
    <header className={styles.topbar}>
      <div className={styles.logoContainer}>
        <Image src={LogoIcon} alt="" width={30} height={30} />
        <p className={styles.logoText}>BOOKER</p>
      </div>
      <Searchbar
        categoryInfo={BOOK_SEARCH_CATEGORY_NAME}
        processSearch={processSearch}
        initialFormData={initialFormData}
      />
    </header>
  );
};

export default Topbar;
