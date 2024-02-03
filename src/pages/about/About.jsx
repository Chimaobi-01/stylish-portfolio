import Info from "../../components/info/Info"
import { FaDownload } from "react-icons/fa";
import CV from '../../assets/steve-Cv.pdf'
import Stats from "../../components/stats/Stats";
import Skills from "../../components/skills/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/resumeItem/ResumeItem";
import './about.scss'


const About = () => {
  return (
    <main className="section container about_main">

      <section className="about">

        <h2 className="section_title">About <span>Me</span></h2>

        <div className="about_container grid">

          <div className="about_info">
            <h3>Personal infos</h3>
            <ul className="info_list grid">
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

      <div className="seperator"></div>

      <section className="resume">

        <h3>Experience & education</h3>

        <div className="resume_container grid">
          <div className="resume_data">
            {
              resume.filter(data => data.category === 'experience').map(data => (
                <ResumeItem key={data.id} {...data} />
              ))
            }
          </div>

          <div className="resume_data">
            {
              resume.filter(data => data.category === 'education').map(data => (
                <ResumeItem key={data.id} {...data} />
              ))
            }
          </div>
        </div>

      </section>

    </main>
  )
}

export default About