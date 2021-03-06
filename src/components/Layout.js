import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
// import { Link } from "gatsby";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Diaconat" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
