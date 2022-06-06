import {
  CButton,
  CCardBody,
  CImg,
  CCol,
  CLabel,
  CRow,
  CPagination,
  CCard,
} from "@coreui/react";
import React from "react";

const ListTable = (props) => {
  let {
    setActivePage,
    currentPage,
    lastPage,
    editBtn,
    detailBtn,
    deleteBtn,
    mainTable,
    total,
  } = props;

  return (
    mainTable.length > 0 && (
      <>
        <CRow>
          <CCol lg="12" style={{ textAlign: "end" }}>
            <CLabel style={{ color: "rgb(142, 30, 247)", fontSize: "17px" }}>
              Total Rows {total} row(s)
            </CLabel>
          </CCol>
        </CRow>
        <CRow style={{ width: "100%", overflow: "auto" }}>
          <table
            className="mainTable"
            style={{ wordBreak: "break-all", padding: "10px" }}
          >
            <thead>
              <tr style={{ border: "1px solid" }}>
                <th style={{ width: "70px" }} className="thData">
                  No
                </th>
                <th style={{ width: "100px" }} className="thData">
                  ID
                </th>
                <th style={{ width: "150px" }} className="thData">
                  Name
                </th>
                <th style={{ width: "180px" }} className="thData">
                  Email
                </th>
                <th style={{ width: "100px" }} className="thData">
                  Career
                </th>
                <th style={{ width: "130px" }} className="thData">
                  Phone No
                </th>
                <th
                  style={{ minWidth: "400px" }}
                  className="thData"
                  colSpan="3"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {mainTable.map((data, index) => {
                return (
                  <tr key={index} style={{ border: "1px solid" }}>
                    <td className="tdData">{index + 1}</td>
                    <td className="tdData">{data.student_id}</td>
                    <td className="tdData">{data.student_name}</td>
                    <td className="tdData">{data.email}</td>
                    <td className="tdData">{data.career_name}</td>
                    <td className="tdData">{data.phone}</td>
                    <td className="tdData" width="130px">
                      <CButton className="editBtn" onClick={()=>editBtn(data)}>
                        <CImg
                          style={{ width: "25px", height: "25px" }}
                          src={"/avatars/edit.png"}
                        />
                        edit
                      </CButton>
                    </td>
                    <td className="tdData" width="130px">
                      <CButton className="detailBtn" onClick={()=>detailBtn(data)}>
                        <CImg
                          style={{ width: "25px", height: "25px" }}
                          src={"/avatars/file.png"}
                        />
                        detail
                      </CButton>
                    </td>
                    <td className="tdData" width="130px">
                      <CButton className="deleteBtn" onClick={()=>deleteBtn(data.id)}>
                        <CImg
                          style={{ width: "25px", height: "25px" }}
                          src={"/avatars/delete.png"}
                        />
                        delete
                      </CButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CRow>

        {total > 10 && (
          <CRow alignHorizontal="center" className="mt-3">
            <CPagination
              activePage={currentPage}
              pages={lastPage}
              dots={false}
              arrows={false}
              align="center"
              firstButton="First page"
              lastButton="Last page"
              onActivePageChange={(i) => setActivePage(i)}
            ></CPagination>
          </CRow>
        )}
      </>
    )
  );
};

export default ListTable;
