"use client";

import React from "react";
import Link from "next/link";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";
import { HeaderSearch } from "./HeaderSearch";

const callIcon = "/icons/call.svg";
const envelopeIcon = "/icons/envlop.svg";
const menuSquareIcon = "/icons/menu-square.svg";
const loveIcon = "/icons/love.svg";
const cartIcon = "/icons/cart.svg";

export const HeaderNine = () => {
  useMobilemenu();
  useStickyHeader();

  return (
    <header className="td_site_header td_style_1 td_type_2 td_sticky_header td_medium td_heading_color">
      <div className="td_top_header td_heading_bg td_white_color">
        <div className="container">
          <div className="td_top_header_in">
            <div className="td_top_header_left">
              <ul className="td_header_contact_list td_mp_0 td_normal">
                <li>
                  <img src={callIcon} alt="call icon" />
                  <span>
                    Call: <a href="tel:99066789768">990 66789 768</a>
                  </span>
                </li>
                <li>
                  <img src={envelopeIcon} alt="envelope icon" />
                  <span>
                    Email:{" "}
                    <a href="mailto:support@educat.com">support@educat.com</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="td_top_header_right">
              <span>
                <Link href="/signin" className="">
                  Login
                </Link>
                /
                <Link href="/signup" className="">
                  Register
                </Link>
              </span>
              <a href="#" className="td_btn td_style_1 td_medium">
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Apply Now</span>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1575 4.34302L3.84375 15.6567"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="td_main_header">
        <div className="container">
          <div className="td_main_header_in">
            <div className="td_main_header_left">
              <Link className="td_site_branding td_accent_color" href="/">
                <svg
                  width="142"
                  height="50"
                  viewBox="0 0 142 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.896 34V16.96H70.504V20.272H63.376V23.776H69.064V27.088H63.376V30.688H70.504V34H59.896ZM77.6982 34.264C76.1142 34.264 74.7782 33.648 73.6902 32.416C72.6022 31.184 72.0582 29.712 72.0582 28C72.0582 26.288 72.6022 24.816 73.6902 23.584C74.7782 22.352 76.1142 21.736 77.6982 21.736C78.4662 21.736 79.1542 21.896 79.7622 22.216C80.3702 22.536 80.8342 22.912 81.1542 23.344V16H84.4422V34H81.1542V32.656C80.8342 33.088 80.3702 33.464 79.7622 33.784C79.1542 34.104 78.4662 34.264 77.6982 34.264ZM76.1862 30.352C76.7462 30.96 77.4822 31.264 78.3942 31.264C79.3062 31.264 80.0342 30.96 80.5782 30.352C81.1382 29.744 81.4182 28.96 81.4182 28C81.4182 27.04 81.1382 26.256 80.5782 25.648C80.0342 25.04 79.3062 24.736 78.3942 24.736C77.4822 24.736 76.7462 25.04 76.1862 25.648C75.6422 26.256 75.3702 27.04 75.3702 28C75.3702 28.96 75.6422 29.744 76.1862 30.352ZM92.0067 34.264C90.5827 34.264 89.4707 33.784 88.6707 32.824C87.8867 31.864 87.4947 30.576 87.4947 28.96V22H90.7827V28.408C90.7827 30.312 91.4627 31.264 92.8227 31.264C93.5907 31.264 94.1907 30.976 94.6227 30.4C95.0707 29.824 95.2947 28.976 95.2947 27.856V22H98.5827V34H95.2947V32.632C94.5587 33.72 93.4627 34.264 92.0067 34.264ZM107.292 34.264C105.484 34.264 103.98 33.664 102.78 32.464C101.58 31.248 100.98 29.76 100.98 28C100.98 26.24 101.58 24.76 102.78 23.56C103.98 22.344 105.484 21.736 107.292 21.736C108.892 21.736 110.228 22.184 111.3 23.08C112.388 23.976 113.1 25.144 113.436 26.584H110.028C109.5 25.336 108.588 24.712 107.292 24.712C106.412 24.712 105.692 25.016 105.132 25.624C104.572 26.216 104.292 27.008 104.292 28C104.292 28.992 104.572 29.792 105.132 30.4C105.692 30.992 106.412 31.288 107.292 31.288C108.588 31.288 109.5 30.664 110.028 29.416H113.436C113.1 30.856 112.388 32.024 111.3 32.92C110.228 33.816 108.892 34.264 107.292 34.264ZM119.156 34L113.852 22H117.476L120.644 29.68L123.812 22H127.484L122.156 34H119.156ZM134.245 34.264C132.405 34.264 130.893 33.672 129.709 32.488C128.541 31.304 127.957 29.8 127.957 27.976C127.957 26.184 128.549 24.696 129.733 23.512C130.933 22.328 132.445 21.736 134.269 21.736C136.109 21.736 137.637 22.368 138.853 23.632C140.069 24.88 140.629 26.592 140.533 28.768H131.173C131.237 29.52 131.549 30.152 132.109 30.664C132.669 31.16 133.437 31.408 134.413 31.408C135.005 31.408 135.525 31.296 135.973 31.072C136.437 30.832 136.765 30.504 136.957 30.088H140.389C140.037 31.32 139.301 32.328 138.181 33.112C137.061 33.88 135.749 34.264 134.245 34.264ZM134.173 24.4C133.421 24.4 132.789 24.6 132.277 25C131.781 25.384 131.453 25.92 131.293 26.608H136.933C136.757 25.856 136.405 25.304 135.877 24.952C135.365 24.584 134.797 24.4 134.173 24.4Z"
                    fill="#00001B"
                  />
                  <circle cx="25" cy="25" r="25" fill="currentColor" />
                  <g clipath="url(#clip0_34_14899)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.6915 23.9346C18.2982 25.1384 18.9033 26.3434 19.4831 27.5603L20.7868 30.2966C19.6372 30.3352 18.4865 30.3446 17.3384 30.4123C16.9003 30.4381 16.4646 30.5029 16.032 30.5769C15.4137 30.6826 14.7728 30.8545 14.1811 31.0978C13.4088 31.4153 12.3426 32.1172 12.3651 33.0869C12.3836 34.0387 13.0616 34.718 13.7151 35.3261C14.2917 35.8627 15.129 36.237 15.8399 36.5878C17.2978 37.3071 18.8228 37.9189 20.345 38.4872C21.3987 38.8805 22.4564 39.1839 23.557 39.4161C24.0709 39.5246 24.8905 39.5507 25.1519 38.9685C25.3414 38.5422 25.1901 38.0676 25.0213 37.6621C24.8056 37.1442 24.5748 36.6309 24.3443 36.1193L23.3983 34.019C24.8537 34.0449 26.3091 34.0903 27.7648 34.0967C28.9242 34.1021 30.0706 34.0357 31.2184 33.8702C32.2961 33.7147 33.5785 33.2606 34.1405 32.2531C34.8037 31.0644 34.1516 29.5566 33.5154 28.5002C33.2227 28.0142 32.9679 27.5031 32.6372 27.0422L30.409 23.9364C30.8045 23.3755 31.2169 22.8258 31.5959 22.2532C32.1584 21.4035 32.7113 20.5467 33.2326 19.6709C33.5952 19.0613 33.9323 18.4358 34.246 17.7997C34.8447 16.5863 35.8595 14.5917 34.6211 13.4251C33.8654 12.7133 32.6785 12.6594 31.7023 12.7973C30.6783 12.942 29.6564 13.1058 28.6391 13.2918C25.9819 13.7779 23.3159 14.6562 20.7236 15.4506C19.7968 15.7346 18.8928 16.0886 17.9834 16.4235C17.371 16.649 16.7688 16.9717 16.1864 17.2853C15.8381 17.4728 15.4914 17.7387 15.2819 18.0797C15.1573 18.2824 15.197 18.5797 15.239 18.8016C15.3211 19.2346 15.5045 19.6413 15.6866 20.0395L17.6915 23.9346ZM26.7116 17.0955C27.6632 16.9126 28.6153 16.7319 29.5699 16.5654C29.8718 16.5128 30.6256 16.3337 30.7984 16.6955C31.0405 17.203 30.3779 18.0664 30.1456 18.4899C29.9469 18.8522 29.7362 19.208 29.5303 19.5661L28.4345 21.4736L26.7637 19.6085L25.1187 17.9898L24.6924 17.6376L24.5487 17.5302C25.2696 17.3853 25.9894 17.2342 26.7116 17.0955ZM23.7236 18.6969C23.7428 18.6953 23.7613 18.7135 23.773 18.7275L23.8285 18.7967C23.9337 18.9536 24.0295 19.1142 24.1286 19.2748C24.5714 19.9926 25.0138 20.7108 25.4571 21.4282C25.7507 21.9035 26.0458 22.378 26.3394 22.8535L26.9193 23.7933L26.9697 23.8784C26.5516 24.5661 26.144 25.2603 25.7153 25.9414C25.3806 26.4734 25.0294 26.9952 24.6799 27.5176C24.5293 27.742 24.2884 28.0566 23.9799 28.0188C23.3831 27.9455 23.1885 27.0109 23.1224 26.5346C23.087 26.2795 23.0553 26.0234 23.0371 25.7664C23.0041 25.3024 22.9577 24.8374 22.9689 24.3723C22.9845 23.7316 22.9884 23.0906 23.0154 22.4503C23.0316 22.0677 23.0422 21.6832 23.0984 21.3044C23.1759 20.7816 23.2533 20.2587 23.3308 19.7359C23.3638 19.5134 23.4343 19.2967 23.5007 19.0821C23.5358 18.9894 23.5737 18.9 23.6168 18.8107C23.6168 18.8107 23.673 18.7013 23.7236 18.6969ZM22.852 34.9373C23.154 35.6715 23.4694 36.4216 23.6726 37.1983C23.6987 37.298 23.7175 37.3998 23.731 37.5019C23.742 37.5856 23.7434 37.6705 23.7461 37.7548C23.7473 37.7779 23.7138 37.801 23.6935 37.8038C23.6516 37.8094 23.6096 37.7856 23.5751 37.7646C22.6892 37.2343 21.8064 36.6983 20.9187 36.1712L17.45 34.1121L17.3431 34.0457L17.4261 34.0284L17.7619 33.9915C18.4115 33.975 19.0608 33.9298 19.7104 33.9416L22.4617 33.9917C22.5919 34.3069 22.7223 34.6219 22.852 34.9373ZM29.9463 30.2515C29.8074 30.3733 29.5867 30.4057 29.4098 30.4284C29.1844 30.4571 28.9579 30.4899 28.7307 30.4905C27.9469 30.4922 27.1629 30.507 26.3793 30.4955C25.8394 30.4877 25.2999 30.4561 24.7607 30.4326L21.623 30.2968C21.441 29.906 21.2591 29.5149 21.0766 29.1244L18.7424 24.1318C18.2316 22.9813 17.7089 21.8359 17.2101 20.6802C17.1162 20.4624 17.0433 20.2359 16.9649 20.0121C16.8864 19.7879 16.778 19.4809 16.8955 19.25C16.9985 19.0508 17.2415 18.9639 17.4424 18.9013C17.5459 18.869 17.6518 18.8435 17.7586 18.8235C18.6303 18.6596 19.5046 18.509 20.3772 18.3493L22.7308 17.9184L22.637 18.1895L22.5239 18.7034L22.5181 18.7358C22.4377 19.6185 22.3259 20.4986 22.2768 21.3834C22.2204 22.4003 22.2103 23.4196 22.2014 24.4379C22.1973 24.9151 22.208 25.393 22.2375 25.8692C22.2634 26.2839 22.2995 26.6996 22.3676 27.1095C22.4273 27.4702 22.5192 27.8257 22.6205 28.1771C22.7706 28.6982 23.0519 29.2125 23.502 29.5319C23.6568 29.6418 23.8327 29.723 24.0181 29.7645C24.6048 29.8962 25.2249 29.5999 25.6842 29.2579C26.1714 28.8951 26.6961 28.4813 27.1045 28.0136L28.4841 26.4332C28.7557 26.9069 29.0488 27.3692 29.299 27.8546C29.5435 28.3286 29.7491 28.822 29.9668 29.3091C30.0777 29.5572 30.1854 29.9613 29.9936 30.2019C29.9794 30.2199 29.9635 30.2363 29.9463 30.2515Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_14899">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(21.2891 4) rotate(35.1898)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <div className="td_header_category_wrap position-relative">
                <button className="td_header_dropdown_btn td_medium td_heading_color">
                  <img
                    src={menuSquareIcon}
                    alt="menu icon"
                    className="td_header_dropdown_btn_icon"
                  />
                  <span>All Category</span>
                  <span className="td_header_dropdown_btn_tobble_icon td_center">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 4.99997C9 4.99997 6.05404 1.00001 4.99997 1C3.94589 0.999991 1 5 1 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <ul className="td_header_dropdown_list td_mp_0">
                  <li>
                    <Link href="/courses-grid-view">Data Science</Link>
                  </li>
                  <li>
                    <Link href="/courses-grid-view">Design</Link>
                  </li>
                  <li>
                    <Link href="/courses-grid-with-sidebar">Development</Link>
                  </li>
                  <li>
                    <Link href="/courses-grid-view">Architecture</Link>
                  </li>
                  <li>
                    <Link href="/courses-grid-with-sidebar">Life Style</Link>
                  </li>
                  <li>
                    <Link href="/courses-grid-with-sidebar">Marketing</Link>
                  </li>
                  <li>
                    <Link href="/courses-grid-with-sidebar">Photography</Link>
                  </li>
                  <li>
                    <Link href="/courses-grid-with-sidebar">Motivation</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="td_main_header_right">
              <nav className="td_nav">
                <div className="td_nav_list_wrap">
                  <div className="td_nav_list_wrap_in">
                    <ul className="td_nav_list">
                      <li className="menu-item-has-children">
                        <Link href="/">Home</Link>
                        <ul>
                          <li>
                            <Link href="/">University</Link>
                          </li>
                          <li>
                            <Link href="/home-v2">Online Educations</Link>
                          </li>
                          <li>
                            <Link href="/home-v3">Education</Link>
                          </li>
                          <li>
                            <Link href="/home-v4">Kindergarten</Link>
                          </li>
                          <li>
                            <Link href="/home-v5">Modern Language</Link>
                          </li>
                          <li>
                            <Link href="/home-v6">Al-Quran Learning</Link>
                          </li>
                          <li>
                            <Link href="/home-v7">Motivation Speaker</Link>
                          </li>
                          <li>
                            <Link href="/home-v8">Kitchen Coach</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Courses</Link>
                        <ul>
                          <li>
                            <Link href="/courses-grid-view">
                              Courses Grid View
                            </Link>
                          </li>
                          <li>
                            <Link href="/courses-list-view">
                              Courses List View
                            </Link>
                          </li>
                          <li>
                            <Link href="/courses-grid-with-sidebar">
                              Courses Grid With Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link href="/course-details">Course Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li className="menu-item-has-children td_mega_menu">
                        <Link href="#">Pages</Link>
                        <ul className="td_mega_wrapper">
                          <li className="menu-item-has-children">
                            <h4>Inner Pages</h4>
                            <ul>
                              <li>
                                <Link href="/event">Upcoming Event</Link>
                              </li>
                              <li>
                                <Link href="/event/ev-123">Event Details</Link>
                              </li>
                              <li>
                                <Link href="/team-members">Team Members</Link>
                              </li>
                              <li>
                                <Link href="/team-members/t-123">
                                  Team Details
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <h4>Inner Pages</h4>
                            <ul>
                              <li>
                                <Link href="/students-registrations">
                                  Students Registrations
                                </Link>
                              </li>
                              <li>
                                <Link href="/instructor-registrations">
                                  Instructor Registrations
                                </Link>
                              </li>
                              <li>
                                <Link href="/signup">Signup</Link>
                              </li>
                              <li>
                                <Link href="/signin">Signin</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <h4>Shop Pages</h4>
                            <ul>
                              <li>
                                <Link href="/faqs">Faqs</Link>
                              </li>
                              <li>
                                <Link href="/cart">Cart</Link>
                              </li>
                              <li>
                                <Link href="/checkout">Checkout</Link>
                              </li>
                              <li>
                                <Link href="/error">Error</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Blogs</Link>
                        <ul>
                          <li>
                            <Link href="/blog">Blogs</Link>
                          </li>
                          <li>
                            <Link href="/blog/with-sidebar">
                              Blog With Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog/b-123">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="td_hero_icon_btns position-relative">
                <div className="position-relative">
                  <HeaderSearch />
                </div>
                <button
                  className="td_circle_btn td_center td_wishlist_btn"
                  type="button"
                >
                  <img src={loveIcon} alt="wishlist icon" />
                  <span className="td_circle_btn_label">0</span>
                </button>
                <button className="td_circle_btn td_center" type="button">
                  <img src={cartIcon} alt="cart icon" />
                  <span className="td_circle_btn_label">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
