import { useState, useEffect } from "react";
import axios from "axios";
const useResources = (resource) => {
  const [resources, setResources] = useState([]);
  // const fetchResource = async () => {
  //   const response = await axios.get(
  //     `http://jsonplaceholder.typicode.com/${resource}`
  //   );
  //   setResources(response.data);
  // };
  /*useeffect will be called like componentdidMount or componentdidUpdate
    for the second argument, when the values are different, e,g : 'post' -> 'todos' the function will be called like componentdidupdate
    useEffect(() => {
      fetchResource(resource);
    }, [resource]);
    wrapping a function with brackets, and defining another () invokes the function immediately*/
  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
