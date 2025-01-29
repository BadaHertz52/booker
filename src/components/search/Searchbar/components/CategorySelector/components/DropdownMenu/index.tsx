import React from 'react';

import styles from './index.module.scss';

interface DropdownMenuProps {
  id: string;
  dropdownMenuRef: React.RefObject<HTMLUListElement | null>;
  categoryInfo: Record<string, string>;
  selectedCategory: string;
  changeCategory: (item: string) => void;
}

const DropdownMenu = ({ id, dropdownMenuRef, selectedCategory, categoryInfo, changeCategory }: DropdownMenuProps) => {
  const handleClickList = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    changeCategory(e.target.name);
  };

  return (
    <ul id={id} ref={dropdownMenuRef} className={styles.dropdownMenu} role="listbox">
      {Object.entries(categoryInfo).map(([key, value]) => (
        <li key={key} role="none">
          <button
            name={key}
            role="option"
            type="button"
            aria-selected={selectedCategory === value}
            onClick={handleClickList}
          >
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
