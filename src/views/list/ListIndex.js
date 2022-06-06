import React, { lazy, useEffect, useState } from "react";
import ListSearch from "./ListSearch";
import { CCardHeader, CCardBody, CCol, CCard, CRow } from "@coreui/react";
import ListTable from "./ListTable";
import UserData from "./UsersData";
import DetailModal from "./DetailModal";
import { ApiRequest } from "../common/ApiRequest";
import SuccessError from "../common/SuccessError";
import Loading from "../common/Loading";
import CommonMessage from "../common/CommonMessage";
import $ from "jquery";
import Confirmation from "../common/ConfirmBox";
import { useHistory } from "react-router-dom";

const ListIndex = () => {
  const history = useHistory();
  const [searchBy, setSearchBy] = useState([
    { id: 0, name: "All" },
    { id: 1, name: "ID" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Career Path" },
  ]); //for choose drop down
  const [chooseSearchOne, setChooseSearchOne] = useState(""); //for drop down id
  const [radioData, setRadioData] = useState([
    { id: 1, name: "Excel" },
    { id: 2, name: "PDF" },
  ]); //for download typoe
  const [radioName, setRadioName] = useState(""); //for radio name (Excel,PDF)
  const [downloadTypeId, setDownloadTypeId] = useState(""); //for radio id(1,2)
  const [currentPage, setCurrentPage] = useState(""); //for current page(pagination)
  const [lastPage, setLastPage] = useState(""); //for last page(pagination)
  const [searchTextBox, setSearchTextBox] = useState(""); //for search input box
  const [detailModalShow, setDetailModalShow] = useState(false); //for detail modal
  const [success, setSuccess] = useState([]); //for success message
  const [error, setError] = useState([]); //for err message
  const [page, setPage] = useState([]); //for page(1,2,3... pagination)
  const [mainTable, setMainTable] = useState([]); //for show data table
  const [total, setTotal] = useState(""); //for total rows of mainTable
  const [loading, setLoading] = useState(false); // For Loading
  const [detailData,setDetailData] = useState("");//for detail data
  const [imageUrl,setImageUrl] = useState("/avatars/cat.jpg")//default image
  const [confirmShow, setConfirmShow ] = useState(false); // for confirmation message box
  const [content, setContent ] = useState(""); // for content confirmation message
  const [confirmType, setConfirmType ] = useState(""); // for confirmation type 
  const [deleteId,setDeleteId] = useState("");//for delete id

  useEffect(() => {
    (async () => {
      await search();
    })();
  }, []); //useEffect and call search function

  //search function
  let search = async (page = 1) => {
    setError([]);
    setSuccess([]);
    let search = {
      method: "get",
      url: `student-list/search?page=${page}`,
      params: {
        search_id: chooseSearchOne,
        search_value: searchTextBox,
      },
    };
    let response = await ApiRequest(search);
    console.log("Response", response);

    if (response.data.data.length > 0) {
      setMainTable(response.data.data);
      setCurrentPage(response.data.current_page);
      setLastPage(response.data.last_page);
      setTotal(response.data.total);
    } else {
      setMainTable([]);
      setSuccess([]);
      setError([response.data.data.message]);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    setLoading(false);
  };

  let tempSearch = async (page = 1) => {
    let search = {
      method: "get",
      url: `student-list/search?page=${page}`,
      params: {
        search_id: chooseSearchOne,
        search_value: searchTextBox,
      },
    };
    let response = await ApiRequest(search);
    console.log("Response", response);

    if (response.data.data.length > 0) {
      setMainTable(response.data.data);
      setCurrentPage(response.data.current_page);
      setLastPage(response.data.last_page);
      setTotal(response.data.total);
    } else {
      setMainTable([]);
      setSuccess([]);
      setError([response.data.data.message]);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    setLoading(false);
  };

  //choose one from drop down list, chooseBySearchOne => id of dropDoen (All=0,id=1,name=2,email=3,careerpath=4)
  let searchByChoose = (e) => {
    setChooseSearchOne(e.target.value);
  };

  //for input field search
  const searchChange = (e) => {
    setSearchTextBox(e.target.value);
  };

  //for choose download type
  const clickRadio = (data) => {
    setRadioName(data.name);
    setDownloadTypeId(data.id);
  };

  //for active page from pagination
  const setActivePage = (page) => {
    setError([]);
    setSuccess([]);
    setLoading(true);
    search(page);
  };

  //for download button
  const downloadBtn = async () => {
    let err = "";
    if (downloadTypeId == "") {
      err = CommonMessage.JSE001.replace("%s", "download type");
    }
    if (err) {
      setError([err]);
      $("html, body").animate({ scrollTop: 0 }, 1000);
    } else {
      setError([]);
      setLoading(true);

      let downloadFile = {
        method: "post",
        url: `student-list/download`,
        params: {
          search_id: chooseSearchOne,
          search_value: searchTextBox,
          download_type: downloadTypeId,
        },
        type: "blob",
      };
      let response = await ApiRequest(downloadFile);

      let type = "";//for download file type
      if (downloadTypeId == "2") {
        type = ".pdf";
      } else {
        type = ".xlsx";
      }

      let fileName = `StudentList${type}`;
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setSuccess(["Successfully downloaded!"]);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setLoading(false);
    }
  };

  //for registration button
  const regBtn = () => {
    history.push(`/registration`);
  };

  //for edit button
  const editBtn = (e) => {
    let data ={ 
      id: e.id
    };
    localStorage.setItem('STUDENT_DATA', JSON.stringify(data) );
    history.push(`/registration`);
  };

  //for detail button
  const detailBtn = async(data) => {
    setError([]);
    setSuccess([]);
    setLoading(true);
    let detail = {
      method: "get",
        url: `student-list/detail`,
        params: {
          id : data.id
    }
  };
  let response = await ApiRequest(detail);
  console.log("Detail",response)

  if(response.data.status == "OK"){
    setDetailData(response.data.data[0]);
    setLoading(false);
    setDetailModalShow(true);
  }else{
    setDetailData("");
    setLoading(false);
    setSuccess([]);
    setError([]);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
}

  //for modal box close button
  const detailCloseBtn = () => {
    setDetailModalShow(false);
  };

  //for delete button
  const deleteBtn = (id) => {
    setDeleteId(id);
    setConfirmShow(true);
    setConfirmType("delete");
    setContent("Are you sure you want to delete?");
  };

  //delete confirm ok
  let deleteOK = async() =>{
    setConfirmShow(false);
    setSuccess([]);
    setError([]);
    setLoading(true);

    let detailData = {
      method: "delete",
        url: `student-list/delete`,
        params: {
          student_id : deleteId
    }
  }
  let response = await ApiRequest(detailData);

  if(response.data.status == "OK"){
    let page = currentPage;
    if(mainTable.length-1 == 0){
      page = currentPage-1;
    }
    setError([]);
    setSuccess([response.data.message]);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    tempSearch(page);//call tempSearch for show data table after delete
  }else{
    setLoading(false)
    setError([response.data.message]);
    setSuccess([]);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
}

  //for search img
  const clickSearch = () => {
    setError([]);
    setSuccess([]);
    setLoading(true);
    search();
  };

  return (
    <CRow>
      <Loading loading={loading} />
      <CCol lg={12}>
        <SuccessError success={success} error={error} />
        <CCard>
          <CCardHeader>
            <h3 className="headerText">Student Registration Form</h3>
          </CCardHeader>
          <CCardBody>
            <ListSearch
              searchBy={searchBy}
              chooseSearchOne={chooseSearchOne}
              searchByChoose={searchByChoose}
              clickRadio={clickRadio}
              radioData={radioData}
              radioName={radioName}
              downloadTypeId={downloadTypeId}
              searchChange={searchChange}
              searchTextBox={searchTextBox}
              downloadBtn={downloadBtn}
              regBtn={regBtn}
              search={search}
              clickSearch={clickSearch}
            />
            <DetailModal 
            show={detailModalShow} 
            detailCloseBtn={detailCloseBtn} 
            detailData={detailData}
            imageUrl={imageUrl}
             />
            <ListTable
              UserData={UserData}
              currentPage={currentPage}
              lastPage={lastPage}
              setActivePage={setActivePage}
              editBtn={editBtn}
              detailBtn={detailBtn}
              deleteBtn={deleteBtn}
              mainTable={mainTable}
              total={total}
            />
             <Confirmation
              show={confirmShow}
              content={content}
              type={confirmType}
              cancel={() => setConfirmShow(false)}
              deleteOK={deleteOK}
              okButton={"OK"}
              cancelButton={"Cancel"}
            />  
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ListIndex;
