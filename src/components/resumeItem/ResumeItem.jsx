import parse from 'html-react-parser'


const ResumeItem = (props) => {

  return (
    <div className="resume_item">
      <div className="resume_icon">{props.icon}</div>
      <span className="resume_date">{props.year}</span>
      <h4>{parse(props.title)}</h4>
      <p>{props.desc}</p>
    </div>
  )
}

export default ResumeItem