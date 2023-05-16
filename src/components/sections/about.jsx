import { BsDiagram3, BsFullscreenExit, BsBroadcast } from "react-icons/bs";

export default function about() {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="row gy-4">
                    <div className="col-lg-6 position-relative align-self-center order-lg-last order-first">
                        <img src="images/garden.jpeg" className="img-fluid" alt="" />
                        <a href="https://www.youtube.com/watch?v=GjLWR8N6DHo" className="glightbox play-btn"></a>
                    </div>
                    <div className="col-lg-6 content order-last order-lg-first">
                        <h3>About Us</h3>
                        <p>
                            We at Plantify aim to simplify the process of selecting plants and help users create a healthy and
                            thriving garden. Additionally, the app also provides users with the option to purchase plants and
                            gardening accessories, making the process of gardening even more convenient.
                        </p>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100">
                                <i className="bi bi-diagram-3"><BsDiagram3 /></i>
                                <div>
                                    <h5>Sustainability</h5>
                                    <p>Plantify promotes sustainable gardening practices that reduce environmental impact and promote biodiversity.
                                        By encouraging the use of native plants and minimizing the use of chemical pesticides and fertilizers, Plantify can help users create gardens that are both beautiful and ecologically responsible.</p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-fullscreen-exit"><BsFullscreenExit /></i>
                                <div>
                                    <h5>Accessibility</h5>
                                    <p>Plantify aims to make gardening accessible to everyone, regardless of their level of experience or expertise. By providing personalized plant recommendations and expert advice, Plantify can help users overcome common gardening challenges and enjoy the benefits of gardening, such as improved mental health and a connection to nature.</p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-broadcast"><BsBroadcast /></i>
                                <div>
                                    <h5>Community</h5>
                                    <p> Plantify fosters a sense of community among its users, encouraging them to share their gardening experiences, tips, and advice. By connecting users with like-minded individuals, Plantify can help build a community of gardeners who share a passion for gardening and a commitment to sustainable practices.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}
