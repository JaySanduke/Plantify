import { useState } from "react"
import Map from "../components/maps/map.jsx"

const center = {
    lat: 23,
    lng: 77
};

export default function PickLocation() {
    const [lat, setLat] = useState(center.lat);
    const [lng, setLng] = useState(center.lng);

    function userlocation(location) {
        console.log(location)
        setLat(location.lat)
        setLng(location.lng)
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
                            <span>Latitude: {lat},</span>
                            <span>Longitude: {lng}</span>
                        </div>
                        <Map center={center} userlocation={userlocation} />

                        <div className="d-flex justify-content-center mt-4 p-4">
                            <button className="btn btn-primary w-75" onClick={() => {
                                alert('location')
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
