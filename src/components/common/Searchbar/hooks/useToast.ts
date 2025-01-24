import { useEffect, useState } from 'react';

import { ActionState } from '@/types/actionState';

interface Props {
  state: ActionState | null;
}
const useToast = ({ state }: Props) => {
  const [isOpenToast, setIsOpenToast] = useState(false);

  const handleCloseToast = () => setIsOpenToast(false);

  useEffect(() => {
    if (!state) return;
    setIsOpenToast(!state?.status);
  }, [state]);

  return { isOpenToast, handleCloseToast };
};

export default useToast;
