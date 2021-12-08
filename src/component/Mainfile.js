import React, { Component } from 'react'
import { Link } from "react-router-dom"
import CustomRoutev from './Router';
import '../component/procss.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import Slidfile from './Slidfile';
class Mainfile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="Main-head">
                    <div className="App-header">
                        <h2>MyFaceBook</h2>
                    </div>
                    <div className="List">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Aboutus">Aboutus</Link></li>
                            <li><Link to="/Template">Template</Link></li>
                            <li><Link to="/Contacts">Contacts</Link></li>
                            <li><Link to="/List">List</Link></li>
                            <li><Link className="acc" to="/Account">Account</Link></li>
                            {/* <button><Link className="btn" to="/Login Account"> Login Account</Link></button> */}
                        </ul>
                    </div>
                    <div className="mb-2">
                        <Button variant="primary" size="lg">
                            click button
                        </Button>{' '}
                    </div>
                </div>
                <CustomRoutev />
                <Cards  name='mynuddin' village='tangutur'/>
            </React.Fragment>
        )
    }
}
export default Mainfile;
