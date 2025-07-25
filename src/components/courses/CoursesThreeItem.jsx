import React from "react";
import Link from "next/link";

const calendarIcon = "/icons/calendar_2.svg";
const userIcon = "/icons/user_3.svg";
const bookIcon = "/icons/book.svg";

export const CoursesThreeItem = ({
  src,
  weeks,
  seats,
  semesters,
  title,
  totalRatings,
  price,
  author,
}) => {
  return (
    <div className="td_card td_style_5">
      <Link href="/course-details" className="td_card_thumb">
        <span className="td_card_thumb_in td_radius_10">
          <img src={src} alt="Course thumbnail" />

          <span className="td_card_label td_fs_14 td_white_color td_accent_bg">
            <img src={calendarIcon} alt="Calendar icon" />
            {weeks} Weeks
          </span>
        </span>
      </Link>

      <div className="td_card_content">
        <ul className="td_card_meta td_mp_0 td_fs_16 td_heading_color">
          <li>
            <img src={userIcon} alt="User icon" />
            <span className="td_opacity_7">{seats} Seats</span>
          </li>
          <li>
            <img src={bookIcon} alt="Book icon" />
            <span className="td_opacity_7">{semesters} Semesters</span>
          </li>
        </ul>

        <h2 className="td_card_title td_fs_24 td_semibold td_mb_12">
          <Link href="/course-details">{title}</Link>
        </h2>
        <div className="td_card_price_wrap td_mb_12">
          <div className="td_card_review">
            <div className="td_rating" data-rating="4.5">
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

            <span className="td_heading_color td_opacity_5 td_fs_14">
              (5.0/{totalRatings} Ratings)
            </span>
          </div>

          <span className="td_card_price td_accent_bg td_white_color td_fs_18 td_medium">
            ${price}
          </span>
        </div>

        <div className="td_card_btns_wrap">
          <Link
            href="/blog/b-123"
            className="td_btn td_style_1 td_type_3 td_radius_30 td_medium td_fs_14"
          >
            <span className="td_btn_in td_accent_color">
              <span>Enroll Now</span>
            </span>
          </Link>

          <span className="td_fs_18 td_medium td_heading_color">{author}</span>
        </div>
      </div>
    </div>
  );
};
