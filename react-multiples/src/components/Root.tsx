import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const Root = () => (
    <Router basename={"react-multiples"}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
)

export default Root