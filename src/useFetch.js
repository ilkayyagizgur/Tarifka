import {useEffect, useState} from 'react';
import axios from 'axios';
function useFetch(parameter) {
  const [data, setData] = useState();
  async function fetchData() {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/' + parameter,
    );
    setData(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return {data};
}

export default useFetch;
