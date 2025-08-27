const extractData = (data) => {
  const dishesData = data?.filter(
    (c) => c?.card?.card?.itemCards || c?.card?.card?.categories,
  );

  const itemCardArray = dishesData
    ?.filter((c) => c?.card?.card?.itemCards)
    ?.flatMap((d) => d?.card?.card?.itemCards)
    ?.filter((e) => e?.card)
    ?.flatMap((f) => f?.card?.info);

  const categoriesCardArray = dishesData
    ?.filter((c) => c?.card?.card?.categories)
    ?.flatMap((d) => d?.card?.card?.categories)
    ?.filter((e) => e?.itemCards)
    ?.flatMap((f) => f?.itemCards)
    ?.filter((g) => g?.card)
    ?.flatMap((h) => h?.card?.info);

  //   console.log(dishesData);
  //   console.log(itemCardArray);
  // console.log(categoriesCardArray);

  const allDishArray = [...itemCardArray, ...categoriesCardArray];
  // console.log(allDishArray);

  return allDishArray;
};

export const searchFunctionality = (data, input) => {
  const allDishesData = extractData(data);
  // console.log(allDishesData);
  // console.log(data);

  const searchedData = allDishesData?.filter((item) =>
    item?.name?.toLowerCase()?.includes(input),
  );

  for (let i = 0; i < searchedData.length - 1; i++) {
    for (let j = i + 1; j < searchedData.length; j++) {
      if (
        searchedData[i]?.name?.toLowerCase() ===
          searchedData[j]?.name?.toLowerCase() ||
        searchedData[i]?.name?.toLowerCase().trim().slice(0, -1) ===
          searchedData[j]?.name?.toLowerCase().trim()
      ) {
        searchedData.splice(j, 1);
      }
    }
  }
  // console.log(searchedData);

  return searchedData;
};
