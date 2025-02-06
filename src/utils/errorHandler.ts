import CustomError from '@/errors/CustomError';

interface ErrorHandlerProps {
  statusCode: number;
  errorMessage: string;
  errorName: string;
}
/**
 * 요청 오류 처리
 * @param statusCode 상태 코드
 * @param errorMessage 오류 메시지
 * @param errorName 오류 이름
 */
export const throwRequestError = ({ statusCode, errorMessage, errorName }: ErrorHandlerProps) => {
  const error = new CustomError({
    message: errorMessage,
    statusCode,
    name: errorName,
  });
  console.error(`[${errorName}] ${error.message} (Status: ${error.statusCode})`);

  throw error;
};
