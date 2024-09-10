import useFetchData from "./useFetchData";

function MyComponent() {
  const { data, isLoading, isError } = useFetchData();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return <div>{data}</div>;
}
