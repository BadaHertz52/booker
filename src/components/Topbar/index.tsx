'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import { Searchbar } from '@/components';
import { BOOK_SEARCH_CATEGORY_NAME } from '@/constants';
import LogoIcon from '@/images/logo.svg';

import { ProcessSearchFunction, ProcessSearchParams } from '../search/Searchbar/action/searchAction';

import styles from './index.module.scss';

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
      <a className={styles.skipLink} href="#main">
        본문 건너뛰기
      </a>
      <div className={styles.topbarInner}>
        <Link
          className={styles.logoContainer}
          href="/"
          aria-label="BOOKER 로고 : 클릭 시 홈으로 돌아가기"
          prefetch={false}
        >
          <Image src={LogoIcon} alt="" width={30} height={30} aria-hidden />
          <p className={styles.logoText} aria-hidden>
            BOOKER
          </p>
        </Link>
        <div className={styles.searchbarWrapper}>
          <Searchbar
            categoryInfo={BOOK_SEARCH_CATEGORY_NAME}
            processSearch={processSearch}
            initialFormData={initialFormData}
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
