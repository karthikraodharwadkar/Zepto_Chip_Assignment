import React, {useEffect, useState } from "react";
import FilteredData from "../FilteredData/FilteredData";
import "./ChipElement.scss";

export default function Chip_Component({ usersData }) {
  const [inputValue, setInputValue] = useState("");

  const [toggle, setToggle] = useState(false);

  const [selectedData, setSelectedData] = useState([]);

  const [data, setData] = useState([]);

  const InputfilteredData = (apiData, inputValue) => {
    let updatedData = [...apiData];

    if (inputValue?.length > 0) {
      updatedData = updatedData.filter(
        (item) =>
          item.email.toLowerCase().includes(inputValue.toLocaleLowerCase()) ||
          item.firstName
            .toLowerCase()
            .includes(inputValue.toLocaleLowerCase()) ||
          item.lastName
            .toLowerCase()
            .includes(inputValue.toLocaleLowerCase()) ||
          item.firstName
            .concat(item.lastName)
            .toLowerCase()
            .includes(inputValue.toLocaleLowerCase())
      );
    }

    return updatedData;
  };

  const displayData = InputfilteredData(data, inputValue);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleDeleteChip = (id) => {
    let updatedSelectData = selectedData.filter((item) => item.id !== id);
    setSelectedData(updatedSelectData);
    let datatoAdd = usersData.filter((item) => item.id === id);
    data.unshift(datatoAdd[0]);
  };

  useEffect(() => {
    setData(usersData);
  }, [usersData]);

  return (
    <>
      <div className="chip-input-field">
        <ul>
          {selectedData.map((item, index) => {
            return (
              <li key={index}>
                <span>
                  <img
                    src={item.image}
                    alt={item.firstName}
                    style={{ width: "15px", height: "15px" }}
                  />
                </span>
                {item.firstName} {item.lastName}{" "}
                <span
                  className="delete-icon"
                  onClick={() => handleDeleteChip(item.id)}
                >
                  X
                </span>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Search user"
          onClick={handleClick}
          readOnly={!toggle ? true : false}
        />
      </div>
      <div className="chip-user-details">
        {toggle ? (
          <>
            { displayData?.length===0 ? <><h3 style={{textAlign:"center"}}>No Users Found</h3></> : 
            <FilteredData
              displayData={displayData}
              setSelectedData={setSelectedData}
              setData={setData}
              data={data}
            />
            }
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
        }
