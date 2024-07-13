import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Campers Shop has exceeded my expectations in every way. Their customer service is top-notch, and the quality of their products is unmatched. I wouldn't shop anywhere else for my camping gear.",
      name: "Rose Roberson",

      imgSrc: "https://i.pravatar.cc/120?img=1",
    },
    {
      quote:
        "I've been camping for years, and Campers Shop is by far the best place to get gear. Their selection is amazing, and everything I've bought has been durable and reliable.",
      name: "Chace Rodgers",

      imgSrc: "https://i.pravatar.cc/120?img=10",
    },
    {
      quote:
        "The staff at Campers Shop are incredibly knowledgeable and helpful. They helped me find the perfect tent for my family, and we've had the best camping trips because of it.",
      name: "Cornelius Sheppard",

      imgSrc: "https://i.pravatar.cc/120?img=9",
    },
    {
      quote:
        "I love shopping at Campers Shop. The prices are great, and the products are even better. I've recommended it to all my camping friends.",
      name: "Chace Rodgers",

      imgSrc: "https://i.pravatar.cc/120?img=7",
    },
    {
      quote:
        "Campers Shop made my first camping experience fantastic. They had everything I needed, and their guides helped me pick out the right gear for a beginner like me.",
      name: "Cornelius Sheppard",

      imgSrc: "https://i.pravatar.cc/120?img=8",
    },
    {
      quote:
        "Every time I visit Campers Shop, I'm impressed with the quality and variety of their products. It's my go-to store for all my outdoor adventures.",
      name: "Chace Rodgers",

      imgSrc: "https://i.pravatar.cc/120?img=2",
    },
    {
      quote:
        "Campers Shop is the best! Their gear is top-quality, and their customer service is excellent. I've never had a bad experience shopping there.",

      imgSrc: "https://i.pravatar.cc/120?img=3",
    },
  ];
  return (
    <section className="w-full py-4">
      <div className="mx-auto lg:max-w-screen-xl px-3">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <p className="font-bold text-gray-800 text-2xl">
            TESTIMONIALS
          </p>
          <p className="text-gray-500">
            We let our work speak for itself. Here are some of the testimonials
            from our clients.
          </p>
        </div>
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-sm">
                  <CardContent className="flex h-[310px] items-center justify-center p-6">
                    <div className="flex flex-col px-4 py-5 sm:p-6">
                      <q className="flex-1 text-gray-600 dark:text-gray-300">
                        {testimonial.quote.slice(0, 150)}...
                      </q>
                      <div className="mt-6 flex gap-3">
                        <span className="inline-flex rounded-full">
                          <img
                            className="h-10 w-10 rounded-full"
                            height={40}
                            width={40}
                            alt={testimonial.name}
                            src={testimonial.imgSrc}
                            loading="lazy"
                          />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 dark:text-white">
                            {testimonial.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#CB1836] text-white  p-2 rounded-full cursor-pointer  transition-opacity duration-300" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#CB1836] text-white  p-2 rounded-full cursor-pointer  transition-opacity duration-300" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
