import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import VerticalBar from '../components/chart/VerticalBar';
import { useSelector } from 'react-redux';
import VerticalBar2 from '../components/chart/VerticalBar2';

function EventReports() {

  let history = useHistory();
  const [totalStudentCount,setTotalStudentCount] = useState([0]);
  const [totalProfessionalsCount,setTotalProfessionalsCount] = useState([0]);
  const [totalCount,setTotalCount] = useState([0]);
  const data = useSelector(state => state.data);
  
  
  //history api used to handle fallback on pageload
  if(data.length === 0){
    history.push('/home');
  }

  //calculating all number of students and professionals
  const countTotalpeople = () => {
    let students = 0;
    let Professionals = 0;
    data.map( user => {
      if(user.userProfession === "Student"){
        students += user.userGuest + 1;
      } else {
        Professionals += user.userGuest + 1;;
      }
      return false;

    })
    setTotalStudentCount(students);
    setTotalProfessionalsCount(Professionals);
    setTotalCount(students + Professionals)
  }
 
  useEffect(() => {
    countTotalpeople();
    }, []);


    return (
      <div className="mt-5">
        <Container>
            <Row>
                <Col>
                <Header></Header>
                <div className="mb-4">
                <h1 className="text-center m-4">Event Reports</h1>
                <div>

                    <Row>
                      <Col sm={12} md={4}>
                        <Card className="cardWrapper card-stats wePoolCard mb-4 mb-lg-0">
                            <Card.Body>
                            <Row>
                              <Col>
                                <div className="text-center">
                                <span className="h1 font-weight-bold mb-0 wpCardValue">{totalCount}</span>
                                <Card.Title className=" mb-0 wpCardName">
                                    Total count of the event
                                </Card.Title>
                                </div>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                      </Col>
                      <Col sm={12} md={4}> 
                        <Card className="cardWrapper card-stats wePoolCard mb-4 mb-lg-0">
                            <Card.Body>
                            <Row>
                              <Col>
                                <div className="text-center">
                                <span className="h1 font-weight-bold mb-0 wpCardValue">{totalProfessionalsCount}</span>
                                <Card.Title className=" mb-0 wpCardName">
                                Professional attending the event
                                </Card.Title>
                                </div>
                              </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={12} md={4}>
                        <Card className="cardWrapper card-stats wePoolCard mb-4 mb-lg-0">
                            <Card.Body>
                            <Row>
                              <Col>
                                <div className="text-center">
                                <span className="h1 font-weight-bold mb-0 wpCardValue">{totalStudentCount}</span>
                                <Card.Title className=" mb-0 wpCardName">
                                Students  attending the event
                                </Card.Title>
                                </div>
                              </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                        </Col>  
                      </Row>
                      <p className="m-2">Note : all counts are included with guest people too.</p>
                    </div>
                    </div>
                    <div className="mt-5">
                        <Row>
                          {/* used react-charts.js to create reports*/}   
                          <Col className="mt-5"><VerticalBar data={data}/></Col>
                          <Col className="mt-5"><VerticalBar2 data={data}/></Col>
                        </Row>
                    </div>

                </Col>
            </Row>
        </Container>
        
      </div>
    );
}
  
export default EventReports;