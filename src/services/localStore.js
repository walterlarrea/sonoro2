export const setStore = (name, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(name, value);
  }
};

export const getStore = (name) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(name);
  }
};

export const removeStore = (name) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(name);
  }
};