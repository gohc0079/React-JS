import React, { useEffect } from "react";
import { RESET } from "../constants/constants";

const TabList = ({ dates, onHandleClick }) => {
  const datesArr = Object.keys(dates);
  const { setDate, dispatch } = onHandleClick;
  let clickEvt = null;

  useEffect(() => {
    clickEvt.click();
    clickEvt.focus();
  }, []);
  return (
    <div className="tab">
      {datesArr.map((date, i) => {
        return (
          <button
            ref={(e) => (i < 1 ? (clickEvt = e) : null)}
            key={date}
            className="tablinks"
            onClick={() => {
              setDate(dates[date]);
              dispatch({ type: RESET });
            }}
          >
            {date}
          </button>
        );
      })}
    </div>
  );
};
export default TabList;
