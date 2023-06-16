import "./recommendation.css";
import AVTR1 from "../../assets/TomSueApp.png";
import AVTR2 from "../../assets/avatar1.jpg";
import AVTR3 from "../../assets/avatar1.jpg";
import AVTR4 from "../../assets/avatar1.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tom Levi",
    review:
      "My name is Tom Lavi and I am proud to offer my recommendation of Joshua Churgin to whom I have personally known. Joshua worked as a full-stack developer intern at my company – SueApp LTD. A legal-tech data-driven smart-application for small claims filing. Joshua focused on building our website from scratch, including form building and responsive design During recent months with Joshua, I have experienced an individual who works hard, and carries himself in a polite, respectable manner. In addition, Joshua is a talented individual with innate capabilities who has always presented himself with level headedness and grace.",
  },
  {
    avatar: AVTR2,
    name: "To be added in future",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    avatar: AVTR3,
    name: "To be added in future",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    avatar: AVTR4,
    name: "To be added in future",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Recommendation = () => {
  return (
    <section id="recommendation">
      <h5>Feedback from Workplaces</h5>
      <h2>Recommendations</h2>

      <Swiper
        className="container recommendation__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="recommendation">
              <div className="reco__avatar">
                <img src={avatar} />
              </div>
              <h5>{name}</h5>
              <small className="reco__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Recommendation;
