import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from '@xstyled/styled-components'

import { theme, GlobalStyles } from '../styles/theme'

import NavBar from "./NavBar1"
import Footer from "./Footer"





const Layout = ({ children }) => {


  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <NavBar />
        <main>{children}</main>
        <Footer />

      </ThemeProvider>
    </>
  )
}


export default Layout
