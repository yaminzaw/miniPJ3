import React from "react";
import {
  CCardBody,
  CImg,
  CRow,
  CCol,
  CButton,
  CInputFile,
  CLabel,
} from "@coreui/react";
import $ from "jquery";

const RegistrationExcel = (props) => {
  let { downloadExcel, clearFile, importFile } = props;

  const excelBtnClick = () => {
    $("#importFile").click();
  };

  return (
    <CCardBody
      className='cardBody'
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
            <CButton className="buttonExcel" onClick={downloadExcel}>
              Download
            </CButton>
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
            <CButton
              htmlFor="importFile"
              className="buttonExcel"
              onClick={excelBtnClick}
            >
              Upload
            </CButton>
            <CInputFile
              id="importFile"
              hidden
              onClick={clearFile}
              onChange={importFile}
            />
          </CRow>
        </CCol>
        <CCol lg="3"></CCol>
      </CRow>
      <CRow>
        <CCol style={{textAlign:"end"}}>
          <CLabel className="label" >Go to Link</CLabel>
        </CCol>
      </CRow>
    </CCardBody>
  );
};

export default RegistrationExcel;
