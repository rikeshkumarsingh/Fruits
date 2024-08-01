import React from 'react'

import blog1 from '../img/blog-1.jpg';
import blog2 from '../img/blog-2.png';
import blog3 from '../img/blog-3.png';
import post2 from '../img/post-2.jpg';
import post3 from '../img/post-3.jfif';
import post4 from '../img/post-4.jpg';
import post5 from '../img/post-5.jpg';
import post6 from '../img/post-6.jpg';
import post7 from '../img/post-7.jfif';
import post8 from '../img/post-8.jfif';
import post9 from '../img/post-9.jpg';
import { Link } from 'react-router-dom';

const BlogGrid = () => {
    return (
        <div>
            <div>
                <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                    <div className="container py-5">
                        <div className="row justify-content-start">
                            <div className="col-lg-8 text-center text-lg-start">
                                <h1 className="display-1 text-white mb-md-4">Blog Grid</h1>
                                <Link to={'/'} className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                                <Link to={'/blogdetails'} className="btn btn-secondary py-md-3 px-md-5">Blog Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero End */}
                {/* Blog Start */}
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Blog list Start */}
                        <div className="col-lg-8">
                            <div className="row g-5">
                                <div className="col-md-6">
                                    <div className="blog-item position-relative overflow-hidden">
                                        <img className="img-fluid-blog w-100" src={blog1} alt="Image" />
                                        <a className="blog-overlay" href>
                                            <h4 className="text-white">Sweet, juicy, and organic—our litchis are naturally delicious</h4>
                                            <span className="text-white fw-bold">Jan 03, 2022</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-item position-relative overflow-hidden">
                                        <img className="img-fluid-blog w-100" src={post2} alt="Image" />
                                        <a className="blog-overlay" href>
                                            <h4 className="text-white">Pure goodness in every bite: Enjoy our organic litchis</h4>
                                            <span className="text-white fw-bold">Feb 01, 2022</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-item position-relative overflow-hidden">
                                        <img className="img-fluid-blog w-100" src={post3} alt="Image" />
                                        <a className="blog-overlay" href>
                                            <h4 className="text-white">Handpicked and bursting with flavor, try our organic litchis</h4>
                                            <span className="text-white fw-bold">April 11, 2022</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-item position-relative overflow-hidden">
                                        <img className="img-fluid-blog w-100" src={post4} alt="Image" />
                                        <a className="blog-overlay" href>
                                            <h4 className="text-white">Indulge in the best with our fresh organic litchis</h4>
                                            <span className="text-white fw-bold">Dec 01, 2022</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-item position-relative overflow-hidden">
                                        <img className="img-fluid-blog w-100" src={post5} alt="Image" />
                                        <a className="blog-overlay" href>
                                            <h4 className="text-white">Fresh, sweet, and 100% organic—our litchis are perfect for you</h4>
                                            <span className="text-white fw-bold">May 06, 2023</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-item position-relative overflow-hidden">
                                        <img className="img-fluid-blog w-100" src={post6} alt="Image" />
                                        <a className="blog-overlay" href>
                                            <h4 className="text-white">Experience the exceptional taste of our organic litchis</h4>
                                            <span className="text-white fw-bold">Aug 16, 2023</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-item position-relative overflow-hidden">
                                        <img className="img-fluid-blog w-100" src={post7} alt="Image" />
                                        <a className="blog-overlay" href>
                                            <h4 className="text-white">Healthy, delicious, and organic—our litchis have it all</h4>
                                            <span className="text-white fw-bold">Nov 23, 2023</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-item position-relative overflow-hidden">
                                        <img className="img-fluid-blog w-100" src={post8} alt="Image" />
                                        <a className="blog-overlay" href>
                                            <h4 className="text-white">Treat yourself to the natural sweetness of our organic litchis</h4>
                                            <span className="text-white fw-bold">Feb 04, 2024</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-item position-relative overflow-hidden">
                                        <img className="img-fluid-blog w-100" src={post9} alt="Image" />
                                        <a className="blog-overlay" href>
                                            <h4 className="text-white">Organic litchis: The natural and healthy choice for you</h4>
                                            <span className="text-white fw-bold">March 09, 2024</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-item position-relative overflow-hidden">
                                        <img className="img-fluid-blog w-100" src={blog3} alt="Image" />
                                        <a className="blog-overlay" href>
                                            <h4 className="text-white">Taste the difference with our fresh, organic litchis</h4>
                                            <span className="text-white fw-bold">July 10, 2024</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination pagination-lg justify-content-center m-0">
                                            <li className="page-item disabled">
                                                <a className="page-link rounded-0" href="#" aria-label="Previous">
                                                    <span aria-hidden="true"><i className="bi bi-arrow-left" /></span>
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link rounded-0" href="#" aria-label="Next">
                                                    <span aria-hidden="true"><i className="bi bi-arrow-right" /></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* Blog list End */}
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            {/* Search Form Start */}
                            <div className="mb-5">
                                <div className="input-group">
                                    <input type="text" className="form-control p-3" placeholder="Keyword" />
                                    <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
                                </div>
                            </div>
                            {/* Search Form End */}
                            {/* Category Start */}
                            <div className="mb-5">
                                <h2 className="mb-4">We Export To</h2>
                                <div className="d-flex flex-column justify-content-start bg-primary p-4">
                                    <a className="fs-5 fw-bold text-white mb-2" href="#"><i className="bi bi-arrow-right me-2" />USA</a>
                                    <a className="fs-5 fw-bold text-white mb-2" href="#"><i className="bi bi-arrow-right me-2" />UK</a>
                                    <a className="fs-5 fw-bold text-white mb-2" href="#"><i className="bi bi-arrow-right me-2" />Malesia</a>
                                    <a className="fs-5 fw-bold text-white mb-2" href="#"><i className="bi bi-arrow-right me-2" />Dubai</a>
                                    <a className="fs-5 fw-bold text-white" href="#"><i className="bi bi-arrow-right me-2" />Thailand</a>
                                </div>
                            </div>
                            {/* Category End */}
                            {/* Recent Post Start */}
                            <div className="mb-5">
                                <h2 className="mb-4">Recent Post</h2>
                                <div className="bg-primary p-4">
                                    <div className="d-flex overflow-hidden mb-3">
                                        <img className="img-fluid flex-shrink-0" src={post4} style={{ width: 75 }} alt />
                                        <a href className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Taste the best: organic litchis
                                        </a>
                                    </div>
                                    <div className="d-flex overflow-hidden mb-3">
                                        <img className="img-fluid flex-shrink-0" src={post5} style={{ width: 75 }} alt />
                                        <a href className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Juicy litchis: Organic and delicious
                                        </a>
                                    </div>
                                    <div className="d-flex overflow-hidden mb-3">
                                        <img className="img-fluid flex-shrink-0" src={post8} style={{ width: 75 }} alt />
                                        <a href className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Experience the finest organic litchis
                                        </a>
                                    </div>
                                    <div className="d-flex overflow-hidden mb-3">
                                        <img className="img-fluid flex-shrink-0" src={post6} style={{ width: 75 }} alt />
                                        <a href className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Savor the best: organic litchis
                                        </a>
                                    </div>
                                    <div className="d-flex overflow-hidden">
                                        <img className="img-fluid flex-shrink-0" src={blog2} style={{ width: 75 }} alt />
                                        <a href className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Organic litchis: Sweet and natural
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Recent Post End */}
                            {/* Image Start */}
                            <div className="mb-5">
                                <img src={blog1} alt className="img-fluid rounded" />
                            </div>
                            {/* Image End */}
                            {/* Tags Start */}
                            <div className="mb-5">
                                <h2 className="mb-4">Plaining to export</h2>
                                <div className="d-flex flex-wrap m-n1">
                                    <a href className="btn btn-primary m-1">JAPAN</a>
                                    <a href className="btn btn-primary m-1">RUSSIA</a>
                                    <a href className="btn btn-primary m-1">FINLAND</a>
                                    <a href className="btn btn-primary m-1">SWEDEN</a>
                                    <a href className="btn btn-primary m-1">GERMANY</a>
                                    <a href className="btn btn-primary m-1">ITALY</a>
                                    <a href className="btn btn-primary m-1">FRANCE</a>
                                    <a href className="btn btn-primary m-1">SPAIN</a>
                                    <a href className="btn btn-primary m-1">AUSTRIA</a>
                                    <a href className="btn btn-primary m-1">CANADA</a>
                                    <a href className="btn btn-primary m-1">SOUTH KOREA</a>
                                    <a href className="btn btn-primary m-1">AUSTRALIA</a>
                                </div>
                            </div>
                            {/* Tags End */}
                            {/* Plain Text Start */}
                            <div>
                                <h2 className="mb-4">Finest Organic Litchis</h2>
                                <div className="bg-primary text-center text-white" style={{ padding: 30 }}>
                                    <p>Experience the finest organic litchis, grown with care and dedication. Our litchis are sweet, juicy, and chemical-free, offering the best taste and health benefits for you and your family. Savor the natural goodness in every bite!</p>
                                    <a href className="btn btn-secondary py-2 px-4">Read More</a>
                                </div>
                            </div>
                            {/* Plain Text End */}
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
                {/* Blog End */}
            </div>


        </div>
    )
}

export default BlogGrid