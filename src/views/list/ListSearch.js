import {
  CRow,
  CCol,
  CSelect,
  CInput,
  CImg,
  CLabel,
  CInputRadio,
  CButton,
} from "@coreui/react";
import React, { useState } from "react";

const ListSearch = (props) => {
  let {
    chooseSearchOne,
    searchByChoose,
    searchBy,
    clickRadio,
    radioData,
    downloadTypeId,
    searchChange,
    searchTextBox,
    clickSearch,
    downloadBtn,
    regBtn,
  } = props;

  return (
    <CRow>
      <CCol lg="6">
        <CRow>
          <CCol lg="3" style={{ marginRight: "-30px" }}>
            <CSelect value={chooseSearchOne} onChange={searchByChoose}>
              {searchBy.map((data, index) => {
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
          <CCol lg="6">
            <CInput
              placeholder="Enter Keyword"
              value={searchTextBox}
              onChange={searchChange}
            />
          </CCol>
          <CCol lg="3">
            <CImg
              className="img"
              src={"/avatars/search.jpg"}
              onClick={clickSearch}
            />
          </CCol>
          <CCol></CCol>
        </CRow>
      </CCol>
      <CCol lg="6">
        <CRow>
          <CCol lg="4" style={{ display: "flex" }}>
            {radioData.map((data, index) => {
              return (
                <CRow key={index} style={{ marginLeft: "8px" }}>
                  <CCol>
                    <CInputRadio
                      style={{ marginTop: "10px" }}
                      name={data.name}
                      value={data.id}
                      checked={
                        parseInt(downloadTypeId) === parseInt(data.id)
                          ? true
                          : false
                      }
                      onChange={() => clickRadio(data)}
                    />
                    <CLabel
                      style={{
                        marginTop: "5px",
                        paddingRight: "40px",
                        fontSize: "17px",
                      }}
                    >
                      {data.name}
                    </CLabel>
                  </CCol>
                </CRow>
              );
            })}
          </CCol>
          <CCol lg="4">
            <CButton className="buttonList" onClick={downloadBtn}>
              <CImg
                style={{ width: "25px", height: "25px" }}
                src={"/avatars/download.png"}
              />
              Download
            </CButton>
          </CCol>
          <CCol lg="4">
            <CButton className="buttonList" onClick={regBtn}>
              <CImg
                style={{ width: "25px", height: "25px" }}
                src={"/avatars/add-user.png"}
              />
              New Register
            </CButton>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  );
};

export default ListSearch;
