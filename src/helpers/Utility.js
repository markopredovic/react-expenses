export const getLocalStorage = key => {
  let localStorageItemJson = null;

  try {
    localStorageItemJson = window.localStorage.getItem(key);
  } catch (e) {
    return null;
  }
  const localStorageItem = JSON.parse(localStorageItemJson);

  return localStorageItem;
};

export const setLocalStorage = (key, value) => {
  const valueString = JSON.stringify(value);

  window.localStorage.setItem(key, valueString);
};

export const expenseCompare = (a, b) => {
  return new Date(a.date) > new Date(b.date) ? -1 : 1;
};

export const getLocaleDate = date => {
  let localeDate = new Date(date);

  return localeDate.toLocaleDateString("sr-SR");
};
