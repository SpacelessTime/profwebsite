import React,{Component} from 'react';
import './App.css';


const openNewTab = (url) => {
  const newTab = window.open(url, '_blank', 'noopener,noreferrer')
  if (newTab) newTab.opener = null
}

class App extends Component {
 render() {
  return (
    <div className='App'>
      <nav className='navbar'>
       <h1 className='Title'> Julian Petrisky Photography</h1>
        <div className='npod'
       onClick={()=>openNewTab('https://npod-spacelesstime.vercel.app/')}> Astronomy Photo of the day </div>
  </nav>
  <h2 className='descript'>All photos taken by me. This was a small project to test out concepts and designs for my future websites, 
                            I might add more photos/updates in the future</h2>
    <div className='contentGrid'>
      <div className='leftTop'> 

          <img className='Image'src={'./assets/MTOL0228.JPG'} alt='sunset'/>

       </div>   
      <div className='midTop'>     

          <img className='Image'src={'./assets/JLIZ1197.JPG'} alt='sunset'/>

      </div> 
      <div className='rightTop'> 

          <img className='Image'src={'./assets/QNOC8648.JPG'} alt='sunset'/>

       </div>   


      <div className='leftMid'>  

        <img className='Image' src={'./assets/RFSL3209.JPG'} alt=''/>

      </div>

      <div className='middle'>

        <img className='Image' src={'./assets/SDCQ6636.JPG'} alt=''/>

      </div>

      <div className='rightMid'> 

        <img className='Image' src={'./assets/VSIV2438.JPG'} alt=''/>
      </div>

      <div className='leftBottom'>  

        <img className='Image' src={'./assets/NJQV8408.JPG'} alt=''/>

      </div>

      <div className='midBottom'> 

        <img className='Image' src={'./assets/WHPM3278.JPG'} alt=''/>


      </div>
      <div className='rightBottom'> 

        <img className='Image' src={'./assets/XDDM5070.JPG'} alt=''/>

      </div>
    </div>
</div>
    


    
); }
}

export default App;
