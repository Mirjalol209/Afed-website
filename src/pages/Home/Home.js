import React from "react";
import './index.css'
import Header  from '..//../components/header/Header'
 import {Ri24HoursLine } from "react-icons/ri";
 import {IoDiamondOutline} from "react-icons/io5"
 import {IoMdDoneAll} from "react-icons/io"
 import {TbMountain} from "react-icons/tb"

function Home (){
    return(
        <>
        <Header/>
       <div className="home__banner">
        <div  className="home__banner__title">
            <h1>Fashion passes, style remains.</h1>
      <p>To enter into good society, one must wear a tailcoat, uniform or livery.</p>
            
        </div>
       </div>
       <div className="advantages__section"><div className="advantages__title">
        Our advantages
      </div>
       <div className="advantages__intro">
        
       <div class="answer"> <span><Ri24HoursLine size={'90px'} color={'black'}/></span>
        <h1>Ready to answer all your questions</h1></div>
       <div class="quality"> <IoDiamondOutline size={'90px'} color={'black'}/>
            <h1>We work for quality</h1></div>
      <div class="uniquness"> <IoMdDoneAll size={'90px'} color={'black'}/>
        <h1>The uniqueness of finishing works</h1></div>  
       </div>
       
       </div>
       <div className="goals__section">
        <div className="goals__title">Mission, vision and goals</div>
          <div className="goals__content">
            <div className="goals__card">
              <div className="card__left">
                 <div className="first__card">
                    <TbMountain size={'90px'} />
                      <span>The mission of the Center is to develop a competent strategy for a long time. Our core values ​​are purposefulness, unity, innovation, precision and development.</span>
                  </div>
               
         
      
              <div className="second__card">
              <TbMountain size={'90px'} />
              <span>The Center's strategy is digital technologies - the future of mankind. They contribute to the development of all spheres of human life and the state. Digitalization of data will increase the country's development indicators.</span>
              </div>
              </div>
             <div className="card__right">
               <div className="thrid__card">
               <TbMountain size={'90px'} />
              <span>The vision of the Center is not to stop there and constantly work on self-improvement. The results of successful work inspire us to new ideas and methods for their implementation.</span>
              </div>
              <div className="fourth__card">
              <TbMountain size={'90px'} />
              <span>The Center's strategy is digital technologies - the future of mankind. They contribute to the development of all spheres of human life and the state. Digitalization of data will increase the country's development indicators.</span>
              </div>
             </div>
             
            </div>
          </div>
       </div>
       
        </>
    )
}
export default Home;
