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
