import { useEffect, useState } from "react";
import { api } from "./Api";

const delay = () => {
  return new Promise((resolve) => setTimeout(() => resolve("delay"), 500));
};

const useFetch = (url, config = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await api.get(url, config);
        await delay();
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export { useFetch };