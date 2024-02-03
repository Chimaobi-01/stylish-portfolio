import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import './home.scss'


const Home = () => {
    return (
      <section className="home section grid">

        <img src={Profile} alt="" className="home_img" />


        <div className="home_content">

          <div className="home_data">
            <h1>
              <span>I'm Steve Milner.</span> Web Designer
            </h1>
            <p>
            As a new front-end developers at Strikingly we took an onboarding training program, through which there are two tasks and you have to implement ...
            </p>
            <Link to='/about' className='button'>
              more about me
              <span className='button_icon'><FaArrowRight /></span>
            </Link>
          </div>

        </div>

        <div className="color_block"></div>

      </section>
    )
  }
  
  export default Home