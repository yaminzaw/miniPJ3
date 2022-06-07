import { CCard, CCardBody, CCardHeader, CRow } from "@coreui/react";
import React, { useState } from "react";
import EmployeeReg from "./EmployeeReg";

const EmployeeIndex = () => {
  const [name, setName] = useState(""); //for name
  const [email, setEmail] = useState(""); //for email
  const [pwd,setPwd] = useState("");
  const [comfirmPwd,setComfirmPwd] = useState("");
  const [genderArr,setGenderArr] = useState([
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ]); // radio array (male,female)
  const [genderId,setGenderId] = useState("");//for choose gender(id)
  const [deptData, setDeptData] = useState([
    { id: 1, name: "IT" },
    { id: 2, name: "HR" },
    { id: 3, name: "Infra" }
]); //for dept data
const [chooseDept,setChooseDept] = useState("");//for depatrment choose
const [positionData, setPositionData] = useState([
    { id: 1, name: "Admin" },
    { id: 2, name: "Leader" },
    { id: 3, name: "Member" }
]); //for dept data
const [choosePosition,setChoosePosition] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  }; //get name from input field

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }; //get email from input field

  const handleChangePwd = (e) =>{
    setPwd(e.target.value);
  }
  const handleChangeComfirmPwd = (e) =>{
    setComfirmPwd(e.target.value);
  }

  //radio click
  const clickGender = (data) => {
    setGenderId(data.id);
  };

  //department function
  let selectDept = (e) => {
    setChooseDept(e.target.value);
  };

 //position function
 let selectPosition = (e) => {
    setChoosePosition(e.target.value);
  };

  return (
    <CCard>
      <CCardHeader>
        <h2>Employee Registration</h2>
      </CCardHeader>
      <CCardBody>
        <EmployeeReg
          name={name}
          handleChangeName={handleChangeName}
          email={email}
          handleChangeEmail={handleChangeEmail}
          pwd={pwd}
          handleChangePwd={handleChangePwd}
          comfirmPwd={comfirmPwd}
          handleChangeComfirmPwd={handleChangeComfirmPwd}
          genderArr={genderArr}
          clickGender={clickGender}
          genderId={genderId}
          deptData={deptData}
          chooseDept={chooseDept}
          selectDept={selectDept}
          positionData={positionData}
          selectPosition={selectPosition}
          choosePosition={choosePosition}
        />
      </CCardBody>
    </CCard>
  );
};

export default EmployeeIndex;
