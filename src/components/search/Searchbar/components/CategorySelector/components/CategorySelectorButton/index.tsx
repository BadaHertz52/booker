import classNames from 'classnames';
import Image from 'next/image';

import FullTriangle from '@/images/fullTriangle.svg';

import { CategorySelectorProps } from '../..';

import styles from './index.module.scss';

interface Props extends Omit<CategorySelectorProps, 'initialCategory'> {
  dropdownMenuButtonRef: React.RefObject<HTMLButtonElement | null>;
  isOpenDropdownMenu: boolean;
  handleClickDropdownOpenButton: () => void;
  selectedCategory: string;
}

const CategorySelectorButton = ({
  dropdownMenuButtonRef,
  isOpenDropdownMenu,
  elementId,
  handleClickDropdownOpenButton,
  categoryInfo,
  selectedCategory,
}: Props) => {
  return (
    <button
      ref={dropdownMenuButtonRef}
      type="button"
      className={styles.categoryContainer}
      aria-haspopup="listbox"
      aria-expanded={isOpenDropdownMenu}
      aria-controls={elementId.searchCategoryList}
      onClick={handleClickDropdownOpenButton}
    >
      <input name="selectedCategory" readOnly hidden value={selectedCategory} />
      <span title="검색유형">{categoryInfo[selectedCategory]}</span>
      <Image
        className={classNames(styles.triangle, { [styles.reverse]: isOpenDropdownMenu })}
        src={FullTriangle}
        alt=""
        width={10}
        height={8}
      />
      <span aria-hidden="true" className={styles.bar}>
        |
      </span>
    </button>
  );
};

export default CategorySelectorButton;
