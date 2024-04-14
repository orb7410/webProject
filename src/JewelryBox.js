
import './JewelryBox.css';
import { Link } from 'react-router-dom';

const JewelryBox = ({ id, imgSrc, txt }) => {
    return (
        <div className="product-box-container">
            <Link to={`/jewelry-details/${id}`}>
                <img src={imgSrc} className="product-img" alt="Jewelry" />
            </Link>
            <p className="product-text">{txt}</p>
            {/* <p>ID: {id}</p> */}
        </div>
    );
}

export default JewelryBox;
