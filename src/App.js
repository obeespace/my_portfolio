import React from "react"
import Reactdom from "react-dom"
import Contact from "./Components/Contact/Contact"
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Services from "./Components/Services/Services"
import Portfolio from "./Components/Portfolio/Portfolio"
import Testimonials from "./Components/Testimonials/Testimonials"
import Footer from "./Components/Footer/Footer"

export default function App (){
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}