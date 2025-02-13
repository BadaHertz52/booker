export const debounce = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
  let timerId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timerId) {
      clearTimeout(timerId); // 이전 타이머를 취소
    }

    timerId = setTimeout(() => {
      callback(...args); // 마지막 호출만 실행
    }, delay);
  };
};
