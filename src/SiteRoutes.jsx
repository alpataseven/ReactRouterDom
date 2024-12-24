import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function SiteRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}