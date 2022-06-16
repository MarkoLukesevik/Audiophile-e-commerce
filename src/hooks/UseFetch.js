import React, { useState } from "react";
import axios from "axios";

function UseFetch(url) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return { data, fetchData };
}

export default UseFetch;
