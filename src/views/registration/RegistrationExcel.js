import React from "react";
import { CCardBody, CImg, CRow, CCol, CButton } from "@coreui/react";

const RegistrationExcel = (props) => {
    let {downloadExcel} = props;

  return (
    <CCardBody
      style={{
        backgroundColor: "rgb(229, 215, 241)",
        borderRadius: "30px",
        marginBottom: "30px",
      }}
    >
      <CRow className="headerExcelRow">
        <h2 className="header">Student Registration Form</h2>
      </CRow>
      <CRow>
        <CCol lg="3"></CCol>
        <CCol lg="2">
          <CRow>
            <CImg
              src={"/avatars/download.png"}
              alt="download"
              className="imgExcel"
            />
          </CRow>
          <CRow>
            <CButton className="buttonExcel" onClick={downloadExcel}>Download</CButton>
          </CRow>
        </CCol>
        <CCol lg="2"></CCol>
        <CCol lg="2">
          <CRow>
            <CImg
              src={"/avatars/upload.png"}
              alt="upload"
              className="imgExcel"
            />
          </CRow>
          <CRow>
            <CButton className="buttonExcel">Upload</CButton>
          </CRow>
        </CCol>
        <CCol lg="3"></CCol>
      </CRow>
    </CCardBody>
  );
};

export default RegistrationExcel;
