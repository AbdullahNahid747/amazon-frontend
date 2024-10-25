import React from 'react';
import './navbarBanner.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const NavbarBanner = () => {
    const options = [
        {"name": "Fresh"},
        {"name": "Amazon miniT"},
        {"name": "Sell"},
        {"name": "Best Sellers"},
        {"name": "Today's Deals"},
        {"name": "Mobile"},
        {"name": "Electronics"},
        {"name": "Prime"},
        {"name": "Customer Service"},
        {"name": "Fashion"},
        {"name": "Home & Kitchen"}
    ]
    return (
        <div className="navbarBanner">
            <div className="navbarBannerOptionsLeft">
                <div className='optionsNavbarBanner'>
                    <MenuOutlinedIcon sx={{ fontSize: "24px"}} />
                    <div className='allOptionsNavbarBanner'> 
                        All
                    </div>
                </div>

                {
                    options.map((item,ind) => {
                        return (
                            <div className='optionsNavbarBanner' key={ind} >
                                <div className='allOptionsNavbarBanner'> 
                                    {item.name}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default NavbarBanner;
