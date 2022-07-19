import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutDefault from '../config/layout/Default'
import About from '../pages/about/About'
import Home from '../pages/home/Home'
import Faqs from '../pages/faqs/Faqs'
import Characters from '../pages/characters/Characters'
import User from '../pages/user/User'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault component={Home} />} />
        <Route path="/about" element={<LayoutDefault component={About} />} />
        <Route path="/faqs" element={<LayoutDefault component={Faqs} />} />
        <Route
          path="/characters"
          element={<LayoutDefault component={Characters} />}
        />
        <Route path="/users" element={<LayoutDefault component={User} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
