import React, { useState, useEffect } from "react";

const PlannerMap = () => {
  const [mapUserItem, setMapUserItem] = useState([]);

  useEffect(() => {
    fetch("/data/plannerData.json")
      .then(res => res.json())
      .then(data => setMapUserItem(data));
  }, [mapUserItem]);

  return (
    <div>
      {mapUserItem.map(plannerItem => (
        <div key={plannerItem.id}>
          <div>
            <img src={plannerItem.imgUrl} alt="userMapPlan" />
          </div>
          <div> {plannerItem.user} </div>
          <div> {plannerItem.date} </div>
        </div>
      ))}
    </div>
  );
};

export default PlannerMap;
