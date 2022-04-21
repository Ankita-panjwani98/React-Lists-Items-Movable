import React, { useState } from "react";
import ListsItems from "../../Components/ListsItems";
import "./index.css";

const initialState = [
  {
    skillname: 'React Js',
    id: 1
  },
  {
    skillname: 'Vue Js',
    id: 2
  },
  {
    skillname: 'Nodejs',
    id: 3
  },
  {
    skillname: 'MongoDB',
    id: 4
  },
  {
    skillname: 'Bootstrap 4',
    id: 5
  },
  {
    skillname: 'HTML/CSS',
    id: 6
  }
]

function TransferItemsList() {
  const [skills, setSkills] = useState(initialState);
  return (
    <div>
      <div className="triangle-top"></div>
      <div className="lists-container">
        <p>TRANSFER SKILLS BETWEEN TWO LISTS</p>

        <ListsItems skills={skills} setSkills={setSkills}/>
      </div>
      <div className="triangle-bottom"></div>
    </div>
  );
}

export default TransferItemsList;
