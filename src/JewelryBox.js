
import './JewelryBox.css';

const JewelryBox = ({ id, imgSrc, txt }) => {
    return (
        <div className="product-box-container">
            <img src={imgSrc} className="product-img" alt="Jewelry" />
            <p className="product-text">{txt}</p>
            {/* <p>ID: {id}</p> */}
        </div>
    );
}

export default JewelryBox;
