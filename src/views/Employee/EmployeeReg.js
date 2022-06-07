import {
  CRow,
  CCol,
  CLabel,
  CInput,
  CButton,
  CInputRadio,
  CSelect,
} from "@coreui/react";
import React from "react";

const EmployeeReg = (props) => {
  let {
    email,
    handleChangeEmail,
    name,
    handleChangeName,
    pwd,
    handleChangePwd,
    comfirmPwd,
    handleChangeComfirmPwd,
    genderArr,
    clickGender,
    genderId,
    chooseDept,
    selectDept,
    deptData,
    choosePosition,
    selectPosition,
    positionData,
  } = props;

  return (
    <>
      <CRow className="rowDiv">
        <CCol lg="1"></CCol>
        <CCol lg="2">
          <CLabel className="label">ID</CLabel>
        </CCol>
        <CCol lg="3">
          <CInput placeholder="" />
        </CCol>
        <CCol lg="6"></CCol>
      </CRow>
      <CRow className="rowDiv">
        <CCol lg="1"></CCol>
        <CCol lg="2">
          <CLabel className="label">Name</CLabel>
        </CCol>
        <CCol lg="3">
          <CInput
            placeholder="Please Enter Name"
            value={name}
            onChange={(e) => handleChangeName(e)}
          />
        </CCol>
        <CCol lg="6"></CCol>
      </CRow>
      <CRow className="rowDiv">
        <CCol lg="1"></CCol>
        <CCol lg="2">
          <CLabel className="label">Email</CLabel>
        </CCol>
        <CCol lg="3">
          <CInput
            placeholder="Please Enter Email"
            type="text"
            value={email}
            onChange={(e) => handleChangeEmail(e)}
          />
        </CCol>
        <CCol lg="6"></CCol>
      </CRow>
      <CRow className="rowDiv">
        <CCol lg="1"></CCol>
        <CCol lg="2">
          <CLabel className="label">Gender</CLabel>
        </CCol>
        <CCol lg="3">
          <div className="ml-3" style={{ display: "flex" }}>
            {genderArr.map((data, index) => {
              return (
                <CRow key={index}>
                  <CCol className="radioLabel">
                    <CInputRadio
                      className="Radio"
                      name={data.name}
                      value={data.id}
                      onChange={() => clickGender(data)}
                      checked={genderId == data.id ? true : false}
                    />
                    <CLabel className="RadioLabel">{data.name}</CLabel>
                  </CCol>
                </CRow>
              );
            })}
          </div>
        </CCol>
        <CCol lg="6"></CCol>
      </CRow>
      <CRow className="rowDiv">
        <CCol lg="1"></CCol>
        <CCol lg="2">
          <CLabel className="label">Password</CLabel>
        </CCol>
        <CCol lg="3">
          <CInput
            placeholder="Please Enter Password"
            type="text"
            value={pwd}
            onChange={(e) => handleChangePwd(e)}
          />
        </CCol>
        <CCol lg="6"></CCol>
      </CRow>
      <CRow className="rowDiv">
        <CCol lg="1"></CCol>
        <CCol lg="2">
          <CLabel className="label">Comfirm Password</CLabel>
        </CCol>
        <CCol lg="3">
          <CInput
            placeholder="Please Comfirm Password"
            type="text"
            value={comfirmPwd}
            onChange={(e) => handleChangeComfirmPwd(e)}
          />
        </CCol>
        <CCol lg="6"></CCol>
      </CRow>
      <CRow className="rowDiv">
        <CCol lg="1"></CCol>
        <CCol lg="2">
          <CLabel className="label">Department</CLabel>
        </CCol>
        <CCol lg="3">
          <CSelect className="select" value={chooseDept} onChange={selectDept}>
            <option value="">---Select Department---</option>
            {deptData.map((data, index) => {
              return (
                <option
                  className="option"
                  key={index}
                  id={data.id}
                  value={data.id}
                >
                  {data.name}
                </option>
              );
            })}
          </CSelect>
        </CCol>
        <CCol lg="1">
          <CLabel className="label">Position</CLabel>
        </CCol>
        <CCol lg="3">
          <CSelect
            className="select"
            value={choosePosition}
            onChange={selectPosition}
          >
            <option value="">---Select Department---</option>
            {positionData.map((data, index) => {
              return (
                <option
                  className="option"
                  key={index}
                  id={data.id}
                  value={data.id}
                >
                  {data.name}
                </option>
              );
            })}
          </CSelect>
        </CCol>
        <CCol lg="2">
          <CButton className="addBtn">Add</CButton>
        </CCol>
      </CRow>

      <CRow style={{ width: "100%", overflow: "auto",justifyContent:"center" }} >

          <table
            className="addTable"
            style={{ wordBreak: "break-all", padding: "10px" }}
          >
            <thead>
              <tr style={{ border: "1px solid" }}>
                <th style={{ width: "300px" }} className="thData">
                  Department
                </th>
                <th style={{ width: "300px" }} className="thData">
                  Position
                </th>
                <th style={{ width: "100px" }} className="thData">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="tdData"> IT Dept</td>
                    <td className="tdData">Admin</td>
                    <td className="tdData">remove</td>
                </tr>
                <tr>
                    <td className="tdData">Infra Dept</td>
                    <td className="tdData">Member</td>
                    <td className="tdData">remove</td>
                </tr>
                <tr>
                    <td className="tdData">HR Dept</td>
                    <td className="tdData">Leader</td>
                    <td className="tdData">remove</td>
                </tr>
            </tbody>
          </table>
      </CRow>
    </>
  );
};

export default EmployeeReg;
