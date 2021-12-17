import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = props => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(props);
        // if(response.request.readyState === 4 && response.status === 200) {
          setData(response);
        // }
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;