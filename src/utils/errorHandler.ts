import CustomError from '@/errors/CustomError';

interface ErrorHandlerProps {
  statusCode: number;
  errorMessage: string;
  errorName: string;
}
export const throwRequestError = ({ statusCode, errorMessage, errorName }: ErrorHandlerProps) => {
  const error = new CustomError({
    message: errorMessage,
    statusCode,
    name: errorName,
  });
  console.error(`[${errorName}] ${error.message} (Status: ${error.statusCode})`);

  throw error;
};
