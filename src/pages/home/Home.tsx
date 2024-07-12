import BestSelling from "./best selling/BestSelling";
import Categories from "./categories/Categories";
import Faq from "./faq section/Faq";
import Featured from "./featured products/Featured";
import Hero from "./hero/Hero";
import Testimonial from "./unique/Testimonial";


const Home = () => {
    return (
        <div>
            <Hero />
            <BestSelling />
            <Categories />
            <Featured />
            <Testimonial />
            <Faq />
        </div>
    );
};

export default Home;