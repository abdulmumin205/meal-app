const paginate = (foods) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(foods.length / itemsPerPage);

  const newFoods = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return foods.slice(start, start + itemsPerPage);
  });

  return newFoods;
};

export default paginate;
