export const listSort = listItems => {

  console.log('listSort');
  // debugger;

  return listItems.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
    return 0;
  });
};
