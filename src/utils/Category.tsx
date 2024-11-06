enum Category {
  ALL = 0,
  ROMANCE = 1,
  SPORTS = 2,
  KIDS = 3,
  HORROR = 4,
}

const getCategoryLabel = (category: Category): string => {
  switch (category) {
    case Category.ROMANCE:
      return 'Romance';
    case Category.SPORTS:
      return 'Sports';
    case Category.KIDS:
      return 'Kids';
    case Category.HORROR:
      return 'Horror';
    case Category.ALL:
      return 'All';
    default:
      return 'Null';
  }
};

export default Category;
export { getCategoryLabel };