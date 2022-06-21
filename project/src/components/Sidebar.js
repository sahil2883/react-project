import React from "react";
import Header from "./Header";
import {Link} from 'react-router-dom'
import {HiOutlineHome} from 'react-icons/hi';
import {BsSignpost,BsBagCheck,BsWallet2,BsTools} from 'react-icons/bs';
import {RiListUnordered} from 'react-icons/ri';
import {BiUser,BiLogOutCircle} from 'react-icons/bi';
import {MdDesignServices} from 'react-icons/md';
import {VscGraphLeft} from 'react-icons/vsc';
import { useState } from "react";
import gallery from '../img/gallery.png';

const Sidebar = () => {
    const [toggle,settoggle] = useState(false);

    const handle = () =>{
        settoggle(!toggle);
    }
    return (
        <>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className={toggle?"flex-sidebar":"flex-sidebar-1"}>
                        <div className="dashboard">
                            <div className="head mb-3 d-flex align-items-end">
                                <img src={gallery} className="img-fluid-1" /><h6 className={toggle?"margin-1":""}>{toggle?"LAUNDRY":null}</h6>
                            </div>
                            <div className="drop-down">
                                <ul>
                                    <li><Link to="#"><HiOutlineHome className="icons"/>{toggle?"Dashboard":""}</Link></li>
                                    <li><Link to="#"><BsSignpost className="icons-1"/>{toggle?"Pos":""}</Link></li>
                                    <li><Link to="#"><BsBagCheck className="icons-2" />{toggle?"Orders":""}</Link></li>
                                    <li><Link to="#"><RiListUnordered className="icons-3"/>{toggle?"Order Status Screen":""}</Link></li>
                                    <li><Link to="#"><BsWallet2 className="icons-1"/>{toggle?"Expense":""}</Link></li>
                                    <li><Link to="#"><BiUser className="icons-4"/>{toggle?"Customers":""}</Link></li>
                                    <li><Link to="#"><MdDesignServices className="icons-5"></MdDesignServices>{toggle?"Services":""}</Link></li>
                                    <li><Link to="#"><VscGraphLeft className="icons-6"/>{toggle?"Reports":""}</Link></li>
                                    <li><Link to="#"><BsTools className="icons-7"/>{toggle?"Tools":""}</Link></li>
                                    <li><Link to="#"><BiLogOutCircle className="icons-8"/>{toggle?"Logout":""}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={toggle?"flex-home":"flex-home-1"}>
                        <Header handle={handle} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;