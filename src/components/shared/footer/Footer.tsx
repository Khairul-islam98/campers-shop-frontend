import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import logo from '../../../assets/images/logo.png'

const sections = [
  {
    title: "Contact",
    items: ["Campers Shop", "Dhaka Bangaladesh", "+8801800000000", "campers@info.com", { type: "image", src: {logo}, alt: "logo" }],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides"],
  },
  {
    title: "Opening Hours",
    items: ["Mon - Fri: 9:30 AM - 7:00 PM", "Sat: 9:30 AM - 1:00 PM", "Sun: Closed"],
  },
  {
    title: "Quick Links",
    items: ["Search", "About Us", "Contact Us", "Tearms of Service", "Refund Policy"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <div className="w-full mt-5 bg-[#222021] text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-800 py-8">
        {sections.map((section, index) => (
          <div key={index}>
          <h6 className="font-bold uppercase pt-2">{section.title}</h6>
          <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-[#CB1836] cursor-pointer">
                  {typeof item === 'string' ? (
                    item
                  ) : item.type === 'image' ? (
                    <img src={logo} alt={item.alt} className="max-w-9 bg-white rounded-full  lg:max-w-14" />
                  ) : null}
                </li>
              ))}
            </ul>
        </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase hover:text-[#CB1836]">Newsletter</p>
          <p className="py-4">
           Sign up for exclusive offers, original stories, events and more.
          </p>
          <form className="flex flex-col sm:flex-row">
            <Input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <Button className="p-2 mb-4 cursor-pointer bg-[#CB1836] text-white hover:bg-gray-600">Subscribe </Button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4 hover:text-[#CB1836]">2024 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return <x.icon key={index} className="hover:text-white cursor-pointer" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;