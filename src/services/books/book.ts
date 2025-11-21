import { ERROR_MESSAGE, ERROR_NAME } from '@/constants/error';
import { ONE_DAY_IN_SECONDS } from '@/constants/time';
import { throwRequestError } from '@/utils/errorHandler';

import { naruEndpoint } from '../endpoints/naruEndpoint';

export const fetchBookDetails = async (isbn: string) => {
  const response = await fetch(naruEndpoint.gettingBookDetails(isbn), { next: { revalidate: ONE_DAY_IN_SECONDS } });

  if (!response.ok) {
    throwRequestError({
      statusCode: response.status,
      errorMessage: ERROR_MESSAGE.bookDetails,
      errorName: ERROR_NAME.bookDetails,
    });
  }

  const data = await response.json();

  return data;
};
