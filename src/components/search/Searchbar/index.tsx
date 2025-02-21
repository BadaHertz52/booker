'use client';

import Image from 'next/image';
import React, { lazy, useActionState, useRef } from 'react';

import A11yMessage from '@/components/common/A11yMessage';
const Toast = lazy(() => import('@/components/overlay/Toast'));
import SearchIcon from '@/images/searchIcon.svg';

import searchAction, { ProcessSearchFunction } from './action/searchAction';
import CategorySelector from './components/CategorySelector';
import SearchInputField from './components/SearchInputField';
import useElementId from './hooks/useElementId';
import useToast from './hooks/useToast';
import styles from './index.module.scss';

interface Props {
  processSearch: ProcessSearchFunction;
  categoryInfo: Record<string, string>;
  initialFormData?: {
    category: string;
    searchValue: string;
  };
}

const Searchbar = ({ categoryInfo, processSearch, initialFormData }: Props) => {
  const [state, formAction, isPending] = useActionState(searchAction(processSearch), null);

  const { isOpenToast, handleCloseToast, errorAlertMessage } = useToast({ state });

  const elementId = useElementId();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleFormAction = (payload: FormData) => {
    if (!searchInputRef.current || searchInputRef.current.value.trim() === '') return;
    formAction(payload);
  };

  return (
    <form className={styles.searchbar} action={handleFormAction}>
      <CategorySelector
        elementId={elementId}
        categoryInfo={categoryInfo}
        initialCategory={initialFormData?.category ?? Object.keys(categoryInfo)[0]}
      />
      <SearchInputField
        elementId={elementId}
        searchInputRef={searchInputRef}
        isPending={isPending}
        initialSearchValue={initialFormData?.searchValue}
      />
      <button type="submit" className={styles.searchButton} disabled={isPending}>
        <span className="sr-only">검색 버튼</span>
        <Image src={SearchIcon} alt="" width={17} height={18} />
      </button>
      <A11yMessage isHidden={!isOpenToast} message={errorAlertMessage} />
      {isOpenToast && (
        <Toast handleCloseToast={handleCloseToast} a11yMessage={'검색 오류'}>
          <p>{state?.error}</p>
        </Toast>
      )}
    </form>
  );
};

export default Searchbar;
