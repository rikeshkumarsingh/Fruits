import React, { useEffect } from 'react';
import '../lib/owlcarousel/assets/owl.carousel.min.css'
import '../lib/boots.css'
import PureCounter from '@srexi/purecounterjs';
import $ from 'jquery';
import about from '../img/about.png';
import team1 from '../img/IMG_3294.HEIC';
import team2 from '../img/aadi.jpg';
import team3 from '../img/team-3.jpg';
import { Link } from 'react-router-dom';

const Aboutus = () => {

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
    <div>
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">About Us</h1>
              <Link to={'/'} className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
              <Link to={'/contect'} className="btn btn-secondary py-md-3 px-md-5">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5 ">
            <div className="col-lg-6 mb-5 mb-lg-0 ">
              <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4 box">
                {/* <img className="img-fluid mt-auto mx-auto" src="img/about.png" /> */}
                <img className="img-fluid mt-auto mx-auto" src={about} alt="Image" />
              </div>
            </div>
            <div className="col-lg-6 pb-5 ">
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
                  <h1 className="display-5 text-white mb-0" data-toggle="counter-up"><span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="2" className="purecounter"></span>+</h1>
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
                  <h1 className="display-5 text-white mb-0" data-toggle="counter-up"><span data-purecounter-start="0" data-purecounter-end="120" data-purecounter-duration="2" className="purecounter"></span>+</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <div className="row g-0 box" >
                <div className="col-10">
                  <div className="position-relative">
                    <img className="img-fluid w-100 farmar" src={team2} alt="Image" />
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
            <div className="col-lg-4 col-md-6">
              <div className="row g-0 box">
                <div className="col-10">
                  <div className="position-relative">
                    <img className="img-fluid w-100 farmar" src={team3} alt="Image" />
                    <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                      <h4 className="text-white">Farmer Name</h4>
                      <span className="text-white">Designation</span>
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
    </div>
  )
}

export default Aboutus