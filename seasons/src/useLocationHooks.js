import { useState, useEffect } from "react";

const useLocationHooks = () => {
  const [lat, setLat] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMsg(err.message)
    );
  }, []);

  return [lat,errorMsg]
};

export default useLocationHooks;
