'use client';

import React, { useState } from 'react';

import CategorySelectorButton from './components/CategorySelectorButton';
import DropdownMenu from './components/DropdownMenu';
import useOpenDropdownMenu from './hooks/useOpenDropdownMenu';

export interface CategorySelectorProps {
  initialCategory: string;
  elementId: Record<string, string>;
  categoryInfo: Record<string, string>;
}
const CategorySelector = ({ initialCategory, elementId, categoryInfo }: CategorySelectorProps) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const {
    dropdownMenuButtonRef,
    dropdownMenuRef,
    isOpenDropdownMenu,
    handleClickDropdownOpenButton,
    closeDropdownMenu,
  } = useOpenDropdownMenu();

  const changeCategory = (item: string) => {
    if (item === selectedCategory) return;
    setSelectedCategory(item);
    closeDropdownMenu();
  };
  return (
    <>
      <CategorySelectorButton
        dropdownMenuButtonRef={dropdownMenuButtonRef}
        isOpenDropdownMenu={isOpenDropdownMenu}
        elementId={elementId}
        handleClickDropdownOpenButton={handleClickDropdownOpenButton}
        categoryInfo={categoryInfo}
        selectedCategory={selectedCategory}
      />
      {isOpenDropdownMenu && (
        <DropdownMenu
          id={elementId.searchCategoryList}
          dropdownMenuRef={dropdownMenuRef}
          selectedCategory={selectedCategory}
          categoryInfo={categoryInfo}
          changeCategory={changeCategory}
        />
      )}
    </>
  );
};

export default CategorySelector;
