import earring from './assets/earring.jpeg'
import './JewelryBox.css';

const JewelryBox = () => {
    return(
        <div class="product-box-container">
            <img src={earring} className="product-img" />
            <p className="product-text"> JewelryBox </p>

        </div>
        
    );


    
}

export default JewelryBox;