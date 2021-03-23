import {useState, useEffect, useCallback} from 'react';
const axios = require('axios').default;

const UseData = url => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  var config = {
    method: 'get',
    url: url,
    headers: {
      Cookie: '__cfduid=d8ae86e2328d692f96bb8abc19064799a1616445559',
    },
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setList(response.data.data);
      })
      .catch(function (err) {
        console.log(err);
        setError(true);
      });
  }, []);

  const refetch = () => {
    axios(config)
      .then(function (response) {
        setList(JSON.stringify(response.data.data));
      })
      .catch(function (err) {
        console.log(err);
        setError(true);
      });
  };
  return {
    list,
    error,
    setList,
    refetch,
  };
};

export default UseData;
