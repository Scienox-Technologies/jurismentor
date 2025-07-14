"use client";

import React from "react";
import { useTabs } from "../../lib/hooks/useTabs";
import { CoursesOneItem } from "./CoursesOneItem";

const courseThumb1 = "/home_1/course1.png";
const courseThumb2 = "/home_1/course2.png";
const courseThumb3 = "/home_1/course3.png";
// const courseThumb4 = "/home_1/course_thumb_4.jpg";
// const courseThumb5 = "/home_1/course_thumb_5.jpg";
// const courseThumb6 = "/home_1/course_thumb_6.jpg";

export const CoursesOne = () => {
  useTabs();

  return (
    <section className="td_gray_bg_3">
      <div className="td_height_112 td_height_lg_75" id="course" />

      <div className="container">
        {/* header */}
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.15s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
           Our Top Courses
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">Academic Courses</h2>
        </div>
        <div className="td_height_30 td_height_lg_30" />

        {/* tabs */}
        <div className="td_tabs">
          <ul
            className="td_tab_links td_style_1 td_mp_0 td_fs_20 td_medium td_heading_color wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <li className="active">
              <a href="#tab_1">Certificate</a>
            </li>
          </ul>
          <div className="td_height_50 td_height_lg_50" />

          <div className="td_tab_body">
            <div className="td_tab active" id="tab_1">
              <div className="row td_gap_y_24">
                {coursesUndergrad.map((course, idx) => (
                  <div
                    key={idx}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    <CoursesOneItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            <div className="td_tab" id="tab_2">
              <div className="row td_gap_y_24">
                {coursesGraduate.map((course, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <CoursesOneItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            <div className="td_tab" id="tab_3">
              <div className="row td_gap_y_24">
                {coursesOnline.map((course, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <CoursesOneItem {...course} />
                  </div>
                ))}
              </div>
            </div>

            <div className="td_tab" id="tab_4">
              <div className="row td_gap_y_24">
                {coursesShort.map((course, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <CoursesOneItem {...course} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

const coursesUndergrad = [
  {
    src: courseThumb1,
    seats: 150,
    semesters: 12,
    subtitle: "Certificate Course",
    title: "Certificate Course in Sports Law",
    description:
      "Learn about athlete rights, dispute resolution, and governance.",
    totalRatings: 5,
    delay: "0.2s",
  },
  {
    src: courseThumb2,
    seats: 100,
    semesters: 20,
    subtitle: "Diploma Course",
    title: "Diploma in Space Law & Satellite Regulation",
    description: "India’s first practice-focused course on outer space law.",
    totalRatings: 10,
    delay: "0.25s",
  },
  {
    src: courseThumb3,
    seats: 300,
    semesters: 8,
    subtitle: "Diploma Course",
    title: "Diploma in Drafting & Legal Writing",
    description:
      "Master legal drafting and writing skills for legal professionals.",
    totalRatings: 12,
    delay: "0.3s",
  },
];

const coursesGraduate = [
  {
    src: courseThumb1,
    seats: 150,
    semesters: 12,
    subtitle: "Certificate Course",
    title: "Certificate Course in Sports Law",
    description:
      "Learn about athlete rights, dispute resolution, and governance.",
    totalRatings: 5,
    delay: "0.2s",
  },
  {
    src: courseThumb2,
    seats: 100,
    semesters: 20,
    subtitle: "Certificate Course",
    title: "Certificate in Space Law & Satellite Regulation",
    description: "India’s first practice-focused course on outer space law.",
    totalRatings: 10,
    delay: "0.25s",
  },
  {
    src: courseThumb3,
    seats: 300,
    semesters: 8,
    subtitle: "Certificate Course",
    title: "Certificate in Drafting & Legal Writing",
    description:
      "Master legal drafting and writing skills for legal professionals.",
    totalRatings: 12,
    delay: "0.3s",
  },
];

const coursesOnline = [
  {
    src: courseThumb1,
    seats: 150,
    semesters: 12,
    subtitle: "Certificate Course",
    title: "Certificate Course in Sports Law",
    description:
      "Learn about athlete rights, dispute resolution, and governance.",
    totalRatings: 5,
    delay: "0.2s",
  },
  {
    src: courseThumb2,
    seats: 100,
    semesters: 20,
    subtitle: "Diploma Course",
    title: "Diploma in Space Law & Satellite Regulation",
    description: "India’s first practice-focused course on outer space law.",
    totalRatings: 10,
    delay: "0.25s",
  },
  {
    src: courseThumb3,
    seats: 300,
    semesters: 8,
    subtitle: "Diploma Course",
    title: "Diploma in Drafting & Legal Writing",
    description:
      "Master legal drafting and writing skills for legal professionals.",
    totalRatings: 12,
    delay: "0.3s",
  },
];

const coursesShort = [
  {
    src: courseThumb1,
    seats: 150,
    semesters: 12,
    subtitle: "Certificate Course",
    title: "Certificate Course in Sports Law",
    description:
      "Learn about athlete rights, dispute resolution, and governance.",
    totalRatings: 5,
    delay: "0.2s",
  },
  {
    src: courseThumb2,
    seats: 100,
    semesters: 20,
    subtitle: "Diploma Course",
    title: "Diploma in Space Law & Satellite Regulation",
    description: "India’s first practice-focused course on outer space law.",
    totalRatings: 10,
    delay: "0.25s",
  },
  {
    src: courseThumb3,
    seats: 300,
    semesters: 8,
    subtitle: "Diploma Course",
    title: "Diploma in Drafting & Legal Writing",
    description:
      "Master legal drafting and writing skills for legal professionals.",
    totalRatings: 12,
    delay: "0.3s",
  },
];
