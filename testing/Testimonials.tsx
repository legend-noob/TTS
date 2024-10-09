import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Testimonials.css';

const testimonialsData = [
  { name: "John Fang", text: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla." },

];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p>{testimonial.text}</p>
              <h4>{testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
