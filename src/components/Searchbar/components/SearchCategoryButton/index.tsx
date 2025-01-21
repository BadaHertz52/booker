import classNames from 'classnames';
import Image from 'next/image';

import FullTriangle from '@/images/fullTriangle.svg';

import styles from './index.module.scss';

interface Props {
  dropdownMenuButtonRef: React.RefObject<HTMLButtonElement | null>;
  isOpenDropdownMenu: boolean;
  elementId: Record<string, string>;
  handleClickDropdownOpenButton: () => void;
  categoryInfo: Record<string, string>;
  selectedCategory: string;
}

const SearchCategoryButton = ({
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
      <input name="selectedCategory" readOnly hidden value={categoryInfo[selectedCategory]} />
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
  );
};

export default SearchCategoryButton;
