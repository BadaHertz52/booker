import { ActionState } from '@/types/actionState';

export interface ProcessSearchParams {
  selectedCategory: FormDataEntryValue;
  searchValue: FormDataEntryValue;
}

export type ProcessSearchFunction = (params: ProcessSearchParams) => void | Promise<void>;

const searchAction =
  (processSearch: ProcessSearchFunction) =>
  async (_: any, formData: FormData): Promise<ActionState> => {
    // const selectedCategory = formData?.get('selectedCategory');
    // const searchValue = formData?.get('searchValue');
    // if (!selectedCategory) return { status: false, error: '검색 유형을 찾지 못했어요' };

    // if (!searchValue) return { status: false, error: '검색어 찾지 못했어요' };
    // // TODO: 추후에 api 연동 추가
    // await processSearch({ selectedCategory, searchValue });

    // return { status: true, error: '' };
    return { status: false, error: '검색 유형을 찾지 못했어요' };
  };

export default searchAction;
