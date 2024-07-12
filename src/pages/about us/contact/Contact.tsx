import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-md mx-auto mt-5 space-y-8">
        <h2 className="text-3xl font-bold text-center">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-center">
            <FaPhone className="text-black text-2xl mr-4" />
            <div>
              <p className="text-lg font-semibold">Phone Number</p>
              <p className="text-gray-700">+8 (801) 456-7890</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <FaEnvelope className="text-black text-2xl mr-4" />
            <div>
              <p className="text-lg font-semibold">Email Address</p>
              <p className="text-gray-700">campers@info.com</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-black text-2xl mr-4" />
            <div>
              <p className="text-lg font-semibold">Physical Address</p>
              <p className="text-gray-700">
                1203 Dhaka Dhaka Dhaka Sadar
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    );
};

export default Contact;