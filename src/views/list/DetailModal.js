import React from 'react';
import {CRow,CButton,CModal,CModalBody,CButtonToolbar,CModalHeader,CImg,CCol,CLink,CCard, CInput} from '@coreui/react';
const DetailModal = props => {
    const {
        show,
        closeBtn,
        data
    } = props;

    return (
        <>
        {/* {data != "" && */}
                <CModal  size="lg" centered closeOnBackdrop={false} show={show} id="advanced">
                    <CModalHeader><span><h5 style={{fontWeight: 'bold',marginLeft: '20px'}}>Student Detail Information</h5></span></CModalHeader>
                    <CModalBody>
                        <CRow id="approver-modal">
                           
                        </CRow>
                        <CButtonToolbar className="confirm-body" justify="center">
                            <CButton className="confirm-btn" onClick={closeBtn}>Close</CButton>
                        </CButtonToolbar>
                    </CModalBody>
                </CModal>
    
        {/* } */}
            
        </>
    )
}
export default DetailModal