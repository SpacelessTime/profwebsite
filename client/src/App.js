import React from 'react';
import AboutMe from './components/aboutMe.js';
import './App.css';

import {Link, Route} from 'react-router-dom';

const openNewTab = (url) => {
  const newTab = window.open(url, '_blank', 'noopener,noreferrer')
  if (newTab) newTab.opener = null
}

function App() {
  return (
    <div className='App'>
      <nav className='navbar'>
       <h1 className='Title'> Julian Petrisky</h1>
       <h4 className='descript'> <div classname='npod'
       onClick={()=>openNewTab('https://npod-spacelesstime.vercel.app/')}> Astronomy Photo of the day </div> 
    </h4>   <Link to="/about">About</Link>
     <Route path='/AboutMe' component={AboutMe}>About me</Route>
  </nav>
   
    <div className='contentGrid'>
      <div className='leftTop'> left top content 

          <img className='Image'src={'./assets/MTOL0228.JPG'} alt='sunset'/>

       </div>   
      <div className='midTop'>   middle top content  

          <img className='Image'src={'./assets/JLIZ1197.JPG'} alt='sunset'/>

      </div> 
      <div className='rightTop'>  right top content

          <img className='Image'src={'./assets/QNOC8648.JPG'} alt='sunset'/>

       </div>   


      <div className='leftMid'>  left middle content 

        <img className='Image' src={'./assets/RFSL3209.JPG'} alt=''/>

      </div>

      <div className='middle'>dead middle content

        <img className='Image' src={'./assets/SDCQ6636.JPG'} alt=''/>

      </div>

      <div className='rightMid'> right middle content

        <img className='Image' src={'./assets/VSIV2438.JPG'} alt=''/>
      </div>

      <div className='leftBottom'> left bottom content 

        <img className='Image' src={'./assets/NJQV8408.JPG'} alt=''/>

      </div>

      <div className='midBottom'> middle bottom content

        <img className='Image' src={'./assets/WHPM3278.JPG'} alt=''/>


      </div>
      <div className='rightBottom'> right bottom content

        <img className='Image' src={'./assets/XDDM5070.JPG'} alt=''/>

      </div>
</div>
      












<footer className='footer'></footer>
    </div>
);
}

export default App;
