import React, { useState } from 'react';
import LandingPage from '.\components\LandingPage.js';

export default function App() 

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'baseline',
  }
}

const links = [ {text: 'HOME', link: '/', emphasis: true},
{text: 'ABOUT', link: '/about' },
{text: 'SIGN UP', link: '/signup'}
// ... navbar ...
 ]
 
 // this is the multi step onboarding form!
 // https://www.youtube.com/watch?v=wOxP4k9f5rk
 const [page, setPage] = useState(0);
 const advancePage = () => {
  setPage((page) => page + 1);
 }
 const backUpPage = () => {
  setPage((page) => page - 1);
 }

 const FormTitles = ["Anonymous Web Messaging App", ""]

return (
  <div className = "App">
  <Router> 
    <div style = {StyleSheet.navbar}> 
    {links.map((link) => (
      <Link to = {link.link}>
        <p className ="link"> {link.text} </p>
      </Link>
    ))}
    </div>
  </Router>

  <div className = 'form'> 
    <div className = 'header'>
      <h1> {FormTitles[page]} </h1>
    </div>
      <div className = 'body'> 
      <button onClick = {backUpPage}> prev </button>
      <button onClick = {advancePage}> next </button>
      </div>
    </div>
    </div>
)
