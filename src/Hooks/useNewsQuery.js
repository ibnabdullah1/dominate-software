import { useState, useEffect } from "react";

const useNewsQuery = (category = "") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = "http://localhost:8000/v2/top-headlines";
      if (category) {
        url += `?category=${category.toLowerCase()}`;
      }
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
    return () => setData([]);
  }, [category]);

  return data;
};

export default useNewsQuery;
