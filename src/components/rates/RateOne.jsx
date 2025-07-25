import React from "react";

const rateIcon1 = "/home_2/cs_rate_feature_icon_1.svg";
const rateIcon2 = "/home_2/cs_rate_feature_icon_2.svg";
const rateIcon3 = "/home_2/cs_rate_feature_icon_3.svg";
const rateIcon4 = "/home_2/cs_rate_feature_icon_4.svg";

export const RateOne = () => {
  return (
    <section
      className="td_accent_bg td_rate_section wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.2s"
    >
      <div className="td_rate_heading td_fs_20 td_semibold td_white_color">
        Excellent Rated On Trustpilot
        <div className="td_rating_wrap">
          <div className="td_rating" data-rating="5">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <div className="td_rating_percentage">
              <i className="fa-solid fa-star fa-fw"></i>
              <i className="fa-solid fa-star fa-fw"></i>
              <i className="fa-solid fa-star fa-fw"></i>
              <i className="fa-solid fa-star fa-fw"></i>
              <i className="fa-solid fa-star fa-fw"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="td_rate_feature_list_wrap" style={{ overflowY: "auto" }}>
        <div className="td_moving_box_wrap">
          <div className="td_moving_box_in">
            <div className="td_moving_box">
              <ul className="td_rate_feature_list td_mp_0">
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon1} alt="Online Courses Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      30K+ Online Courses
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Solid Questions Solving & Fresh Topics
                    </p>
                  </div>
                </li>

                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon2} alt="Expert Instructor Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      Expert Instructor
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Learn and More expertise
                    </p>
                  </div>
                </li>

                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon3} alt="Lifetime Access Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      Life time access
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Behind the word mountains
                    </p>
                  </div>
                </li>

                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon4} alt="Certificate Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      Get Certificate
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Behind the word mountains
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="td_moving_box">
              <ul className="td_rate_feature_list td_mp_0">
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon1} alt="Online Courses Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      30K+ Online Courses
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Solid Questions Solving & Fresh Topics
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon2} alt="Expert Instructor Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      Expert Instructor
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Learn and More expertise
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon3} alt="Lifetime Access Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      Life time access
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Behind the word mountains
                    </p>
                  </div>
                </li>
                <li>
                  <div className="td_rate_feature_icon td_center td_white_bg">
                    <img src={rateIcon4} alt="Certificate Icon" />
                  </div>
                  <div className="td_rate_feature_right">
                    <h3 className="td_fs_24 td_semibold td_white_color td_mb_4">
                      Get Certificate
                    </h3>
                    <p className="mb-0 td_white_color td_opacity_7">
                      Behind the word mountains
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
