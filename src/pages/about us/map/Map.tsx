
const Map = () => {
  return (
    <section className="flex items-center justify-center py-4">
      <div className="max-w-screen-lg w-full bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-bold text-center py-4 hover:text-[#CB1836]">
          Our Location
        </h2>
        <div className="h-96">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9029123204776!2d90.39945211536266!3d23.727730284597024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85a08e28435%3A0xd9d7b80dff0a7fd4!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1620712397334!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
