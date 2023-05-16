import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Map from "../components/maps/map.jsx"

import axios from "axios";

const center = {
    lat: 23,
    lng: 77
};

export default function PickLocation() {
    const [lat, setLat] = useState(center.lat);
    const [lng, setLng] = useState(center.lng);

    const navigate = useNavigate();

    function userlocation(location) {
        console.log(location)
        setLat(location.lat)
        setLng(location.lng)
    }

    function handleSelectLocation() {
        navigate(`/pollutionandplants/${lat}/${lng}`)
        // const requestdata = await axios.get('https://plantify-backend.onrender.com/api/getplantsandpollutiondata', {
        //     params: {
        //         lat,
        //         lon: lng
        //     }
        // }).then((res) => {
        //     console.log(res)
        //     return res
        // }).catch((error)=>{
        //     console.error(error)
        // })
    }

    return (
        <section id="pick-location" className="pick-location">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Please pick your Location</h2>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="latlng d-flex p-2 pt-0">
                            <span><b>Latitude: </b>{lat},</span>
                            <span><b>Longitude: </b>{lng}</span>
                        </div>
                        <Map center={center} userlocation={userlocation} />

                        <div className="d-flex justify-content-center p-4">
                            <button className="btn selectlocation-btn w-75" onClick={() => {
                                handleSelectLocation()
                            }}>
                                Select location
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
