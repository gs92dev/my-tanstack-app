import { useQuery } from "@tanstack/react-query";

function useFetchData() {
  return useQuery(["data"], () => fetchData());
}

export default useFetchData;
