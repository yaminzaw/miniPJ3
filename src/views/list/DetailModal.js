import React from "react";
import {
  CRow,
  CButton,
  CModal,
  CModalBody,
  CButtonToolbar,
  CModalHeader,
  CImg,
  CCol,
  CLink,
  CCard,
  CInput,
  CLabel,
} from "@coreui/react";
const DetailModal = (props) => {
  const { show, detailCloseBtn, data, detailData, imageUrl } = props;

  return (
    <>
      {/* {data != "" && */}
      <CModal
        size="lg"
        centered
        closeOnBackdrop={false}
        show={show}
        id="advanced"
      >
        <CModalHeader>
          <span>
            <h5 style={{ fontWeight: "bold", marginLeft: "20px" }}>
              Student Detail Information
            </h5>
          </span>
        </CModalHeader>
        <CModalBody>
          <CRow style={{ justifyContent: "center", marginBottom: "30px" }}>
            <CImg style={{ width: "100px", height: "100px" }} src={imageUrl} />
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3" ></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>ID</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.student_id}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3"></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>Name</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.student_name}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3"></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>Father's Name</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.father_name}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3"></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>NRC</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.nrc}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3"></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>Phone No</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.phone}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3"></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>Email</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.email}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3"></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>Gender</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.gender}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3"></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>Date of Birth</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.dob}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3"></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>Address</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.address}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3"></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>Career Path</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.career_path_id}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3"></CCol>
            <CCol lg="2" style={{ textAlign: "start" }}>
              <CLabel>Skill</CLabel>
            </CCol>
            <CCol lg="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" style={{ textAlign: "start" }}>
              <CLabel>{detailData.skills}</CLabel>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>

          <CButtonToolbar className="confirm-body" justify="center">
            <CButton className="confirm-btn" onClick={detailCloseBtn}>
              Close
            </CButton>
          </CButtonToolbar>
        </CModalBody>
      </CModal>

      {/* } */}
    </>
  );
};
export default DetailModal;
