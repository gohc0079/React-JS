import React, { useEffect, useState, useRef } from "react";
import api, { headers } from "./api";
import { getDateFromString } from "./getDate";
const Tracker = () => {
  const [info, setInfo] = useState([]);
  const [country, setCountry] = useState("singapore");
  const inputRef = useRef(null);

  useEffect(() => {
    setInterval(
      (async () => {
        const response = await api.get(
          `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${country}`,
          headers
        );
        setInfo(response.data);
      })(),
      900000
    );
  }, [country]);

  const renderInfo = (info) => {
    const {
      country_name,
      total_cases,
      new_cases,
      active_cases,
      total_deaths,
      new_deaths,
      total_recovered,
      serious_critical,
      record_date,
    } = info.latest_stat_by_country[0];
    return (
      <div>
        <p>Country: {country_name}</p>
        <p>Total cases:{total_cases}</p>
        <p>New cases: {new_cases}</p>
        <p>Active cases:{active_cases} </p>
        <p>Deaths:{total_deaths}</p>
        <p>New Deaths:{new_deaths}</p>
        <p>Total recovered:{total_recovered}</p>
        <p>Serious:{serious_critical}</p>
        <p>Updated at: {getDateFromString(record_date)}</p>
      </div>
    );
  };
  if (info.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="six wide tablet eight wide computer column container">
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          setCountry(inputRef.current.value);
        }}
      >
        <h4 className="ui dividing header">Covid-19 Information</h4>
        <div className="two fields">
          <div className="eight wide field">
            <input ref={inputRef} type="text" placeholder="Country" />
          </div>
          <div className="field">
            <button className="ui button primary">Search</button>
          </div>
        </div>
      </form>

      {info.latest_stat_by_country.length > 0 ? (
        <div>{renderInfo(info)}</div>
      ) : (
        <div>No data available!</div>
      )}
    </div>
  );
};

export default Tracker;
