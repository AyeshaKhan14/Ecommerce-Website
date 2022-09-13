import {FaYoutube, FaFacebook, FaTwitter, FaGoogle, FaGooglePlay,FaLinkedin} from "react-icons/fa"
import footerStyle from "./Footer.module.css"


const Footer=()=>{

    return (
        <div>
          <div className={footerStyle.part1}>
          <div className={footerStyle.fontSize} >
            <FaYoutube className={footerStyle.youtube}/>
            < FaFacebook className={footerStyle.fb} />
            <FaTwitter className={footerStyle.twitter}/>
            <FaGoogle className={footerStyle.gogle} />
            <FaGooglePlay className={footerStyle.play} />
            <FaLinkedin className={footerStyle.like} />
          </div>

          </div>
          

         <div className={footerStyle.newbox}>
         <div className={footerStyle.part2}>
              <div className={footerStyle.box1} >
                <div>
                    <h3>DOOGEE</h3>
                </div>
                <div>
                    <p>Teardown</p>
                    <p>News</p>
                    <p>Partners</p>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Terms of use</p>
                </div>
              </div>


              <div className={footerStyle.box2}>
              <div>
                    <h3>Social</h3>
                </div>
                <div className={footerStyle.paraP}>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                    
               
              </div>
              </div>

              <div className={footerStyle.box3}> 
              <div>
                    <h3>Service</h3>
                </div>
                <div className={footerStyle.paraP}>
                    <p>Compare</p>
                    <p>Download</p>
                    <p>Feedback</p>
                    <p>Bug Report</p>
                    
                </div>
              </div>


              <div className={footerStyle.box4}> 
              <div>
                    <h3>Activity</h3>
                </div>
                <div className={footerStyle.paraP}>
                    <p>Influencer</p>
                    <p>Afflialate</p>
                    <p>Honor</p>
                    <p>Giveaway</p>
                    
                </div >
              </div>


              <div className={footerStyle.box5}>  
              <div>
                <h3>Newsletter Subscription</h3>
              </div>
              <div className={footerStyle.boxInput} >
                <input placeholder="Subscribe our Newsletter" />
                <button className={footerStyle.Subs}>Subscribe</button>
              </div>
             
              </div>


     
          </div>

            <div className={footerStyle.copyryt}>
             <span>Copyright@ 2018 DOOGEE.All rights reserved.</span>
            </div>
         </div>


      

        </div>
    )

}

export default Footer;