import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

export default function AutoSlider() {
  return (
<Swiper
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000 }}
  loop={true}
  className="testimonial-swiper"
>


      <SwiperSlide>
        <div className="testimonial">
          <p className="testimonial-text">
            "The pearl necklace I wore on my wedding day from Charmant made me
            feel like the most beautiful version of myself. It was the perfect
            touch of elegance, and now it’s a cherished keepsake of my special
            day."
          </p>
          <p className="testimonial-author">Sophia M.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonial">
          <p className="testimonial-text">
            "I was searching for a piece that felt personal and timeless, and
            Charmant delivered beyond my expectations. The Infinity Ring has
            become my everyday staple—it’s elegant, understated, and beautifully
            crafted."
          </p>
          <p className="testimonial-author">Clara J.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonial">
          <p className="testimonial-text">
            "Every time I wear Charmant jewelry, I get compliments. The quality
            and craftsmanship make each piece feel so special."
          </p>
          <p className="testimonial-author">Amelia R.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
