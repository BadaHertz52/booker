import { useEffect, useState } from 'react';

import { debounce } from '@/utils/debounce';

const DELAY_TIME = 1 * 100;

interface Props {
  dropdownMenuRef: React.RefObject<HTMLUListElement | null>;
  dropdownMenuButtonRef: React.RefObject<HTMLButtonElement | null>;
}
const useOpenDropdownMenu = ({ dropdownMenuButtonRef, dropdownMenuRef }: Props) => {
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);

  const handleClickDropdownOpenButton = debounce(() => {
    setIsOpenDropdownMenu((prev) => !prev);
  }, DELAY_TIME);

  const handleDropdownMenu = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (!dropdownMenuButtonRef.current || !dropdownMenuRef.current) return;
    if (dropdownMenuButtonRef.current.contains(e.target) || dropdownMenuRef.current.contains(e.target)) return;

    setIsOpenDropdownMenu(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleDropdownMenu);
    return () => {
      document.removeEventListener('click', handleDropdownMenu);
    };
  }, [dropdownMenuButtonRef, dropdownMenuRef]);

  return { isOpenDropdownMenu, handleClickDropdownOpenButton, closeDropdownMenu: () => setIsOpenDropdownMenu(false) };
};

export default useOpenDropdownMenu;
