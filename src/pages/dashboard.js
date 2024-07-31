import React, { useEffect } from 'react';
import '../lib/owlcarousel/assets/owl.carousel.min.css'
import '../lib/boots.css'
import '../lib/custom.css'
import PureCounter from '@srexi/purecounterjs';
import $ from 'jquery';
// import '../lib/owlcarousel/owl.carousel'
import 'jquery.counterup';
import 'waypoints/lib/jquery.waypoints';
import 'jquery.counterup/jquery.counterup';
import 'waypoints/lib/jquery.waypoints.min';
import 'jquery.counterup/jquery.counterup.min';

import image1 from '../img/carousel-1.jpg';
import image2 from '../img/carousel-2.png';
import product1 from '../img/product-1.png';
import team1 from '../img/team-3.jpg';
import team2 from '../img/aadi.jpg';
import team3 from '../img/team1.jpg';
import blog1 from '../img/blog-1.jpg';
import blog2 from '../img/blog-2.png';
import blog3 from '../img/blog-3.png';
import about from '../img/about.png';
import feature from '../img/feature.jpg';
import testimonial from '../img/testimonial.jpg';
import testimonial1 from '../img/testimonial-1.jpg';
import testimonial2 from '../img/testimonial-2.jpg';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    useEffect(() => {
        "use strict";
        new PureCounter();
        // Sticky Navbar
        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('.navbar').addClass('sticky-top');
              
            } else {
                $('.navbar').removeClass('sticky-top');
                // new PureCounter();
            }
        });

        // Dropdown on mouse hover
        function toggleNavbarMethod() {
            
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });

        // Facts counter
        // $('[data-toggle="counter-up"]').counterUp({
        //     delay: 10,
        //     time: 2000
        // });

        // // Product carousel
        // $(".product-carousel").owlCarousel({
        //     autoplay: true,
        //     smartSpeed: 1000,
        //     margin: 45,
        //     dots: false,
        //     loop: true,
        //     nav: true,
        //     navText: [
        //         '<i className="bi bi-arrow-left"></i>',
        //         '<i className="bi bi-arrow-right"></i>'
        //     ],
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         768: {
        //             items: 2
        //         },
        //         992: {
        //             items: 3
        //         },
        //         1200: {
        //             items: 4
        //         }
        //     }
        // });

        // Testimonials carousel
        // $(".testimonial-carousel").owlCarousel({
        //     autoplay: true,
        //     smartSpeed: 1000,
        //     items: 1,
        //     dots: false,
        //     loop: true,
        //     nav: true,
        //     navText: [
        //         '<i className="bi bi-arrow-left"></i>',
        //         '<i className="bi bi-arrow-right"></i>'
        //     ],
        // });
    }, []);




    return (
        <>
            <div>
                <div className="container-fluid p-0">
                    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src={image1} alt="Image" />
                                <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                                    <div className="text-start p-5" style={{ maxWidth: 900 }}>
                                        <h3 className="text-white"> Delicious Lychee</h3>
                                        <h1 className="display-1 text-white mb-md-4">Best Lychees in the World</h1>
                                        <Link to={'/contect'} className="btn btn-primary py-md-3 px-md-5 me-3">Explore</Link>
                                        <Link to={'/contect'} className="btn btn-secondary py-md-3 px-md-5">Contact</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src={image2} alt="Image" />
                                <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                                    <div className="text-start p-5" style={{ maxWidth: 900 }}>
                                        <h3 className="text-white">Organic Fruits</h3>
                                        <h1 className="display-1 text-white mb-md-4">Organic Fruits For Better Health</h1>
                                        <a href className="btn btn-primary py-md-3 px-md-5 me-3">Explore</a>
                                        <a href className="btn btn-secondary py-md-3 px-md-5">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* Carousel End */}
                {/* Banner Start */}
                <div className="container-fluid banner mb-5 ">
                    <div className="container">
                        <div className="row gx-0 box">
                            <div className="col-md-6">
                                <div className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5" style={{ height: 300 }}>
                                    <h3 className="text-white mb-3">Organic Litchis</h3>
                                    <p className="text-white">Experience the deliciously sweet and juicy taste of our organic litchis, grown naturally without synthetic chemicals. Perfect for a healthy and refreshing treat!</p>
                                    <a className="text-white fw-bold" href>Read More<i className="bi bi-arrow-right ms-2" /></a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5" style={{ height: 300 }}>
                                    <h3 className="text-white mb-3">Organic Fruits</h3>
                                    <p className="text-white">Enjoy the pure taste of nature with our organic fruits, grown without synthetic chemicals. Savor the freshness and health benefits in every bite!</p>
                                    <a className="text-white fw-bold" href>Read More<i className="bi bi-arrow-right ms-2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner Start */}
                {/* About Start */}
                <div className="container-fluid about pt-5">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-6 mb-5 mb-lg-0 ">
                                <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4 box">
                                    {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                                    <img className="img-fluid mt-auto mx-auto" src={about} alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-6 pb-5">
                                <div className="mb-3 pb-2">
                                    <h6 className="text-primary text-uppercase">About Us</h6>
                                    <h1 className="display-5">We Produce Organic Litchis For Your Family</h1>
                                </div>
                                <p className="mb-4">As a dedicated farmer, I take pride in growing organic litchis that are perfect for your family. Our litchis are cultivated without the use of synthetic chemicals, ensuring they are not only deliciously sweet and juicy but also healthy and safe. Each litchi is handpicked at the peak of ripeness to guarantee the best flavor and nutritional value. Enjoy the natural goodness and freshness of our organic litchis, knowing they are produced with care and commitment to quality.</p>
                                <div className="row gx-5 gy-4">
                                    <div className="col-sm-6">
                                        <i className="fa fa-seedling display-1 text-secondary" />
                                        <h4>100% Organic</h4>
                                        <p className="mb-0">Our litchis are 100% organic, grown naturally without synthetic chemicals. Enjoy the pure, fresh taste and health benefits in every bite!</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-award display-1 text-secondary" />
                                        <h4>Award Winning</h4>
                                        <p className="mb-0">Our award-winning litchis are celebrated for their exceptional taste and quality. Enjoy the best, grown with care and dedication on our farm!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Facts Start */}
                <div className="container-fluid bg-primary facts py-5 mb-5">
                    <div className="container py-5">
                        <div className="row gx-5 gy-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex">
                                    <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-star fs-4 text-white" />
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-white">Our Experience</h5>
                                        <h1 className="display-5 text-white mb-0" data-toggle="counter-up"><span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="2" className="purecounter"></span>+ Years</h1>
                                        {/* <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-duration="5" className="purecounter"></span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex">
                                    <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-users fs-4 text-white" />
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-white">Farm Specialist</h5>
                                        <h1 className="display-5 text-white mb-0" data-toggle="counter-up"><span data-purecounter-start="0" data-purecounter-end="500" data-purecounter-duration="2" className="purecounter"></span>+</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex">
                                    <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-check fs-4 text-white" />
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-white">Complete Project</h5>
                                        <h1 className="display-5 text-white mb-0" data-toggle="counter-up"><span data-purecounter-start="0" data-purecounter-end="120" data-purecounter-duration="2" className="purecounter"></span>+</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex">
                                    <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-mug-hot fs-4 text-white" />
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-white">Happy Clients</h5>
                                        <h1 className="display-5 text-white mb-0" data-toggle="counter-up"><span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="2" className="purecounter"></span>+</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Facts End */}
                {/* Services Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                    <h6 className="text-primary text-uppercase">Services</h6>
                                    <h1 className="display-5">Organic Farm Services</h1>
                                </div>
                                <p className="mb-4">We offer comprehensive organic farm services, ensuring our litchis are grown sustainably and naturally. Trust us for the freshest, healthiest produce!</p>
                                <Link to={"/contect"} className="btn btn-primary py-md-3 px-md-5">Contact Us</Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light text-center p-5 box">
                                    <i className="fas fa-leaf display-1 text-primary mb-3" />
                                    <h4>Organic Tree</h4>
                                    <p className="mb-0">Our organic trees are nurtured without synthetic chemicals, producing the healthiest and tastiest fruits. Enjoy pure, natural goodness in every bite!</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light text-center p-5 box">
                                    <i className="fa fa-apple-alt display-1 text-primary mb-3" />
                                    <h4>Fresh Fruits</h4>
                                    <p className="mb-0">Our fresh fruits are harvested at peak ripeness, ensuring maximum flavor and nutrition. Enjoy the delicious taste and health benefits daily!</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light text-center p-5 box">
                                    <i className="fa fa-dog display-1 text-primary mb-3" />
                                    <h4>Healty Cattle</h4>
                                    <p className="mb-0">Our healthy cattle are raised naturally, without synthetic hormones or antibiotics. Enjoy high-quality, nutritious beef that you can trust.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light text-center p-5 box">
                                    <i className="fa fa-tractor display-1 text-primary mb-3" />
                                    <h4>Modern Farming</h4>
                                    <p className="mb-0">Modern farming blends traditional methods with innovative technology to produce high-quality, sustainable crops with minimal environmental impact.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light text-center p-5 box">
                                    <i className="fa fa-seedling display-1 text-primary mb-3" />
                                    <h4>Farming Plans</h4>
                                    <p className="mb-0">Our farming plans ensure efficiency and sustainability, producing high-quality crops while conserving resources and protecting the environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services End */}
                {/* Features Start */}
                <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
                    <div className="container py-5 pb-lg-0">
                        <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: 500 }}>
                            <h6 className="text-uppercase text-secondary">Features</h6>
                            <h1 className="display-5 text-white">Why Choose Us!!!</h1>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-3">
                                <div className="text-white mb-5">
                                    <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-seedling fs-4 text-white" />
                                    </div>
                                    <h4 className="text-white">100% Organic</h4>
                                    <p className="mb-0">Our litchis are 100% organic, grown naturally without synthetic chemicals. Enjoy the pure, fresh taste and health benefits in every bite!</p>
                                </div>
                                <div className="text-white">
                                    <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-award fs-4 text-white" />
                                    </div>
                                    <h4 className="text-white">Award Winning</h4>
                                    <p className="mb-0">Our award-winning litchis are celebrated for their exceptional taste and quality. Enjoy the best, grown with care and dedication on our farm!</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-block bg-white h-100 text-center p-5 pb-lg-0 box">
                                    <p>Choose us for the finest organic litchis, grown with dedication and expertise on our sustainable farm. We prioritize quality and health, ensuring our litchis are free from synthetic chemicals. Experience the exceptional taste and nutritional benefits of our carefully handpicked produce. Your satisfaction is our commitment.</p>
                                    {/* <img className="img-fluid" src="img/feature.png" alt /> */}
                                    <img className="img-fluid" src={feature} alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-white mb-5">
                                    <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-tractor fs-4 text-white" />
                                    </div>
                                    <h4 className="text-white">Modern Farming</h4>
                                    <p className="mb-0">Embracing modern farming techniques, we ensure our organic litchis are of the highest quality. Enjoy the perfect blend of tradition and innovation in every bite!</p>
                                </div>
                                <div className="text-white">
                                    <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-phone-alt fs-4 text-white" />
                                    </div>
                                    <h4 className="text-white">24/7 Support</h4>
                                    <p className="mb-0">We offer 24/7 support to assist with any inquiries or needs regarding our litchis. Your satisfaction is our priority, and we're here to help anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features Start */}
                {/* Products Start */}
                {/* <div className="container-fluid py-5">
                    <div className="container">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                            <h6 className="text-primary text-uppercase">Products</h6>
                            <h1 className="display-5">Our Fresh &amp; Organic Products</h1>
                        </div>
                        <div className="  product-carousel px-5">
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt />
                                    <img className="img-fluid mb-4" src={product1} alt="Image" />
                                    <img className="img-fluid mb-4" src={product1} alt="Image" style={{ width: '400px', height: 'auto' }} />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href><i className="bi bi-cart text-white" /></a>
                                        <a className="btn bg-secondary py-2 px-3" href><i className="bi bi-eye text-white" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt />
                                    <img className="img-fluid mb-4" src={product1} alt="Image" />
                                    <img className="img-fluid mb-4" src={product1} alt="Image" style={{ width: '400px', height: 'auto' }} />

                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href><i className="bi bi-cart text-white" /></a>
                                        <a className="btn bg-secondary py-2 px-3" href><i className="bi bi-eye text-white" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-2.png" alt />
                                    <img className="img-fluid mb-4" src={product1} alt="Image" />
                                    <img className="img-fluid mb-4" src={product1} alt="Image" style={{ width: '400px', height: 'auto' }} />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href><i className="bi bi-cart text-white" /></a>
                                        <a className="btn bg-secondary py-2 px-3" href><i className="bi bi-eye text-white" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5">
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt />
                                    <img className="img-fluid mb-4" src={product1} alt="Image" />
                                    <img className="img-fluid mb-4" src={product1} alt="Image" style={{ width: '400px', height: 'auto' }} />
                                    <h6 className="mb-3">Organic Vegetable</h6>
                                    <h5 className="text-primary mb-0">$19.00</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <a className="btn bg-primary py-2 px-3" href><i className="bi bi-cart text-white" /></a>
                                        <a className="btn bg-secondary py-2 px-3" href><i className="bi bi-eye text-white" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Products End */}
                {/* Testimonial Start */}
                {/* <div className="container-fluid bg-testimonial py-5 my-5">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className=" testimonial-carousel p-5">
                                    <div className="testimonial-item text-center text-white">
                                        <img className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4" src="img/testimonial-2.jpg" alt />
                                        <img className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4" src={testimonial1} alt="Image" />

                                        <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                                        <hr className="mx-auto w-25" />
                                        <h4 className="text-white mb-0">Client Name</h4>
                                    </div>
                                    <div className="testimonial-item text-center text-white">
                                        <img className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4" src={testimonial2} alt="Image" />
                                        <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                                        <hr className="mx-auto w-25" />
                                        <h4 className="text-white mb-0">Client Name</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Testimonial End */}
                {/* Team Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                            <h6 className="text-primary text-uppercase">The Team</h6>
                            <h1 className="display-5">We Are Professional Organic Farmers</h1>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="row g-0 box">
                                    <div className="col-10">
                                        <div className="position-relative">
                                            <img className="img-fluid w-100 farmar" src={team1} alt="Image" />
                                            <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                                                <h4 className="text-white">Rikesh Kumar</h4>
                                                <span className="text-white">Farmer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary" /></a>
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary" /></a>
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary" /></a>
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="row g-0 box">
                                    <div className="col-10">
                                        <div className="position-relative">
                                            <img className="img-fluid w-100 farmar" src={team2} alt="Image" />
                                            <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                                                <h4 className="text-white">Gaurav Singh</h4>
                                                <span className="text-white">Farmer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary" /></a>
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary" /></a>
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary" /></a>
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="row g-0 box">
                                    <div className="col-10">
                                        <div className="position-relative">
                                            <img className="img-fluid w-100 farmar" src={team3} alt="Image" />
                                            <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                                                <h4 className="text-white">Aadi Thakur</h4>
                                                <span className="text-white">Farmer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary" /></a>
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary" /></a>
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary" /></a>
                                            <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
                {/* Blog Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                            <h6 className="text-primary text-uppercase">Our Blog</h6>
                            <h1 className="display-5">Latest Articles From Our Blog Post</h1>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-4">
                                <div className="blog-item position-relative overflow-hidden box">
                                    {/* <img className="img-fluid" src="img/blog-1.jpg" alt /> */}
                                    <img className="img-fluid-blog w-100" src={blog1} alt="Image" />
                                    <a className="blog-overlay" href>
                                        <h4 className="text-white">From Seed to Harvest: The Journey of Litchi Farming Explained</h4>
                                        <span className="text-white fw-bold">March 01, 2024</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog-item position-relative overflow-hidden box">
                                    <img className="img-fluid-blog w-100" src={blog2} alt="Image" />
                                    <a className="blog-overlay" href>
                                        <h4 className="text-white">Organic Litchi Cultivation: How to Grow Sweet and Healthy Fruit</h4>
                                        <span className="text-white fw-bold">Oct 05, 2023</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog-item position-relative overflow-hidden box">
                                    <img className="img-fluid-blog w-100" src={blog3} alt="Image" />
                                    <a className="blog-overlay" href>
                                        <h4 className="text-white">Mastering Litchi Farming: Essential Tips for a Bountiful Harvest</h4>
                                        <span className="text-white fw-bold">Jan 10, 2022</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Dashboard