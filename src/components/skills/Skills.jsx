import { skills } from '../../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {

  return (
    <>
      {
        skills.map(skill =>(
          <div key={skill.id} className="progress_box">

            <div className="progress_circle">
              <CircularProgressbar 
                strokeWidth={7.5} 
                text={`${skill.percentage}%`} 
                value={skill.percentage}
                />
            </div>
            <h3>{skill.title}</h3>

          </div>
        ))
      }
    </>
  )
}

export default Skills