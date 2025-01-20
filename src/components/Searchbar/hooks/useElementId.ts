import { useId } from 'react';

const ID = {
  searchCategoryList: 'search-category-list',
  searchInput: 'searchInput',
} as const;

const useElementId = () => {
  const componentId = useId();

  const gettingElementID = (componentId: string) => {
    const elementID: Record<string, string> = {};
    Object.entries(ID).forEach(([key, value]) => {
      elementID[key] = `${componentId}__${value}`;
    });

    return elementID;
  };

  return gettingElementID(componentId);
};

export default useElementId;
