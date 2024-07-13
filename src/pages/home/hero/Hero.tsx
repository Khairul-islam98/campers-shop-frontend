import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import campers1 from '../../../assets/images/hero/Campers1.jpg'
import campers2 from '../../../assets/images/hero/Campers2.jpg'
import campers3 from '../../../assets/images/hero/Campers3.jpg'
import campers4 from '../../../assets/images/hero/Campers4.jpg'
import campers5 from '../../../assets/images/hero/Campers5.webp'

const slides = [
  {
    image: campers1,
    title: 'Outdoor Revolution',
    description: 'The pioneer of premium drive-away awnings, camping accessories,',
  },
  {
    image: campers2,
    title: 'Adventure Awaits',
    description: 'Discover the best camping accessories for your next adventure.',
  },
  {
    image: campers3,
    title: 'Quality Gear',
    description: 'High-quality gear for all your camping needs.',
  },
  {
    image: campers4,
    title: 'Explore the Outdoors',
    description: 'Get ready for your next outdoor adventure with our top-notch gear.',
  },
  {
    image: campers5,
    title: 'Innovative Designs',
    description: 'Experience the best in design and functionality with our camping gear.',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const { image, title, description } = slides[currentSlide];

  return (
    <section className="relative h-screen md:h-[50vh] lg:h-[60vh] xl:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center h-full" data-aos="fade-up-right">
        <div className="text-left text-white max-w-2xl mx-4 md:mx-8 lg:mx-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-8">{description}</p>
          <Link to="/products" className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full inline-block ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
