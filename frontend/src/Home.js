import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className="home_image" src="getItLogo.jpg" />

                <div className="home_row">
                    <Product title="Harry Potter"
                             id="10"
                             image={"https://m.media-amazon.com/images/I/31XHfHGmg7L._AC_UL480_QL65_.jpg"} 
                             price={30}
                             rating={5}
                             />
                    <Product title="Harry Potter"
                             id="11"
                             image={"https://m.media-amazon.com/images/I/71DMbuDZUWL._AC_UL480_QL65_.jpg"} 
                             price={30}
                             rating={5}
                             />
 

                </div>
                <div className="home_row">
                     <Product title="Harry Potter"
                             id="12"
                             image={"https://m.media-amazon.com/images/I/71xAZv3lBPL._AC_UL480_QL65_.jpg"} 
                             price={30}
                             rating={5}
                             />
                      <Product title="Harry Potter"
                             id="13"
                             image={"https://m.media-amazon.com/images/I/81dUrXTsJ+L._AC_UL480_QL65_.jpg"} 
                             price={30}
                             rating={5}
                             />
                    <Product title="Harry Potter"
                             id="14"
                             image={"https://m.media-amazon.com/images/I/618OGz61vwL._AC_UL480_QL65_.jpg"} 
                             price={30}
                             rating={5}
                             />
 

                </div>
                <div className="home_row">
                     <Product title="Harry Potter"
                             id="15"
                             image={"https://m.media-amazon.com/images/I/51pt7rpfMCL._AC_UL480_QL65_.jpg"} 
                             price={30}
                             rating={5}
                             />
                      <Product title="Harry Potter"
                             id="16"
                             image={"https://m.media-amazon.com/images/I/51g6S2XoAcL._AC_UL480_QL65_.jpg"} 
                             price={30}
                             rating={5}
                             />
                       <Product title="Harry Potter"
                             id="17"
                             image={"https://m.media-amazon.com/images/I/81MYrAd+RxL._AC_UL480_QL65_.jpg"} 
                             price={30}
                             rating={5}
                             />

                </div>
            </div>
            
        </div>
    )
}

export default Home
