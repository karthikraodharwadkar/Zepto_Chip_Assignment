import React from "react";
import "./FilteredData.scss";

export default function FilteredData({
  displayData,
  setSelectedData,
  setData,
  data,
}) {
  const handleSelectUserData = (element) => {
    let selectedUserData = displayData.filter((item) => item.id === element);
    setSelectedData((prevState) => [...prevState, selectedUserData[0]]);
    let upDatedData = data.filter((item) => item.id !== element);
    setData(upDatedData);
  };

  return (
    <div className="user-main-container">
      {displayData.map((item, index) => {
        return (
          
            <div
              className="user-container"
              key={index}
              onClick={() => handleSelectUserData(item.id)}
            >
              <div className="user-image">
                <img src={item.image} alt={item.firstName} />
                <div className="user-fullName">
                  {item.firstName} {item.lastName}
                </div>
              </div>
              <div className="user-email">{item.email}</div>
            </div>
         
        );
      })}
    </div>
  );
}
