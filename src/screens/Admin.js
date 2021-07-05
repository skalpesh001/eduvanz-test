import React, { useState } from 'react';
import Header from '../components/Header';
import { Row, Col, Container, Modal, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";

function Admin() {
  let history = useHistory();
  const data = useSelector(state => state.data);
  
  
  const [allData,setAllData] = useState(data);
  const [detailedInfo,setDetailedInfo] = useState("");
  const [filteredData,setFilteredData] = useState(data);
  console.log("filteredData", filteredData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setDetailedInfo(data);
    setShow(true);
  }
  if(data.length === 0){
    history.push('/home');
  }




    const handleSearch = (event) => {
      let value = event.target.value.toLowerCase();
      let result = [];
      console.log(value);
      result = allData.filter((data) => {
        
        console.log("test",data.userLocality);

        console.log("search",data.userLocality.toLowerCase().includes(value));
        if ( data.userName.toLowerCase().includes(value) || data.userLocality.toLowerCase().includes(value)) {
          return true;
        }
      });
      setFilteredData(result);
      }
    
      
        
  
    return (
      
      <div className="mt-5">
        <Container>
            <Row>
                <Col>
                <Header></Header>
                <div className="contentWrap">
                  <div>
                    <input placeholder="Search Participants" className="form-control" type="text" onChange={(event) =>handleSearch(event)} />
                  </div>
                    <h2 className="text-center mt-4">List of Participants</h2>
                    <div>
                    <div className="d-flex">
                      <div className="tableBox tableTitle">Username</div>
                      <div className="tableBox tableTitle">Locality</div>
                    </div>
                    { filteredData == null ?
                    <div>test</div>
                    :
                      filteredData.map((value,index) => {
                        return(
                          <div>
                          {/* currently using username as key because we dont have unique id */}
                            <div key={value.userName}>
                            <div className="d-flex" onClick={() => handleShow(value)}>
                              <div className="tableBox">{value.userName}</div>
                              <div className="tableBox">{value.userLocality}</div>
                            </div>
                            </div>
                          </div>
                          
                        )
                      })
                      }
                    </div>
                </div>
                {/* modal popup to show detailed information. not created re-usable component but due to
                time constraint */}
                {detailedInfo && <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Participants Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Username</td>
                        <td>{detailedInfo.userName}</td>  
                      </tr>
                      <tr>
                        <td>Age</td>
                        <td>{detailedInfo.userAge}</td>
                      </tr>
                      <tr>
                        <td>Date of birth</td>
                        <td>{detailedInfo.userDob}</td>
                      </tr>
                      <tr>
                        <td>Guest count</td>
                        <td>{detailedInfo.userGuest}</td>
                      </tr>  
                      <tr>
                        <td>Locality</td>
                        <td>{detailedInfo.userLocality}</td>
                      </tr>
                      <tr>
                        <td>Profession</td>
                        <td>{detailedInfo.userProfession}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>{detailedInfo.userAddress}</td>
                      </tr>
                    </tbody>
                  </Table>
                   
                  </Modal.Body>
        
                </Modal>}
                </Col>
            </Row>
        </Container>
        
      </div>
    );
}
  
export default Admin;