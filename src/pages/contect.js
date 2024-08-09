import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '../lib/custom.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contect = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        emailjs.init('KO0T9vzOujOHZ3xG7');
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send('service_opyvv1h', 'template_b32ibx7', formData)
            .then((response) => {
                setLoading(false);
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Message sent successfully!!',
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            }, (error) => {
                setLoading(false);
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed!! Try again...',
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });
            });
    };


    return (
        <div>
            <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-white mb-md-4">Contact Us</h1>
                            <Link to={'/'} className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                            <Link to={'/about'} className="btn btn-secondary py-md-3 px-md-5">About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 ">
                <div className="container">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 }}>
                        <h6 className="text-primary text-uppercase">Contact Us</h6>
                        <h1 className="display-5">Please Feel Free To Contact Us</h1>
                    </div>
                    <div className="row g-0 box">
                        <div className="col-lg-7">
                            <div className="bg-primary h-100 padd">
                                {/* <form>
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <input type="text" className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-6">
                                            <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control bg-light border-0 px-4" placeholder="Subject" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control bg-light border-0 px-4 py-3" rows={2} placeholder="Message" defaultValue={""} />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form> */}
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <input
                                                type="text"
                                                className="form-control bg-light border-0 px-4"
                                                placeholder="Your Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                style={{ height: 55 }}
                                                required
                                            />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input
                                                type="email"
                                                className="form-control bg-light border-0 px-4"
                                                placeholder="Your Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                style={{ height: 55 }}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                className="form-control bg-light border-0 px-4"
                                                placeholder="Phone Number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                style={{ height: 55 }}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                className="form-control bg-light border-0 px-4"
                                                placeholder="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                style={{ height: 55 }}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control bg-light border-0 px-4 py-3"
                                                rows={2}
                                                placeholder="Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-secondary w-100 py-3" type="submit" disabled={loading}>
                                                {loading ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-secondary h-100 padd">
                                <h2 className="text-white mb-4">Get In Touch</h2>
                                <div className="d-flex mb-4">
                                    <div className='col-2'>
                                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                                            <i className="bi bi-geo-alt fs-4 text-white" />
                                        </div>
                                    </div>

                                    <div className='col-10'>
                                        <div className="ps-3">
                                            <h5 className="text-white">Our Office</h5>
                                            <span className="text-white">Barapakar, Dulma, Madhuban, East Champaran, Bihar, India</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="d-flex mb-4">
                                    <div className='col-2'>
                                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                                            <i className="bi bi-envelope-open fs-4 text-white" />
                                        </div>
                                    </div>
                                    <div className='col-10'>
                                        <div className="ps-3">
                                            <h5 className="text-white">Email Us</h5>
                                            {/* <span className="text-white">contactus@biharfruits.com</span> */}
                                            <a className="text-white" href="mailto:contactus@biharfruits.com">contactus@biharfruits.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className='col-2'>
                                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                                            <i className="bi bi-phone-vibrate fs-4 text-white" />
                                        </div>
                                    </div>
                                    <div className='col-10'>
                                        <div className="ps-3">
                                            <h5 className="text-white">Call Us</h5>
                                            {/* <span className="text-white">+918405093165</span> */}
                                            <a className="text-white" href="tel:+918405093165">+918405093165</a>
                                        </div>
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

export default Contect