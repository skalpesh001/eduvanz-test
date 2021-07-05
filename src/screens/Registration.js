import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Row, Col, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setCountData} from '../redux/Actions';

function Registration() {

  const { register, handleSubmit, reset , formState: { errors } } = useForm(); //used react form hooks to handle forms
  const [allData,setAllData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    //fetching data from mock json
    axios('./jsonData/registration_data.json')
    .then(response => {
    setAllData(response.data);
    dispatch(setCountData(response.data));
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, [dispatch]);

  

const onSubmit = data => {
  //on registration form storing data in existing array.
  data.userAge = parseInt(data.userAge);
  data.userGuest = parseInt(data.userGuest);
  allData.unshift(data);
  dispatch(setCountData(allData));
  alert("Registration complteted successfully..!!");
  reset ();
}


    return (
      <div className="mt-5">
        <Container>
            <Row>
                <Col>
                <Header></Header>
                <div className="contentWrap">
                <div className="loginWrapper">
                  <div className="logoWrap text-center">  
                    <h2>Meet Up Registration</h2>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <Row>
                        <Col sm={12} md={6}>
                          <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control" {...register("userName", { required: true })}/>
                            {errors.userName && <span className="errorMsg">This field is required</span>}
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className="form-group">
                            <label>Age</label>
                            <input type="number" className="form-control" {...register("userAge", { required: true })}/>
                            {errors.userAge && <span className="errorMsg">This field is required</span>}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12} md={6}>
                          <div className="form-group">
                            <label>D.O.B</label>
                            <input type="date" className="form-control" {...register("userDob", { required: true })}/>
                            {errors.userDOB && <span className="errorMsg">This field is required</span>}
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className="form-group">
                            <label>Profession</label>
                            
                            <select className="form-control" {...register("userProfession", { required: true })}>
                              <option value=""> -- select an option -- </option>
                              <option value="Employed">Employed</option>
                              <option value="Student">Student</option>
                              
                            </select>
                            {errors.userProfession && <span className="errorMsg">This field is required</span>}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12} md={6}>
                        <div className="form-group">
                          <label>Locality</label>
                          <select className="form-control" {...register("userLocality", { required: true })}>
                           <option value=""> -- select an option -- </option>
                            <option value="East Zone">East Zone</option>
                            <option value="West Zone">West Zone</option>
                            <option value="South Zone">South Zone</option>
                            <option value="North Zone">North Zone</option>
                            
                          </select>
                          {errors.userLocality && <span className="errorMsg">This field is required</span>}
                        </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className="form-group">
                            <label>Number of guest</label>
                            <select className="form-control" {...register("userGuest", { required: true })}>
                              <option value=""> -- select an option -- </option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              
                            </select>
                            {errors.userGuest && <span className="errorMsg">This field is required</span>}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12}>
                          <div className="form-group">
                            <label>Address</label>
                            <textarea  className="form-control" {...register("userAddress", { required: true })}/>
                            {errors.userAddress && <span className="errorMsg">This field is required</span>}
                          </div>
                        </Col>
                      </Row>
                      <button type="submit" className="btn btn-primary-style btn-block">Login</button>
                  </form>      
                </div>
                </div>
                </Col>
            </Row>
        </Container>
        
      </div>
    );
}
  
export default Registration;