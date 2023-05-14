import { Bs0Circle } from 'react-icons/bs'
import '../assets/css/pap.css'

export default function PollutantsAndPlants() {
    return (
        <>
            <div className="parameter-container" >
                <div className="page-header d-flex-col align-items-center" >
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 text-center">
                                {/* <h2>Pollutants</h2> */}
                            </div>


                            <div className="stats-item text-center w-100 h-100">
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                    className="purecounter">4654</span>
                                <p>Air Quality Index</p><i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i>
                            </div>


                        </div>
                        <div className="row mt-5 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="400">

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Air Quality Index</p><i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Air Quality Index</p><i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Air Quality Index</p><i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Air Quality Index</p><i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className='container position-relative'>
                    asda
                </div> */}
                </div>
            </div>
        </>
    )
}
