import {
  CRow,
  CCol,
  CLabel,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCardBody,
  CInput,
  CFormText,
  CFormGroup,
  CContainer,
  CForm,
  CImg,
  CInputRadio,
  CTextarea,
  CSelect,
  CInputCheckbox,
  CButton,
} from "@coreui/react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React, { useState, useEffect } from "react";
import "./regstyle.css";
import {
  validateName,
  nullChk,
  emailChk,
  numberChk,
} from "../common/CommonValidation";
import { ApiRequest } from "../common/ApiRequest";
import { alpha } from "@material-ui/core/styles";
import Moment from "moment";
import Confirmation from "../common/ConfirmBox"; // Appear Comfirmation box
import Loading from "../common/Loading"; // if function start load image
import RegistrationExcel from "./RegistrationExcel";


const RegistrationIndex = () => {

const [selectedDate, setSelectedDate] = useState(new Date()); //Date picker
const [err, setErr] = useState([]); //for error
const [name, setName] = useState(""); //for user name
const [fatherName, setFatherName] = useState(""); //for father name
const [nrc, setNrc] = useState(""); //for nrc
const [ph, setPh] = useState(""); //for ph no
const [email, setEmail] = useState(""); //for email
const [address, setAddress] = useState(""); //for address
const [imagePreviewUrl, setImagePreviewUrl] = useState("/avatars/profile.jpg"); //for initial image
const [image, setImage] = useState(""); //for image
const [careerData, setCareerData] = useState([]); //for career data (call from API)
const [skillData, setSkillData] = useState([]); //for skill data (call from API)
const [chooseCareer, setChooseCareer] = useState(""); //for career choose
const [success, setSuccess] = useState([]); //for success message
const [id, setId] = useState(""); //for id
const [radioName, setRadioName] = useState(""); //for radio name (male,female)
const [radioValue, setRadioValue] = useState(""); //for radio id(1,2)
const [chkSkillFinal, setChkSkillFinal] = useState([]); //for check skill (final array)
const [chkskill, setChkskill] = useState([]); //for check skill (loop and tempory array)
const [radioData, setRadioData] = useState([
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
]); // radio array (male,female)
const [invalidMsg,setInvalidMsg] = useState(false);


  useEffect(() => {
    systemFormLoad();

  }, []);

  const [loading, setLoading] = useState(false); // For Loading
  const [show, setShow] = useState(false); // for confirmation message box
  const [content, setContent] = useState(""); // for content confirmation message
  const [type, setType] = useState(""); // for confirmation type

  /*
   * Save data with API(Comfirm Box)
   */
  const saveData = async () => {
    setLoading(true);
    let saveArr = {
      student_id: id,
      student_name: name,
      father_name: fatherName,
      nrc: nrc,
      phone: ph,
      email: email,
      gender: radioValue,
      dob: Moment(selectedDate).format("YYYY-MM-DD"),
      address: address,
      photo: image,
      career_path: chooseCareer,
      skills: chkskill.toString(),
    };

    // console.log("DOB", saveArr.dob);

    let obj = {
      method: "post",
      url: "student-registeration/save",
      params: saveArr,
    };
    let response = await ApiRequest(obj);
    if (response.data.status == "NG") {
      setErr([response.data.data.message]);
      setSuccess([]);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      setErr([]);
      // setSuccess([response.data.message]);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      setImagePreviewUrl("/avatars/profile.jpg");
      setName("");
      setFatherName("");
      setNrc("");
      setPh("");
      setEmail("");
      setAddress("");
      setErr([]);
      setRadioValue("");
      setChooseCareer("");
      setSelectedDate(new Date());

      skillData.map((d, i) => {
        d.is_checked = false;
      });
    }
    setLoading(false);
    setShow(false);
  };
  const saveBtnClick = () => {
    setShow(true);
  };

  // useEffect(() => {
  //   systemFormLoad();
  // }, []); //useeffect and call systemFormLoad to get API

  //get data from API (student_id,career_path,skill)
  const systemFormLoad = async () => {
    let obj = { method: "get", url: "student-registeration/formload" };
    let response = await ApiRequest(obj);
    // console.log("response data", response);

    if (response.data.status == "NG") {
      setErr([response.data.data.message]);
      setSuccess([]);
    } else {
      setErr([]);
      setSuccess([]);
    }
    setId(response.data.student_id);
    setCareerData(response.data.career_path);
    setSkillData(response.data.skill);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  }; //get name from input field

  const handleChangeFatherName = (e) => {
    setFatherName(e.target.value);
  }; //get father name from input field
  const handleChangeNrc = (e) => {
    setNrc(e.target.value);
  }; //get NRC from input field
  const handleChangePh = (e) => {
    setPh(e.target.value);
  }; //get ph from input field
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }; //get email from input field
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  }; //get address from input field

  //for image upload
  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    setImage(file.name);
    reader.readAsDataURL(file);
  }; 

  //career function
  let selectCareer = (e) => {
    setChooseCareer(e.target.value);
  }; 

  //check box (skill) function
  const clickRadio = (data) => {
    setRadioName(data.name);
    setRadioValue(data.id);
  };

  let resArr = [];
  //check box (skill) function
  const checkSome = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;

    // console.log("value", value);
    // console.log("check" + checked);

    let data = skillData.map((obj) => {
      return parseInt(value) === parseInt(obj.id)
        ? { ...obj, is_checked: checked }
        : obj;
    });
    // console.log(data);
    setSkillData(data);

    for (let i = 0; i < data.length; i++) {
      if (data[i].is_checked == true) {
        resArr.push(data[i]);
        setChkskill([...chkskill, data[i].id]);
      }
    }
    setChkSkillFinal(resArr);
    // console.log("ResArr", chkSkillFinal);
  };

  //for save button 
  const save = async () => {
    let errArray = [];

    if (!nullChk(name)) {
      errArray.push("Please Enter Name");
    } else if (!validateName(name)) {
      errArray.push("Invalid name");
    }//validate name

    if (!nullChk(fatherName)) {
      errArray.push("Please Enter Father Name");
    } else if (!validateName(fatherName)) {
      errArray.push("Invalid Father Name");
    }

    if (!nullChk(nrc)) {
      errArray.push("Please Enter NRC");
    }

    if (!nullChk(ph)) {
      errArray.push("Please Enter Phno");
    } else if (!numberChk(ph)) {
      errArray.push("Invalid Ph no");
    }

    if (!nullChk(email)) {
      errArray.push("Please Enter Email");
    } else if (!emailChk(email)) {
      errArray.push("Invalid Email");
    }

    if (!nullChk(address)) {
      errArray.push("Please Enter Address");
    }

    if (!nullChk(chkSkillFinal)) {
      errArray.push("Please Check Skill");
    }

    if (!nullChk(radioValue)) {
      errArray.push("Please Select Gender");
    }

    if (!nullChk(chooseCareer)) {
      errArray.push("Please Choose Career");
    }

    if (!nullChk(image)) {
      errArray.push("Please upload profile");
    }

    setErr(errArray);

    if (errArray == [] || errArray == "") {
      setShow(true);
      setContent("Are you sure you want to save data");
      setType("save-data");
    } else {
      setErr(errArray);
      setSuccess([]);
      setInvalidMsg(true);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  //for reset button
  const resetAll = () => {
    setImagePreviewUrl("/avatars/profile.jpg");
    setName("");
    setFatherName("");
    setNrc("");
    setPh("");
    setEmail("");
    setAddress("");
    setErr([]);
    setRadioValue("");
    setChooseCareer("");
    setSelectedDate(new Date());
    setSuccess([]);

    skillData.map((d, i) => {
      d.is_checked = false;
    });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  //for download excel
  const downloadExcel = async () => {
    let obj = {
      method: "get",
      url: "student-registeration/download",
      type: "blob",
    };
    let response = await ApiRequest(obj);

    if (response.data.status == "NG") {
      setErr([response.data.data.message]);
      setSuccess([]);
    } else { // success condition
      setErr([]);
      // setSuccess([response.data.message]);
      let fileName = "StudentRegisteration.xlsx";
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setSuccess(["Successfully Downloaded!"]);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const clearFile = (i) =>{
    i.target.value = null;
  }

  const importFile = async(i) =>{
    let file = i.target.files[0];

    let formData = new FormData();

    formData.append("import_file",file);
    let obj = {
      method: "post",
      url: "/student-registeration/excel-import",
      params: formData
    };
    let response = await ApiRequest(obj);

    if(response.flag === false) {
      setErr(response.message);
      setSuccess([]);
    } else {
      setErr([]);
      setSuccess([response.data.message]);
    }
  }

  return (
    <CCardBody
      style={{
        backgroundColor: "rgb(229, 215, 241)",
        borderRadius: "30px",
        marginBottom: "30px",
      }}
    >
      <Loading start={loading} />
      <Confirmation
        show={show}
        content={content}
        type={type}
        cancel={() => setShow(false)}
        saveData={saveData}
        okButton={"OK"}
        cancelButton={"Cancel"}
      />
         
          {err.length > 0 &&
            <div className="errMsgBox" >
              {err.map((e, index) => {
                return (
                    <p style={{ color: "white",marginLeft:"50px",borderRadius:"30px" }} key={index}>
                      {e}
                    </p>
                );
              })}
          </div>
          } 
          {success.length > 0 &&
            <div className="successMsgBox" >
            {success.map((s, indexii) => {
              return (
                  <p style={{ color: "white",marginLeft:"50px",borderRadius:"30px" }} key={indexii}>
                    {s}
                  </p>
              )
            })}
            </div>
            }
        
      <CTabs activeTab="system" className="tab">
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink data-tab="system" className="tabName">
              Student Registration From System
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="excel" className="tabName">
              Student Registration From Excel
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane data-tab="system">
            <CCardBody>
              <CRow>
                <CCol lg="4"></CCol>
                <CCol lg="4" xs="12" sm="12" md="12">
                  <CRow className="headerRow">
                    <h2 className="headerText">Student Registration Form</h2>
                  </CRow>
                  <CRow className="imgRow">
                    <CLabel
                      htmlFor="photo-upload"
                      className="custom-file-upload"
                    >
                      <div className="img-wrap img-upload">
                        <CImg
                          htmlFor="photo-upload"
                          id="photo-upload-id"
                          className="c-avatar-img image"
                          src={imagePreviewUrl}
                          value={image}
                        />
                      </div>
                      <input
                        id="photo-upload"
                        htmlFor="photo-upload-id"
                        hidden
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleImageChange}
                      />
                    </CLabel>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="4" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">ID</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <CInput
                        type="number"
                        className="inputField"
                        value={id}
                        readOnly
                      />
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="4" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">Name</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <CInput
                        type="text"
                        value={name}
                        onChange={(e) => handleChangeName(e)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="8" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">Father's Name</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <CInput
                        type="text"
                        className="inputField"
                        value={fatherName}
                        onChange={(e) => handleChangeFatherName(e)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="4" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">NRC</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <CInput
                        type="text"
                        className="inputField"
                        value={nrc}
                        onChange={(e) => handleChangeNrc(e)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="8" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">Phone No</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <CInput
                        type="number"
                        className="inputField"
                        value={ph}
                        onChange={(e) => handleChangePh(e)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="4" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">Email</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <CInput
                        type="text"
                        className="inputField"
                        value={email}
                        onChange={(e) => handleChangeEmail(e)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="4" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">Gender</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <div className="ml-3" style={{ display: "flex" }}>
                        {radioData.map((data, index) => {
                          return (
                            <CRow key={index}>
                              <CCol lg="6" className="radioLabel">
                                <CInputRadio
                                  className="Radio"
                                  name={data.name}
                                  value={data.id}
                                  onChange={() => clickRadio(data)}
                                  checked={radioValue == data.id ? true : false}
                                />
                                <CLabel className="RadioLabel">
                                  {data.name}
                                </CLabel>
                              </CCol>
                            </CRow>
                          );
                        })}
                      </div>
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="8" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">Date of Birth</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          style={{ width: "100%" }}
                          placeholder="2018/10/10"
                          value={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          format="yyyy/MM/dd"
                        />
                      </MuiPickersUtilsProvider>
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="5" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">Address</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <CTextarea
                        className="inputField"
                        value={address}
                        onChange={(e) => handleChangeAddress(e)}
                      ></CTextarea>
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="5" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">Career</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <CSelect
                        className="select"
                        value={chooseCareer}
                        onChange={selectCareer}
                      >
                        <option value="">---Select Career---</option>
                        {careerData.map((data, index) => {
                          return (
                            <option
                              className="option"
                              key={index}
                              id={data.id}
                              value={data.id}
                            >
                              {data.career_name}
                            </option>
                          );
                        })}
                      </CSelect>
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol lg="4" xs="4" sm="4" md="4" className="ColDiv">
                      <CLabel className="label">Skill</CLabel>
                    </CCol>
                    <CCol lg="8" xs="12" sm="8" md="8">
                      <CRow className="ml-2">
                        {skillData.map((chk, cindex) => {
                          return (
                            <CCol lg="6" key={cindex}>
                              <CInputCheckbox
                                className="chk"
                                name={chk.name}
                                value={chk.id}
                                onChange={checkSome}
                                checked={chk.is_checked == true}
                              />
                              <CLabel
                                className="label"
                                style={{ wordBreak: "break-all" }}
                              >
                                {chk.skill_name}
                              </CLabel>
                            </CCol>
                          );
                        })}
                      </CRow>
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol
                      lg="6"
                      xs="6"
                      sm="6"
                      md="6"
                      style={{ textAlign: "end" }}
                    >
                      <CButton className="button" onClick={save}>
                        Save
                      </CButton>
                    </CCol>
                    <CCol lg="6" xs="6" sm="6" md="6">
                      <CButton className="button" onClick={resetAll}>
                        Reset
                      </CButton>
                    </CCol>
                  </CRow>
                  <CRow className="rowDiv">
                    <CCol>
                      <CLabel className="label">Go to Link</CLabel>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol lg="4"></CCol>
              </CRow>
            </CCardBody>
          </CTabPane>
          <CTabPane data-tab="excel">
            <RegistrationExcel 
              downloadExcel={downloadExcel}
              importFile={importFile}
              clearFile={clearFile}
             />
          </CTabPane>
        </CTabContent>
      </CTabs>
    </CCardBody>
  );
};

export default RegistrationIndex;
