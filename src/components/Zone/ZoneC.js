import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Zone.css';
import {url_api} from "../../API/api"
import { faCarRear, faRoad, faExit, faBicycle, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ZoneC() {
    const [shells, setShells] = useState([]);
    const [shellsR, setShellsR] = useState([]);

    useEffect(() => {
        fetch(url_api+'/present_slot/findAllSlot/C')
            .then(response => response.json())
            .then((data) => {
                setShells(data)
                // console.log(data)
            })
            .catch(error => console.error(error));



    }, []);



    const residentSlot = shells.filter(slot => slot.id_slot.startsWith('R'));
    const customerSlot = shells.filter(slot => slot.id_slot.startsWith('C'));

    return (
        <div>
            <form onSubmit={'handleSubmit'}>
                <div className="zone-detail">
                    <p style={{ float: 'left' }}>


                      

                        <Link style={{ float: 'left', marginRight: '20px' }} to={'/ZoneDetail/A'}>

                            <h5>ZONE A</h5>
                        </Link>


                        <Link style={{ float: 'left', marginRight: '20px' }} to={'/ZoneDetail/B'}>

                            <h5>ZONE B</h5>
                        </Link>

                        <h5 style={{ float: 'left', marginRight: '20px' }}>ZONE C</h5>
                    </p>
                    <p>
                        <h5>DESCRIPTION</h5>
                        <span>Zone C is the most recently built, providing a large area and a modern entry and security monitoring system with the latest technology. The slots are spacious and equipped with modern facilities.</span>
                        <br />
                        
                    </p>
                    <p>
                        <h5>SPECIFICATIONS</h5>
                        <span>Maximum parking time: 1 month</span>
                    </p>

                    <p style={{ border: 'none' }}>
                        <h5>AVAILABILITY</h5>

                    </p>

                    <div class="table-responsive  align-items-center justify-content-center">
                        <div>Resident Area</div>
                        <table class="table border" style={{ boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px' }}>
                            <tbody>
                                <tr class="border">

                                    {residentSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faCarRear}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {residentSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faBicycle}></FontAwesomeIcon>
                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {residentSlot.slice(20, 30).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faMotorcycle}></FontAwesomeIcon>

                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>

                            </tbody>

                        </table>
                        <div>Customer Area</div>
                        <table class="table border" style={{ boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px' }}>
                            <tbody>
                                <tr class="border">

                                    {customerSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faCarRear}></FontAwesomeIcon>

                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {customerSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faBicycle}></FontAwesomeIcon>

                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {customerSlot.slice(20, 30).map(shell => (
                                        <td className="border" key={shell.id} style={{ backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '16px', paddingRight: '30px' }} icon={faMotorcycle}></FontAwesomeIcon>

                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <button style={{ width: '30%', height: '50px', borderRadius: '5px', color: "#fff", marginLeft: '35%', backgroundColor: '#2DC98A', border: '#2DC98A' }} type="submit">Book now</button>
                </div>


            </form>
        </div>
    );
}
export default ZoneC;