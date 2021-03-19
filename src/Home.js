import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
              <img className="home_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg" 
              alt="Banner"/>
              <div className="home_row">
                 <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                  price={19.99}
                  image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
                  rating={5}/>
                 <Product title="Pigeon by Stovekraft Basics Aluminium Non-stick Cookware Set, Set of 3 (With one lid), Pink"
                  price={15}
                  image="https://m.media-amazon.com/images/I/61JlllBcGpL._AC_UL320_.jpg"
                  rating={3}/>
               
                 

            
              </div>
              <div className="home_row">
              <Product title="Pigeon by Stovekraft Mini Combi Aluminium Cookware Set, 2-Pieces (2+3 Litres), Silver"
                  price={25}
                  image="https://m.media-amazon.com/images/I/61NNbk6CotL._AC_UL320_.jpg"
                  rating={4}/>
                  <Product title="Butterfly Smart Glass 3 Burner Gas Stove"
                  price={22}
                  image="https://m.media-amazon.com/images/I/51TYBmz4JXL._AC_UL320_.jpg"
                  rating={3}/>
                  <Product title="Pigeon By Stovekraft Favourite Induction Base Aluminium Pressure Cooker with Outer Lid, 3 Litres (Silver)"
                  price={35}
                  image="https://m.media-amazon.com/images/I/61vJ0rmuF+L._AC_UL320_.jpg"
                  rating={4}/>
                  </div>
              <div className="home_row">
              <Product title="Amazon Brand - Solimo Non Stick Tawa (26cm, Induction and Gas Stove Compatible)"
                  price={18}
                  image="https://m.media-amazon.com/images/I/81UHHjFId4L._AC_UL320_.jpg"
                  rating={2}/>
                 
              </div>

            </div>
        </div>
    )
}

export default Home;
