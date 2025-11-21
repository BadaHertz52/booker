import { useEffect, useState } from 'react';

import { ActionState } from '@/types/actionState';

interface Props {
  state: ActionState | null;
}
const useToast = ({ state }: Props) => {
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [message, setMessage] = useState('');
  const handleCloseToast = () => setIsOpenToast(false);

  useEffect(() => {
    if (!state) return;
    setIsOpenToast(!state?.status);
  }, [state]);

  useEffect(() => {
    if (isOpenToast) {
      setTimeout(() => {
        setMessage(`검색 오류 안내: ${state?.error}`);
      }, 100); // 💡 약간의 지연을 주어 DOM 변경 감지
    } else {
      setMessage('');
    }
  }, [isOpenToast, state?.error]);

  return { isOpenToast, handleCloseToast, errorAlertMessage: message };
};

export default useToast;
