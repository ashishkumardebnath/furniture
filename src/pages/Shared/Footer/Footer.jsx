import { GoArrowRight } from "react-icons/go";
import logo from "../../../assets/images/Navbar/62d3960a755658580bdded8a_logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import BackToTopBtn from "../../../components/BackToTopBtn/BackToTopBtn";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-32">
      <BackToTopBtn></BackToTopBtn>
      <footer className="footer justify-between py-20 lg:px-0 px-4 max-w-screen-xl mx-auto">
        <aside>
          <div className="flex items-center">
            <img src={logo} alt="" />
            <div className="-space-y-1">
              <h3 className="text-4xl font-semibold">Dream</h3>
              <p>Furniture</p>
            </div>
          </div>
          <p className="font-sans my-5 text-gray-500">
            256, Central City, Borlex House Main
            <br />
            town, New York, USA
          </p>
          <h1 className="text-xl font-medium font-sans">+880(12) 125 48765</h1>
          <p className="font-sans text-lg text-gray-500">
            www.dream-developer.com
          </p>
        </aside>
        <nav>
          <h6 className="text-2xl font-semibold">Company</h6>
          <a className="font-sans font-medium text-gray-500">Home</a>
          <a className="font-sans font-medium text-gray-500">About Us</a>
          <a className="font-sans font-medium text-gray-500">Contact Us</a>
          <a className="font-sans font-medium text-gray-500">Our Blog Post</a>
          <a className="font-sans font-medium text-gray-500">Shop</a>
          <a className="font-sans font-medium text-gray-500">Register</a>
          <a className="font-sans font-medium text-gray-500">Login</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-semibold">Information</h6>
          <a className="font-sans font-medium text-gray-500">
            Terms & Conditions
          </a>
          <a className="font-sans font-medium text-gray-500">Style Guide</a>
          <a className="font-sans font-medium text-gray-500">Changelog</a>
          <a className="font-sans font-medium text-gray-500">Licenses</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-semibold">Newsletter</h6>
          <a className="font-sans font-medium text-gray-500">
            Subscribe our Newsletter and get all
          </a>
          <a className="font-sans font-medium text-gray-500">
            latest information and offers
          </a>
          <div className="flex items-center my-4">
            <input
              type="email"
              placeholder="Email here"
              className="input input-bordered  bg-white rounded-none input-sm w-full max-w-xs"
            />
            <GoArrowRight size={31} className="text-white bg-black" />
          </div>
          <h1 className="text-xl font-semibold">Follow us ------</h1>
          <div className="flex gap-5 mt-3">
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaLinkedinIn size={20} />
          </div>
        </nav>
      </footer>
      <div className="divider"></div>
      <footer className="footer footer-center pb-5 pt-2  bg-gray-100">
        <aside>
          <p>
            Copyright © 2024 - All right reserved by{" "}
            <span className="font-semibold">Dream-Developer</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
