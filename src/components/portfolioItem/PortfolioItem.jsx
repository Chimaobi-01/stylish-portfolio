import { useState } from 'react'
import close from '../../assets/close.svg'


const PortfolioItem = ({ img, title, details }) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className="portfolio_item">
            <img src={img} alt="" className='portfolio_img' />

            <div className="portfolio_hover" onClick={toggleModal}>
                <h3>{title}</h3>
            </div>

            {modal && (
                <div className="portfolio_modal">
                    <div className="portfolio_modal-content">
                        <img src={close} alt="" className='modal_close' onClick={toggleModal} />

                        <h3>{title}</h3>

                        <ul className="grid">
                            {
                                details.map(({ icon, title, desc }, index) => (
                                    <li key={index}>
                                        <span className="item_icon">{icon}</span>

                                        <div>
                                            <span className="item_title">{title}</span>
                                            <span className="item_details">{desc}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>

                        <img src={img} alt="" className="modal_img" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default PortfolioItem