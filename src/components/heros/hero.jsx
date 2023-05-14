// import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

export default function hero() {
    return (
        <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row gy-4 d-flex justify-content-between">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h2 data-aos="fade-up">Find your perfect plant match</h2>
                        <p data-aos="fade-up" data-aos-delay="100">Simplify the process of selecting plants and create a
                            healthy and thriving garden. Additionally, choose from a wide variety to purchase plants and gardening
                            accessories,
                            making the process of gardening even more convenient.</p>

                        <form action="#" name="search-form" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                            <input form="search-form" type="text" className="form-control" placeholder="City"></input>
                            <input form="search-form" type="text" className="form-control" placeholder="State"></input>
                            <input form="search-form" type="text" className="form-control" placeholder="Country"></input>
                            <button form="search-form" type="button" className="btn btn-primary" onClick={() => { }}>Search</button>
                        </form>

                        {/* <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Air Quality Index</p><i className="bi bi-arrow-left-square-fill"><BsFillArrowLeftSquareFill /></i>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Sunlight</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Rainfall</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Soil</p>
                                </div>
                            </div>

                        </div> */}
                    </div>

                    <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                        <img src="src/assets/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}
