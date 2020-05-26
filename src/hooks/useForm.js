import { useState } from "react";

const useForm = (initialData) => {
  const [data, setData] = useState(initialData);

  const changeHandler = (e) => {
    if (e.target.type === "number") {
      setData({ ...data, [e.target.name]: parseInt(e.target.value) });
    }
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return {
    data,
    setData,
    changeHandler,
  };
};

export { useForm };
