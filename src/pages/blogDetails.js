import React from 'react'

import blog1 from '../img/blog-1.jpg';
import blog2 from '../img/blog-2.png';
import user1 from '../img/user.jpg';
import blog3 from '../img/blog-3.png';

const BlogDetails = () => {
    return (
        <div>
            <div>
                {/* Hero Start */}
                <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                    <div className="container py-5">
                        <div className="row justify-content-start">
                            <div className="col-lg-8 text-center text-lg-start">
                                <h1 className="display-1 text-white mb-md-4">Blog Detail</h1>
                                <a href className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                                <a href className="btn btn-secondary py-md-3 px-md-5">Blog Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero End */}
                {/* Blog Start */}
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            {/* Blog Detail Start */}
                            <div className="mb-5">
                                <div className="row g-5 mb-5">
                                    <div className="col-md-6">
                                        <img className="img-fluid w-100" src={blog1} alt />
                                    </div>
                                    <div className="col-md-6">
                                        <img className="img-fluid w-100" src={blog2} alt />
                                    </div>
                                </div>
                                <h1 className="mb-4">The Finest Organic Litchis: Grown in Muzaffarpur, Bihar, India</h1>
                                <p>Nestled in the heart of Bihar, India, Muzaffarpur is renowned for producing some of the finest litchis in the world. This region, with its fertile soil and favorable climate, is the perfect place for growing litchis that are not only delicious but also organically cultivated. Our organic litchis from Muzaffarpur are a testament to the traditional farming methods combined with modern organic practices, resulting in a fruit that is unparalleled in taste and quality.</p>
                                <h3>Why Muzaffarpur Litchis are the Best</h3>
                                <p><b>1. Ideal Growing Conditions:</b> The climate of Muzaffarpur, with its hot summers and cool winters, provides the perfect environment for litchi trees to thrive. The alluvial soil, rich in nutrients, further enhances the growth and quality of the litchis.</p>
                                <p><b>2. Organic Farming Practices:</b> We adhere to strict organic farming practices, ensuring that our litchis are free from synthetic pesticides and fertilizers. This not only makes our litchis healthier but also more flavorful.</p>
                                <p><b>3. Peak Harvest Time:</b> Our litchis are typically ready to eat in April and May. During this time, the fruits are at their peak ripeness, offering a juicy and sweet flavor that is truly irresistible.</p>
                                <p><b>4. Handpicked with Care:</b> Each litchi is handpicked to ensure that only the best fruits make it to your table. This meticulous process guarantees that our litchis are of the highest quality, with a perfect balance of sweetness and juiciness.</p>
                                <p><b>5. Nutritional Benefits:</b> Litchis are not only delicious but also packed with essential vitamins and minerals. They are an excellent source of Vitamin C, antioxidants, and dietary fiber, making them a healthy choice for your diet.</p>
                                <h3>Experience the Best Litchis in the World</h3>
                                <p>Our organic litchis from Muzaffarpur are more than just a fruit; they are a symbol of quality and tradition. When you bite into one of our litchis, you experience the dedication and care that goes into every step of the growing process. From the fertile fields of Muzaffarpur to your table, our litchis bring you the best nature has to offer.</p>
                            
                            </div>
                            {/* Blog Detail End */}
                            {/* Comment List Start */}
                            <div className="mb-5">
                                <h2 className="mb-4">4 Comments</h2>
                                <div className="d-flex mb-4">
                                    <img src={user1} className="img-fluid" style={{ width: 45, height: 45 }} />
                                    <div className="ps-3">
                                        <h6><a href> Ramesh Meena</a> </h6>
                                        <p>I had the pleasure of trying Muzaffarpur litchis last summer, and they were the best I've ever tasted. The organic quality really makes a difference!</p>
                                        <button className="btn btn-sm btn-primary">Reply</button>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <img src={user1} className="img-fluid" style={{ width: 45, height: 45 }} />
                                    <div className="ps-3">
                                        <h6><a href>Sophie K</a> </h6>
                                        <p>I'm so impressed with the flavor and freshness of these litchis. It's great to know they are grown organically without any harmful chemicals.</p>
                                        <button className="btn btn-sm btn-primary">Reply</button>
                                    </div>
                                </div>
                                <div className="d-flex  mb-4">
                                    <img src={user1} className="img-fluid" style={{ width: 45, height: 45 }} />
                                    <div className="ps-3">
                                        <h6><a href>Rajesh P</a> </h6>
                                        <p>As a litchi lover, I can confirm that Muzaffarpur litchis are indeed the best in the world. The sweetness and juiciness are unmatched!</p>
                                        <button className="btn btn-sm btn-primary">Reply</button>
                                    </div>
                                </div>
                                <div className="d-flex ms-5 mb-4">
                                    <img src={user1} className="img-fluid" style={{ width: 45, height: 45 }} />
                                    <div className="ps-3">

                                    {/* <h6><a href>Emily R</a> <small><i>01 Jan 2045</i></small></h6> */}
                                        <h6><a href>Emily R</a> </h6>
                                        <p>I subscribed to the newsletter and received some great tips on how to enjoy litchis in different recipes. Highly recommend trying these litchis!</p>
                                        <button className="btn btn-sm btn-primary">Reply</button>
                                    </div>
                                </div>
                            </div>
                            {/* Comment List End */}
                            {/* Comment Form Start */}
                            <div className="bg-primary p-5">
                                <h2 className="text-white mb-4">Leave a comment</h2>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control bg-white border-0" placeholder="Your Name" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control bg-white border-0" placeholder="Your Email" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control bg-white border-0" placeholder="Website" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control bg-white border-0" rows={5} placeholder="Comment" defaultValue={""} />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">Leave Your Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Comment Form End */}
                        </div>
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
                                        <img className="img-fluid flex-shrink-0" src={blog1} style={{ width: 75 }} alt />
                                        <a href className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit
                                        </a>
                                    </div>
                                    <div className="d-flex overflow-hidden mb-3">
                                        <img className="img-fluid flex-shrink-0" src={blog2} style={{ width: 75 }} alt />
                                        <a href className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit
                                        </a>
                                    </div>
                                    <div className="d-flex overflow-hidden mb-3">
                                        <img className="img-fluid flex-shrink-0" src={blog3} style={{ width: 75 }} alt />
                                        <a href className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit
                                        </a>
                                    </div>
                                    <div className="d-flex overflow-hidden mb-3">
                                        <img className="img-fluid flex-shrink-0" src={blog1} style={{ width: 75 }} alt />
                                        <a href className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit
                                        </a>
                                    </div>
                                    <div className="d-flex overflow-hidden">
                                        <img className="img-fluid flex-shrink-0" src={blog2} style={{ width: 75 }} alt />
                                        <a href className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit
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
                                <h2 className="mb-4">Plain Text</h2>
                                <div className="bg-primary text-center text-white" style={{ padding: 30 }}>
                                    <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
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

export default BlogDetails