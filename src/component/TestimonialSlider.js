// src/components/TestimonialSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const testimonials = [
  {
    name: "John",
    role: "Full Stack Developer",
    image: "https://ui-avatars.com/api/?name=John&background=6366f1&color=fff",
    text: "The coding mentorship and hands-on projects helped me land a developer position. The structure and guidance were perfect for strengthening both frontend and backend skills.",
  },
  {
    name: "Hamza",
    role: "Data Science Student",
    image: "https://ui-avatars.com/api/?name=Hamza&background=3b82f6&color=fff",
    text: "AI labs and neural network sessions helped me understand deep learning practically. Achieved 91% in the final AI course — an amazing learning journey!",
  },
  {
    name: "Aimal",
    role: "Artificial Intelligence Student",
    image: "https://ui-avatars.com/api/?name=Aimal&background=8b5cf6&color=fff",
    text: "From supervised models to NLP, every concept was made easy. This course truly strengthened my foundation in AI and Machine Learning.",
  },
  {
    name: "Farooq",
    role: "Software Engineering Student",
    image: "https://ui-avatars.com/api/?name=Farooq&background=0ea5e9&color=fff",
    text: "The dissertation research support was top-notch. They helped me structure my technical thesis for my UK university perfectly. Highly recommended!",
  },
  {
    name: "Alishan",
    role: "AI & ML Enthusiast",
    image: "https://ui-avatars.com/api/?name=Alishan&background=6366f1&color=fff",
    text: "The data visualization and analytics modules gave me real-world exposure. Scored 89% in my semester project on predictive modeling!",
  },
  {
    name: "Umair",
    role: "MSc Research Scholar",
    image: "https://ui-avatars.com/api/?name=Umair&background=3b82f6&color=fff",
    text: "Their understanding of European academic standards is unmatched. They helped me with complex assignment writing that passed Turnitin with 0% AI detection.",
  },
  {
    name: "Aliya",
    role: "Computer Science Student",
    image: "https://ui-avatars.com/api/?name=Aliya&background=ec4899&color=fff",
    text: "Thanks to the focused curriculum and great instructors, I scored 87% in my final semester. The support I received was outstanding!",
  },
  {
    name: "Shazia",
    role: "BBA (Marketing) Student",
    image: "https://ui-avatars.com/api/?name=Shazia&background=f43f5e&color=fff",
    text: "Marketing analytics and brand strategy sessions made complex topics simple and engaging. I’m proud of scoring 88% this year!",
  },
  {
    name: "Nabeel",
    role: "Web Developer",
    image: "https://ui-avatars.com/api/?name=Nabeel&background=10b981&color=fff",
    text: "I improved my JavaScript and React skills significantly. Now I’m building scalable applications confidently. This program truly elevated my career.",
  },
  {
    name: "Ali Muhammad",
    role: "SEO Specialist",
    image: "https://ui-avatars.com/api/?name=Ali+Muhammad&background=f59e0b&color=fff",
    text: "The SEO insights and tools provided were practical and effective. I’ve seen a 60% boost in organic traffic across my managed sites.",
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
