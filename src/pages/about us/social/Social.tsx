import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Social = () => {
    return (
        <section className="py-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <p className="text-gray-700 mb-6">Stay connected with us on social media</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800 transition duration-300" />
            </a>
            <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl text-pink-600 hover:text-pink-800 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300" />
            </a>
          </div>
        </div>
      </section>
    )
};

export default Social;