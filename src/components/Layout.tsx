import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';


interface LayoutProps {
    children: JSX.Element | JSX.Element[];
  }

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer/>
    </>
    
  )
}

export default Layout