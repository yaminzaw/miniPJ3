import React, { lazy, useEffect, useState } from "react";
import ListSearch from "./ListSearch";
import { CCardHeader, CCardBody, CCol, CCard, CRow } from "@coreui/react";
import ListTable from "./ListTable";
import UserData from "./UsersData";
import DetailModal from "./DetailModal";

const ListIndex = () => {
  const [searchBy, setSearchBy] = useState([
    { id: 0, name: "All" },
    { id: 1, name: "ID" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Career Path" },
  ]);

  const [chooseSearchOne, setChooseSearchOne] = useState("");
  const [radioData, setRadioData] = useState([
    { id: 1, name: "Excel" },
    { id: 2, name: "PDF" },
  ]);
  const [radioName, setRadioName] = useState(""); //for radio name (Excel,PDF)
  const [radioValue, setRadioValue] = useState(""); //for radio id(1,2)

  const [currentPage, setCurrentPage ] = useState("");
  const [lastPage, setLastPage ] = useState(""); 
  const [searchTextBox,setSearchTextBox] = useState("");//for search input box
  const [detailModalShow, setDetailModalShow ] = useState(false);

  let searchByChoose = (e) => {
    setChooseSearchOne(e.target.value);
  };
  console.log(chooseSearchOne);

  const clickRadio = (data) => {
    setRadioName(data.name);
    setRadioValue(data.id);
  };
  console.log("radio name", radioName);
  console.log("radioValue", radioValue);

  const setActivePage = (page) =>{
    
  }

  const searchChange = (e) =>{
    setSearchTextBox(e.target.value);
  }
  
  const downloadBtn= () =>{
    setDetailModalShow(true);

  }
  const regBtn= () =>{
    alert("click Reg")
  }
  const clickSearch= () =>{
    alert("click download")
  }

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            <h5>Student List</h5>
          </CCardHeader>
          <CCardBody>
            <ListSearch
              searchBy={searchBy}
              chooseSearchOne={chooseSearchOne}
              searchByChoose={searchByChoose}
              clickRadio={clickRadio}
              radioData={radioData}
              radioName={radioName}
              radioValue={radioValue}
              searchChange={searchChange}
              searchTextBox={searchTextBox}
              clickSearch={clickSearch}
              downloadBtn={downloadBtn}
              regBtn={regBtn}
            />
            <DetailModal show={detailModalShow} />
            <ListTable UserData={UserData} currentPage={currentPage} lastPage={currentPage} setActivePage={setActivePage} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ListIndex;
