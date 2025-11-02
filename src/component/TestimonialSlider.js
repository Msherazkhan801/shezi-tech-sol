// src/components/TestimonialSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Image1 from '../assets/images/testi-2.jpg';


const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Full Stack Developer",
    image: Image1,
    text: "The coding mentorship and hands-on projects helped me land a developer position. The structure and guidance were perfect for strengthening both frontend and backend skills.",
  },
  {
    name: "Sara Lee",
    role: "Computer Science Student",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    text: "Thanks to the focused curriculum and great instructors, I scored 87% in my final semester. The support I received was outstanding!",
  },
  {
    name: "Mohammed Ali",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    text: "I improved my JavaScript and React skills significantly. Now I’m building scalable applications confidently. This program truly elevated my career.",
  },
  {
    name: "Priya Sharma",
    role: "B.Tech Student (CSE)",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    text: "The study resources and mock exams helped me achieve 84% marks. I’ve never felt more motivated to continue learning and improving.",
  },
  {
    name: "Jessica Brown",
    role: "SEO Specialist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    text: "After applying the SEO strategies I learned here, my client websites ranked in the top 3 positions on Google within months. Highly recommended for digital marketers!",
  },
  {
    name: "David Carter",
    role: "Digital Marketing Expert",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80",
    text: "The SEO insights and tools provided were practical and effective. I’ve seen a 60% boost in organic traffic across my managed sites.",
  },
  {
    name: "Hamza",
    role: "Data Science Student",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBAgUDBP/EADsQAAICAQIDBAcGBQMFAAAAAAABAgMEBREGEjEhQVFxBxMUYYGRoSIyUmKxwUJyc7LRNGPhFRYjQ1P/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ALxAAAAAAAAAPi1TU8XS8Z5GXZyx6Jd8n4JAfafPk5mPix3ybq6l+eWxX2r8Z5+W5Qwl7JU+ji95v493wI3bZZdN2XWTsm+spybb+YFpWcWaJXLZ5yb/ACwk/wBjNHFOi3z5Y50It9OeLj+qKqMNDBdlN1d8FZTZGcH0lF7pnoUzgahl6darMK+dUl1SfZLzXQn/AA3xXTqTjjZajTld3b9mzy8H7gJODG6MgAAAAAAAAAAAAAAAAa2SjCuU5tKMVu2+5FScQ6vZrOoTvbkqY/Zpi+6Pj5snfHOc8TQpwhLaeRJVLy6v6IrL4AAAaQAAQCbT3Taa6NdUAFWLwbxE9Rr9izJ75cFvGT/9kf8AKJUUriZNmHlU5ND2sqlzIuLAyY5mJTk1/ctgpr4kqvoABAAAAAAAAAAAAAAQH0kXt5OFj/hhKb+PYQ4lPpEhKOsUze/LOhJfBvf9SLFiAAKgAAAAAFm8B3u7h+uL61zlD4b7r9SsiyPR7XKGguUull0nHy7F+xKsScAEUAAAAAAAAAAAAART0hYLv0urLhHeWNZvL+R9frsV3295ZvHd1lXD1ig9ueyMJfyvqViuhYMgArIAAAAAJOTUYreTey8y4dFwlp+l42KutdaUve+/6lR4mRLEyqsiCjKVU1NKS7HsXPVLnhGW33kmSrG4AIoAAAAAAAAAAAAA4HHFXreHMj8jjP5Mq8urKoryseyi6PNXZFxkvcyotZ0y7Sc+eLf27dsJ/jj3MQfEADTIAAAAA3ordt1da6zmopebRdUFypR8EkVdwfplmoavVaob0Y8ueyfduui8y0yVYAAigAAAAAAAAAAAAARbjzTPatLWXXHe3Ge/Z3xfX/JKTWyEbIOM1vFrZp96ApHfcyfRqNEcbUcqiv7lV04R8k9kfOaZAAAMwhO2ca6k5WSaUYrvZg7XBtSt4jxFJb8vNL5ImqsTQdLr0nTqseGzntzWS/FJ9TohdARQAAAAAAAAAAAAAAAA1m2ovl69xlvY4VvEGN/3DRpcJ77p800+xS27I/qBW2oQvhn5McmDjf62Tsj4Nvc+csvizh1atV7RjJRzK12dysXg/f4Mra2udNs6rYOE4PaUZdUyxGoAfQoEi4CUf+vqc+zaqST27N3t2bm+gcI5Wo8t+bvjYr2aW325eS7viTdYWn6VplkY1xqx4RcptdXt37+JFdJdDJx+Gtaq1nB9ZBcttb5bIPqn3P4nYIAAAAAAAAAB4ZWXj4lbsyb66oLvnJID3BFNR44wKN44Vc8qfj92Pz6kX1HivVs/eKuWNW/4aez69QLDz9a0/T0/a8quuX4d95fJEfzOPcSG6w8W2190pvkX+SASfNJtttvq292wXEd3UuLdVzlKCsjj1vscaex/PqcSuydU42Qk1OMlKMu/dGpgouTS8uOfp2PlRa/8tab9z7/qfFr3D2HrEOaa9VkL7t0V2/HxRx/R3nesw78Kb7aZc8F+V/8AP6nf17VK9I06zJmuaf3a4fil3GVVpk6HmY+rR0x+qlfP7r50k14+7yJzoHCeLpnLdk7ZGUukpL7MPJfuVxbfdbkSybLJO9y53PfvLY4f1KOq6XTk9nPty2R8JLqVHS22IV6QtVcYV6ZTLtn9u7bw7l+5L8zJrxMW3IuklXVFyk/Ip7UMyzUM27Ltb5rZb9vcu5CK9tH1K/Sc6OVj9u3ZOD/jXgWHp/F2k5ijGd/s9jX3Luz69CrzGwqLtrshbFSrnGcX0cXumblL4ublYkk8XJtpa/BJpHfweN9Sx/s5UYZUfeuSXzXZ9CKskEZwONdLydo5HrMaf+4t4/NEgxsinJhz491dsX3wkmgPYAAV3rfGWfPItx8GMcaEJuLntvN7P5IjGRfdk2OzIustk+rnLdm+f/rsr+tP+5ngaxNAAMAABAAAdfhLO9h13Hk3tXa/VT8n0fzJN6RcS+3FxsqDbqpk4zh4b9JfsQLdp8ybTXan4FtaZfVrWg1TuSlC+rltXv6MlVUvcTz0cUXRxMq+U2qbJqMYe9dX9UiCTSjOUU91GTSfky0+Doxjw5h8vfFt+e73IOR6RNRdWNRp8Hs7m52fyrovi/0IEd3jXK9q4gviu2NKVafvXX9ThFhQAFAADAPTHyL8Wz1mNdZVPxhLY8wMEs0njfKx+WvUq/aK/wD6R7Jr9mCJgYa98/8A12V/Wn/czwACAAAAAAAABOuBL7HoeoQb+zU24+7eO4BKsQRdsU/Fbss3gayUuG4b/wAEpJeW5gAVvkWStyLbJvec5ylJ/FmgAgAAqAAAAAAAAP/Z" ,
       text: "The data visualization and analytics modules gave me real-world exposure. Scored 89% in my semester project on predictive modeling — couldn’t be happier!",
  },
  {
    name: "Aimal",
    role: "Artificial Intelligence Student",
     image: "data:image/jpeg;base64,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" ,
        text: "AI labs and neural network sessions helped me understand deep learning practically. Achieved 91% in the final AI course — an amazing learning journey!",
  },
  {
    name: "Alishan",
    role: "AI & Machine Learning Enthusiast",
    image: "data:image/jpeg;base64,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" ,
      text: "From supervised models to NLP, every concept was made easy. This course truly strengthened my foundation in AI and ML.",
  },
  {
    name: "Basit",
    role: "BBA Student",
    image: "data:image/jpeg;base64,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" ,
      text: "The business management workshops and case studies were super helpful. I secured 85% in my BBA semester and improved my presentation skills a lot.",
  },
  {
    name: "Saboor",
    role: "BBA (Marketing) Student",
     image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBAgUDBP/EADsQAAICAQIDBAcGBQMFAAAAAAABAgMEBREGEjEhQVFxBxMUYYGRoSIyUmKxwUJyc7LRNGPhFRYjQ1P/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ALxAAAAAAAAAPi1TU8XS8Z5GXZyx6Jd8n4JAfafPk5mPix3ybq6l+eWxX2r8Z5+W5Qwl7JU+ji95v493wI3bZZdN2XWTsm+spybb+YFpWcWaJXLZ5yb/ACwk/wBjNHFOi3z5Y50It9OeLj+qKqMNDBdlN1d8FZTZGcH0lF7pnoUzgahl6darMK+dUl1SfZLzXQn/AA3xXTqTjjZajTld3b9mzy8H7gJODG6MgAAAAAAAAAAAAAAAAa2SjCuU5tKMVu2+5FScQ6vZrOoTvbkqY/Zpi+6Pj5snfHOc8TQpwhLaeRJVLy6v6IrL4AAAaQAAQCbT3Taa6NdUAFWLwbxE9Rr9izJ75cFvGT/9kf8AKJUUriZNmHlU5ND2sqlzIuLAyY5mJTk1/ctgpr4kqvoABAAAAAAAAAAAAAAQH0kXt5OFj/hhKb+PYQ4lPpEhKOsUze/LOhJfBvf9SLFiAAKgAAAAAFm8B3u7h+uL61zlD4b7r9SsiyPR7XKGguUull0nHy7F+xKsScAEUAAAAAAAAAAAAART0hYLv0urLhHeWNZvL+R9frsV3295ZvHd1lXD1ig9ueyMJfyvqViuhYMgArIAAAAAJOTUYreTey8y4dFwlp+l42KutdaUve+/6lR4mRLEyqsiCjKVU1NKS7HsXPVLnhGW33kmSrG4AIoAAAAAAAAAAAAA4HHFXreHMj8jjP5Mq8urKoryseyi6PNXZFxkvcyotZ0y7Sc+eLf27dsJ/jj3MQfEADTIAAAAA3ordt1da6zmopebRdUFypR8EkVdwfplmoavVaob0Y8ueyfduui8y0yVYAAigAAAAAAAAAAAAARbjzTPatLWXXHe3Ge/Z3xfX/JKTWyEbIOM1vFrZp96ApHfcyfRqNEcbUcqiv7lV04R8k9kfOaZAAAMwhO2ca6k5WSaUYrvZg7XBtSt4jxFJb8vNL5ImqsTQdLr0nTqseGzntzWS/FJ9TohdARQAAAAAAAAAAAAAAAA1m2ovl69xlvY4VvEGN/3DRpcJ77p800+xS27I/qBW2oQvhn5McmDjf62Tsj4Nvc+csvizh1atV7RjJRzK12dysXg/f4Mra2udNs6rYOE4PaUZdUyxGoAfQoEi4CUf+vqc+zaqST27N3t2bm+gcI5Wo8t+bvjYr2aW325eS7viTdYWn6VplkY1xqx4RcptdXt37+JFdJdDJx+Gtaq1nB9ZBcttb5bIPqn3P4nYIAAAAAAAAAB4ZWXj4lbsyb66oLvnJID3BFNR44wKN44Vc8qfj92Pz6kX1HivVs/eKuWNW/4aez69QLDz9a0/T0/a8quuX4d95fJEfzOPcSG6w8W2190pvkX+SASfNJtttvq292wXEd3UuLdVzlKCsjj1vscaex/PqcSuydU42Qk1OMlKMu/dGpgouTS8uOfp2PlRa/8tab9z7/qfFr3D2HrEOaa9VkL7t0V2/HxRx/R3nesw78Kb7aZc8F+V/8AP6nf17VK9I06zJmuaf3a4fil3GVVpk6HmY+rR0x+qlfP7r50k14+7yJzoHCeLpnLdk7ZGUukpL7MPJfuVxbfdbkSybLJO9y53PfvLY4f1KOq6XTk9nPty2R8JLqVHS22IV6QtVcYV6ZTLtn9u7bw7l+5L8zJrxMW3IuklXVFyk/Ip7UMyzUM27Ltb5rZb9vcu5CK9tH1K/Sc6OVj9u3ZOD/jXgWHp/F2k5ijGd/s9jX3Luz69CrzGwqLtrshbFSrnGcX0cXumblL4ublYkk8XJtpa/BJpHfweN9Sx/s5UYZUfeuSXzXZ9CKskEZwONdLydo5HrMaf+4t4/NEgxsinJhz491dsX3wkmgPYAAV3rfGWfPItx8GMcaEJuLntvN7P5IjGRfdk2OzIustk+rnLdm+f/rsr+tP+5ngaxNAAMAABAAAdfhLO9h13Hk3tXa/VT8n0fzJN6RcS+3FxsqDbqpk4zh4b9JfsQLdp8ybTXan4FtaZfVrWg1TuSlC+rltXv6MlVUvcTz0cUXRxMq+U2qbJqMYe9dX9UiCTSjOUU91GTSfky0+Doxjw5h8vfFt+e73IOR6RNRdWNRp8Hs7m52fyrovi/0IEd3jXK9q4gviu2NKVafvXX9ThFhQAFAADAPTHyL8Wz1mNdZVPxhLY8wMEs0njfKx+WvUq/aK/wD6R7Jr9mCJgYa98/8A12V/Wn/czwACAAAAAAAABOuBL7HoeoQb+zU24+7eO4BKsQRdsU/Fbss3gayUuG4b/wAEpJeW5gAVvkWStyLbJvec5ylJ/FmgAgAAqAAAAAAAAP/Z" ,
      text: "Marketing analytics and brand strategy sessions made complex topics simple and engaging. I’m proud of scoring 88% this year!",
  },
];


const TestimonialSlider = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-red-600 font-semibold uppercase mb-3">Testimonial</p>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
          Checkout what people <br /> says about us!
        </h2>

        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-6 rounded-md shadow text-center h-full flex flex-col justify-between">
                  <p className="text-gray-600 mb-6">"{item.text}"</p>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                    <p className="text-sm font-semibold text-gray-500 uppercase">{item.role}</p>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full mx-auto mt-4"
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Dots Below the Slider */}
          <div className="swiper-custom-pagination mt-8 flex justify-center gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
