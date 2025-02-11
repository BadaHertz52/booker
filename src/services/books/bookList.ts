import { ERROR_MESSAGE, ERROR_NAME } from '@/constants';
import { throwRequestError } from '@/utils';

import { naruEndpoint } from '../endpoints/naruEndpoint';

const ONE_DAY_IN_SECONDS = 24 * 60 * 60;

export const fetchPopularBooks = async () => {
  const response = await fetch(naruEndpoint.popularBooks, {
    next: { revalidate: ONE_DAY_IN_SECONDS },
  });

  const data = await response.json();

  if (!response.ok) {
    throwRequestError({
      statusCode: response.status,
      errorMessage: ERROR_MESSAGE.popularBooks,
      errorName: ERROR_NAME.popularBooks,
    });
  }

  return data.response;
};
