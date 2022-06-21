import React from "react";
import { HiMenuAlt1 } from 'react-icons/hi';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { BsFillTagFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { Dropdown } from "react-bootstrap";
import { HiOutlineHome } from 'react-icons/hi';
import { BsHandbag } from 'react-icons/bs';
import { FcProcess } from 'react-icons/fc';
import { AiOutlineLike, AiOutlineCheck } from 'react-icons/ai';
import cloth from '../img/cloth.png';
import cap from '../img/cap.png';
import shoes from '../img/shoes.png';
import {Chart, Tooltip,Title,ArcElement,Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {GoPrimitiveDot} from 'react-icons/go';

Chart.register(
  Tooltip,Title,ArcElement,Legend
);



const Header = (props) => {

  const change = () =>{
    props.handle();
  }
  const data = {
    datasets:[
      {
        label:'My First Dataset',
        data:[202,99,263,345],
        backgroundColor:[
          'rgb(128, 124, 120)',
          'rgb(255,205,86)',
          'rgb(111, 226, 113)',
          'rgb(54,162,235)',
        ],
        hoverOffset: 4
      }
    ]
  }
  return (
    <>
      <div >
        <div className="d-flex justify-content-between">
          <div>
            <HiMenuAlt1 className="text-white" style={{cursor:"pointer"}} onClick={change} />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <MdOutlineAddCircleOutline className="margin" />
            <BsFillTagFill className="margin" />
            <FaUserAlt className="margin" />
            <Dropdown>
              <Dropdown.Toggle className="selections" id="dropdown-basic">
                English
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>E</Dropdown.Item>
                <Dropdown.Item >Another action</Dropdown.Item>
                <Dropdown.Item >Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>


      <div className=" mt-5">
        <div className="row">
          <div className="col-lg-3 col-sm-6 mb-3">
            <div className="dashboard-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="para-custom">PENDING ORDER</p>
                  <p className="number">202</p>
                </div>
                <BsHandbag className="header-icons" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 mb-3">
            <div className="dashboard-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="para-custom">PROCESSING ORDER</p>
                  <p className="number">99</p>
                </div>
                <FcProcess className="header-icons-1" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 mb-3">
            <div className="dashboard-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="para-custom">READY TO DELIVER</p>
                  <p className="number">263</p>
                </div>
                <AiOutlineLike className="header-icons-2" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 mb-3">
            <div className="dashboard-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="para-custom">DELIVERED ORDERS</p>
                  <p className="number">345</p>
                </div>
                <AiOutlineCheck className="header-icons-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="row">
          <div className="col-md-8 mt-3">
            <div className="dashboard-1">
              <div className="row align-items-center justify-content-between">
                <div className="col-md-4 col-12">
                  <h5>Today's Delivery</h5>
                </div>
                <div className=" col-md-8 col-12">
                  <div className="row">
                    <div className="col-md-8 col-6">
                      <input type="text" placeholder="search here" className="input-style" />
                    </div>
                    <div className="col-md-4 col-6">
                      <Dropdown>
                        <Dropdown.Toggle className="custom-drop" id="dropdown-basic">
                          All Orders
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>E</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-4 mb-3">
                  <div className="box-new font">
                    <div className="d-flex justify-content-between">
                      <p>98659865</p>
                      <p>ORD-0948</p>
                    </div>
                    <div className="d-flex">
                        <img src={cloth} className="custom-img" />
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="box-new-1 font">
                    <div className="d-flex justify-content-between">
                      <p>Arif</p>
                      <p>ORD-0949</p>
                    </div>
                    <div className="d-flex">
                        <img src={cloth} className="custom-img" />
                        <img src={cloth} className="custom-img" />
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="box-new-2 font">
                    <div className="d-flex justify-content-between">
                      <p>shiyas</p>
                      <p>ORD-0950</p>
                    </div>
                     <div className="d-flex">
                        <img src={cap} className="custom-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <div className="box-new-3 font">
                    <div className="d-flex justify-content-between">
                      <p>walk in Customer</p>
                      <p>ORD-0951</p>
                    </div>
                    <div className="d-flex">
                        <img src={shoes} className="custom-img" />
                        <img src={cap} className="custom-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-4 mt-3">
            <div className="dashboard-1">
              <h5>Overview</h5>
              <Doughnut data={data}/>
              <div className="d-flex justify-content-between respon">
                <div>
                  <ul>
                    <li><GoPrimitiveDot className="chart-icons"/>Pending</li>
                    <li><GoPrimitiveDot className="chart-icons-1"/>Ready To Deliver</li>
                  </ul>
                </div>

                <div>
                  <ul>
                    <li><GoPrimitiveDot className="chart-icons-2"/>Processing</li>
                    <li><GoPrimitiveDot className="chart-icons-3"/>Deliver</li>
                  </ul>
                </div>
                
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;