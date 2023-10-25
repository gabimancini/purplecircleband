import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdCall, MdLocationPin, MdMail } from 'react-icons/md';
import PageTitle from "../components/pageTitle";
import Paragraph from "../components/Paragraph";
export default function Contact() {
    return (
        <>
            <PageTitle title="Contact Us" />
            <section id="contact">
                <div className="container container_contact">
                    <ContactText />
                    <ContactForm />
                </div>
            </section>
            <ContactBg />
        </>
    )
}

function ContactText() {
    return (
        <div className="contact_text">
            <h3>Our Info</h3>
            <Paragraph text="Our information on this website gives you an inside look at our band's journey, music and upcoming releases. Browse our biographies, listen to our latest songs and stay up to date on our tour dates. We are excited to share our contact information with you." />
            <div className="contact_list">
                <ul>
                    <li><MdMail /> <Link to="mailto:purplecircleband@gmail.com" >purplecircleband@gmail.com</Link></li>
                    <li><MdCall /> <Link to="tel:9173307604">Tel: (917) 330-7604</Link></li>
                    <li><MdLocationPin /> <Link to="https://maps.app.goo.gl/KHmsiR8cnJpBDj8s8">Main address: Easton PA. USA</Link></li>
                </ul>
            </div>
        </div>
    )
}

function ContactForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        tel: "",
        subject: "",
        message: ""
    })
    const form = useRef();
    function handleSubmit() {
        setValues({
            name: "",
            email: "",
            tel: "",
            subject: "",
            message: ""
        })
    }
    function handleChange(e) {
        console.log(e.target.value);
        setValues({
            ...values,
            [e.target.name]: e.target.value

        })
    }
    return (
        <form ref={form} onSubmit={handleSubmit} className="contact_form">
            <label htmlFor="name">Your Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                />
            </label>
            <label htmlFor="email">Your Email
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                />
            </label>
            <label htmlFor="tel">Your Telephone
                <input
                    type="tel"
                    id="tel"
                    name="tel"
                    onChange={handleChange}
                    value={values.tel}
                />
            </label>
            <label htmlFor="subject">Subject
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                    value={values.subject}
                />
            </label>
            <label htmlFor="textarea" className="textarea">Your Message in Detail
                <textarea
                    id="textarea"
                />
            </label>
            <button type="submit" className="linkBtn">Send</button>
        </form>
    )
}

function ContactBg(){
    return(
        <div className="contact_bg"></div>
    )
}