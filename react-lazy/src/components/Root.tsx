import React, { lazy, Suspense } from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Home = lazy(() => import('../pages/Home'))

const Root = () => (
    <Suspense fallback={<h1>Carregando....</h1>}>
        <Router basename={"react-lazy"}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </Suspense>
)

export default Root