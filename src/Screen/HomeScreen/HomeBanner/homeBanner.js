import React from "react";
import "./homeBanner.css";
import homeBannerItemProduct from "../../../homeProduct.json";
const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img
        className="homeBannerImg"
        src="https://m.media-amazon.com/images/I/61Dr+oVuClL._SX3000_.jpg"
        alt=""
      />
      <div className="grayBackGroundBanner">
        <div className="homeBannerItemDiv">
          {homeBannerItemProduct.product.map((item, index) => {
            return (
              <div className="homeBannerItemDivCard">
                <div className="homeBannerItemDivCardTitle">
                  {item.itemTitle}
                </div>
                <div className="imgHomeBannerItemDivCard">
                  {item.imgs.map((it, ind) => {
                    return (
                      <div className="imgBannerHomeDiv">
                        <img
                          className="imgBannerHomeDivImg"
                          src="{it}"
                          alt=""
                        />
                        <div className="imgBannerImgName">
                          Cleaning Supplies
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="seeMoreHomeBanner">See More</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
