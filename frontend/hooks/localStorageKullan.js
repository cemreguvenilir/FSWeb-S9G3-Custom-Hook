import { useState } from "react";

function localStorageKullan(key, initialValue) {
  const [data, setData] = useState(() => {
    const localData = JSON.parse(localStorage.getItem(key));
    if (localData !== null) {
      return localData;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  function newLS(newValue) {
    setData(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }
  return [data, newLS];
}

export default localStorageKullan;
