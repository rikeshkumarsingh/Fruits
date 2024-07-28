import React from 'react'

import '../lib/owlcarousel/assets/owl.carousel.min.css'
import '../lib/boots.css'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid px-5 d-none d-lg-block">
                <div className="row gx-5 py-3 align-items-center">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-start">
                            <i className="bi bi-phone-vibrate fs-1 text-primary me-2" />
                            <h2 className="mb-0">+918405093165</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-center">
                            <Link href="index.html" className="navbar-brand ms-lg-5">
                                <h1 className="m-0 display-4 text-primary"><span className="text-secondary">Bihar</span>Fruits</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-end">
                            <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter" /></a>
                            <Link className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f" /></Link>
                            <Link className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in" /></Link>
                            <Link className="btn btn-primary btn-square rounded-circle" href="#"><i className="fab fa-instagram" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
                <Link href="index.html" className="navbar-brand d-flex d-lg-none">
                    <h1 className="m-0 display-4 text-secondary"><span className="text-white">Bihar</span>Fruits</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <Link to={'/'} className="nav-item nav-link ">Home</Link>
                       
                        <Link to={'/service'} className="nav-item nav-link">Service</Link>
                        <Link to={'/product'} className="nav-item nav-link">Product</Link>
                        <div className="nav-item dropdown">
                            <Link to={'/'} className="nav-link dropdown-toggle " data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <Link to={'/blog'} className="dropdown-item ">Blog Grid</Link>
                                <Link to={'/blogdetails'} className="dropdown-item">Blog Detail</Link>
                                <Link to={'/'} className="dropdown-item">Features</Link>
                                <Link to={'/'} className="dropdown-item">The Team</Link>
                                <Link to={'/'} className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        {/* <Link  className="nav-item nav-link">Contact</Link> */}
                        <Link to={'/about'} className="nav-item nav-link">About</Link>
                        <Link to={'/contect'} className="nav-item nav-link" >Contact</Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar