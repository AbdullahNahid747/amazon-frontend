import React from 'react';
import './navbarBelt.css';
import amazonLogo from  '../../../Assets/Amazon-Emblem.jpg';
import flag from '../../../Assets/Flag_of_Bangladesh.svg.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const NavbarBelt = () => {
    return (
        <div className='navbarBelt'>
            <div className='leftNavBelt'>
                <div className='leftNavBeltLogo'>
                    <img className='amazonLogoNavbar' src={amazonLogo} alt='Amazon Logo' />
                    <span className='navbar_inLogo'>.in</span>
                </div>

                <div className='navbarBeltLocation'>
                    <div className='navbarBeltLocationImg'>
                        <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{ fontSize: '24px' }} />
                    </div>

                    <div className= "navbarBeltLocationPlace">  
                        <div className= "navbarBeltLocationTop">Delivering to</div>  
                        <div className= "navbarBeltLocationBottom">Update Location</div>  
                    </div>
                </div>
            </div>

            <div className='navbarBeltSearchBox'>
                <div className='navbarBeltSearchDiv'>
                    <div className='navbarBellSearchBoxAll'>
                        <div className='navbarBeltSearchBoxAllText'>
                            All
                        </div>
                        <ArrowDropDownOutlinedIcon sx={{ frontSize:"20px"}} />
                    </div>

                    <input type="text" className="navbarBeltInputSearchBox" placeholder="Search Amazon.in" />

                    <div className="searchIconNavbarBell">  
                        <SearchOutlinedIcon sx={{fontSize:"26px"}} className="searchIconNavbarBellIcon" />  
                    </div>

                </div>
            </div>

            <div className='rightSideNavbarBelt'>
                <div className='bdFlagCode'>
                    <img className='bdFlag' src={flag} alt='Flag of Bangladesh' />
                    <div className='bdCodeNavbarBelt'>
                        EN
                        <ArrowDropDownOutlinedIcon sx={{fontSize:16,marinLeft:1,marginLeft:-0.4}} className='bdCodeNavbarBeltDrp' />
                    </div>
                </div>

                <div className="helloSignInNavbarBelt">  
                    <div className="helloTopNavbarBelt">Hello, User</div>  
                    <div className="indiaCodeNavbarBelt">Accounts & Lists</div>  
                </div>

                <div className="helloSignInNavbarBelt">  
                    <div className="helloTopNavbarBelt">Return</div>  
                    <div className="indiaCodeNavbarBelt">& Order</div>  
                </div>

                <div className="helloSignInNavbarBelt">  
                    <span className="cartItemNumberNavbarBelt">2</span>    
                    <div className="helloTopNavbarBelt"> <ShoppingCartOutlinedIcon />
                        <span className="cartTitle">Cart</span>
                    </div>  
                </div>

            </div>
        </div>
    );
}

export default NavbarBelt;
