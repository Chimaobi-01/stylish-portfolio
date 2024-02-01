import Info from "../../components/info/Info"
import { FaDownload } from "react-icons/fa";
import CV from '../../assets/steve-Cv.pdf'
import Stats from "../../components/stats/Stats";
import Skills from "../../components/skills/Skills";


const About = () => {
  return (
    <main className="section container">

      <section className="about">

        <h2 className="section_title">About <span>Me</span></h2>

        <div className="about_container grid">

          <div className="about_info">
            <h3>Personal infos</h3>
            <ul className="grid">
              <Info />
            </ul>
            <a href={CV} download={''} className="button">
              Downlaod CV
              <span className="button_icon"><FaDownload /></span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>

        </div>

      </section>

      <div className="seperator"></div>

      <section className="skills">

        <h3>My Skills</h3>

        <div className="skills_container grid">
          <Skills />
        </div>

      </section>
    </main>
  )
}

export default About