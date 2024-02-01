import { personalInfo } from '../../data'

const Info = () => {

  return (
    <>
      {
        personalInfo.map(info =>(
          <li key={info.id}>
            <span>{info.title}</span>
            <span>{info.description}</span>
          </li>
        ))
      }
    </>
  )
}

export default Info