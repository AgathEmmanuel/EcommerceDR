import React from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import './Header.css'
import { ShoppingBasketRounded } from '@material-ui/icons';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to="/">
            <img className="header_logo" src="getItLogo.jpg" />
            </Link>
            

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchRoundedIcon className="header_searchIcon" />

            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>

                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns &</span>
                    <span className="header_optionLineTwo">Orders</span>

                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Find</span>
                    <span className="header_optionLineTwo">More</span>

                </div>
                <Link to="/checkout" >
                    <div className="header_optionBasket">
                    <ShoppingBasketRounded />
                    <span className="header_optionLineTwo header_basketCount">0</span>
                    </div>
               
                </Link>

            </div>

            
        </div>
    )
}

export default Header
