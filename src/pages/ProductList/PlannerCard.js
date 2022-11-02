import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PlannerCard = () => {
  const [isUserData, setIsUserData] = useState([]);

  useEffect(() => {
    fetch("http://10.58.52.75:3000/plan/userplan/1", {
      method: "GET",
      // headers: { Authorization: localStorage.getItem("accesToken") },
    })
      .then(res => res.json())
      .then(data => setIsUserData(data));
  }, []);

  return (
    <div>
      {isUserData &&
        isUserData.plan?.map(userData => {
          return (
            <div key={userData.planId}>
              <Link to={`/planner-detail-page/${userData.planId}`}>
                <img src="https://images.pexels.com/photos/3754686/pexels-photo-3754686.jpeg?auto=compress&cs=tinysrgb&w=800" />
                <div>{userData.nickname}</div>
                <div>
                  {userData.start_date.replace(/\T.*/, " ")} ~{" "}
                  {userData.end_date.replace(/\T.*/, " ")}
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default PlannerCard;
