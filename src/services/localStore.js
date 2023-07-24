export const setStore = (name, value) => {
  localStorage.setItem(name, value);
};

export const getStore = (name) => {
  return localStorage.getItem(name);
};

export const removeStore = (name) => {
  localStorage.removeItem(name);
};