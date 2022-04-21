import React, { useState } from "react";
import "./index.css";
import { useSnackbar } from "react-simple-snackbar";

const options = {
  position: "center",
  style: {
    backgroundColor: "rgb(16, 17, 61)",
    border: "2px solid rgb(16, 17, 61)",
    color: "rgb(219, 227, 233)",
    fontSize: "15px",
    textAlign: "center",
    // width: '200px'
  },
  closeStyle: {
    color: "lightcoral",
    fontSize: "15px",
  },
};

function ListsItems({ skills, setSkills }) {
  const [newSkills, setNewSkills] = useState([]);
  const [activePOS, setActivePOS] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openSnackbar] = useSnackbar(options);

  const handleClick = (item) => {
    console.log("Item: ", item.id);
    setSelectedItem(item);
    if (activePOS === item.id) {
      setActivePOS(null);
    } else {
      setActivePOS(item.id);
    }
  };
  const onAddItem = (item) => {
    console.log("Item to be added: ", item);
    const updateSkills = [...newSkills];
    if (updateSkills.includes(selectedItem)) {
        openSnackbar('Already Exists!!',1000);
        setActivePOS(null);
        setSelectedItem(null);
      return;
    } else {
      updateSkills.push(selectedItem);
    }
    setNewSkills(updateSkills);
    setActivePOS(null);
    setSelectedItem(null);
  };

  const onDeleteItem = (id) => {
    console.log("Item to be deleted: ", id);

    let updateSkills = [...newSkills];
    updateSkills = updateSkills.filter((item) => item.id !== id);
    setNewSkills(updateSkills);
  };
  //   ()=>openSnackbar('Select Any Skill First!!!')
  
  return (
    <div className="lists-columns">
      <div className="lists-section-one">
        {skills.map((item) => (
          <div
            className={activePOS === item.id ? "list-item-click" : "list-item"}
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.skillname}
          </div>
        ))}
      </div>
      <div className="lists-section-two">
        <div
          className="arrow-right"
          onClick={
            selectedItem !== null
              ? () => onAddItem(selectedItem)
              : ()=>openSnackbar('Select Any Skill First!!!',1000)
          }
        >
          <div className="add-text">Add </div>{" "}
          <div>
            <i className="fa-solid fa-arrow-right right"></i>
          </div>
        </div>
        {/* <div className="arrow-left">
          <i className="fa-solid fa-arrow-left left"></i>
        </div> */}
      </div>
      <div className="lists-section-three">
        {newSkills.length > 0 ? (
          <>
            {newSkills.map((item) => (
              <div className="list-item-right-list" key={item.id}>
                <div>{item.skillname}</div>{" "}
                <div onClick={() => onDeleteItem(item.id)}>
                  <i className="fa fa-times cross-icon"></i>
                </div>
              </div>
            ))}
          </>
        ) : (
          "No Items Yet"
        )}
      </div>
    </div>
  );
}

export default ListsItems;
