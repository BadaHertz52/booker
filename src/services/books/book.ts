import { ERROR_MESSAGE, ERROR_NAME, ONE_DAY_IN_SECONDS } from '@/constants';
import { throwRequestError } from '@/utils';

import { naruEndpoint } from '../endpoints/naruEndpoint';

export const fetchDetailBook = async (isbn: string) => {
  const response = await fetch(naruEndpoint.gettingDetailBook(isbn), { next: { revalidate: ONE_DAY_IN_SECONDS } });

  if (!response.ok) {
    throwRequestError({
      statusCode: response.status,
      errorMessage: ERROR_MESSAGE.detailBook,
      errorName: ERROR_NAME.detailBook,
    });
  }

  const data = await response.json();

  return data;
};
