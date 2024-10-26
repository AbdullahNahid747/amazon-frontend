import React from "react";
import "./homeDetails.css";
const HomeDetails = () => {
  return (
    <div className="homeDetails">
      <div className="homeDetailLongCard">
        <div className="homeDetailLongCardTitle">Today's Deals</div>
        <div className="homeDetailLongCardItems">
          <div className="scrollDiv">
            <div className="homeDetailLongCardItem">
              <img
                className="homeDetailLongCardItemImg"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/akull/MSO/Ph3/Samsung-Galaxy-M35-5G._CB545013073_.jpg"
                alt=""
              />
              <div className="homeDetailLongCardItemImgDetail">
                <div className="homeDetailLongCardItemImgTopDetail">
                        <div className="homeDetailPercentageOff">
                        Up to 20% off
                        </div>
                        <div className="limitedTimeDealHomeDetail">
                            Limited Time Deal
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
