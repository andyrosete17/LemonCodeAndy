import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

// useDebounce es para que se espere antes de que se ejecute la funcion
export const useGetUsersFiltered = () => {
  const [filter, setFilter] = useState("");
  const [list, setList] = useState([]);
  const [debouncedFilter] = useDebounce(filter, 1000);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${debouncedFilter}`
    )
      .then((res) => res.json())
      .then((data) => setList(data));
  }, [debouncedFilter]);

  return {
    list,
    filter,
    setFilter,
  };
};
