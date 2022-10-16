import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact=()=>{
    return(
        <main>
            <Navbar/>
            <section className="contact">
                <h1 className="heading-section">Contact</h1>
                <div className="container">
                    <article className="contact-section">
                        <stong className="contact-heading">Location</stong>
                        <p className="contact-paragraph">
                        Turing Block,Chitkara University(Rajpura)
                        </p>
                    </article>
                    <article className="contact-section">
                        <strong className="contact-heading">Call</strong>
                        <p className="contact-paragraph">
                            +91 9876543210
                        </p>    
                    </article>
                    <article className="contact-section">
                        <strong className="contact-heading">Email</strong>
                        <p className="contact-paragraph">contact@backbenchers.com</p>
                    </article>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
export default Contact