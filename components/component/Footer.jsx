"use client";
import Image from "next/image";
import Location from "../../public/Location.png";
import phone from "../../public/phone.png";
export default function Footer() {
  return (
    <footer className="bg-gray-300 text-black font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Image
                src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719767854/HappyHealingDiagnostic/Happy_Healing_Diagnostics_new_logo_-_Copy__1_-removebg-preview_sgwxf8.png"
                alt="Happy Healing Logo"
                width={200}
                height={50}
              />
            </div>
            <p>Happy Healing House Of Diagnostics</p>
            <div className="mt-4 flex flex-col gap-4 text-justify">
              <h3 className="font-bold text-[#c50000] ">Location</h3>

              <span className="flex gap-2 items-center">
                {" "}
                <Image
                  className="h-8"
                  width={40}
                  height={30}
                  src={Location}
                  alt="no image"
                />{" "}
                <p className="w-[80%] ">
                  Plot- 202, Okhla Industrial Estate Area Phase 3, New Delhi,
                  110020, India
                </p>
              </span>
              <div className="flex gap-2 items-center">
                <span>
                  <Image
                    className="h-8"
                    width={40}
                    height={30}
                    src={phone}
                    alt="no image"
                  />
                </span>
                <span>
                  <p>1800-208-2254</p>
                  <p>customercare@cremica.com</p>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold text-[#c50000] ">Buy Now</h3>
            <ul className="mt-4 space-y-2">
              <li>Chataka</li>
              <li>Tomato Ketchup</li>
              <li>Opera Crisps</li>
              <li>Mayonnaise</li>
              <li>Syrups</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold text-[#c50000] ">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>About</li>
              <li>Products</li>
              <li>Recipes</li>
              <li>Media</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Product Catalogue</li>
              <li>Bonheur Catalogue</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold text-[#c50000] ">Get The Latest Deals</h3>
            <p>And Stay Updated With Cremica’s Innovations</p>
            <form className="mt-4 flex gap-4">
              <input
                type="email"
                className="px-2 py-2  bg-transparent border border-black rounded-lg"
                placeholder="Email Address"
              />
              <button className=" bg-red-600 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded-lg">
                Subscribe
              </button>
            </form>
            <h3 className="font-bold text-[#c50000]  mt-7">Get The Latest Deals</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-10 h-10" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="w-10 h-10" />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube className="w-10 h-10" />
              </a>
            </div>
            <div className="mt-8">
              <div className="flex gap-3">
                {" "}
                <a href="#">Shipping & Return </a>
                <span className="border border-2 border-gray-500" />{" "}
                <a href="#">Terms & Condition</a>
              </div>
              <a href="#" className="block">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-600 text-center text-white  py-4 ">
        <p>
          Copyright © 2023 House Of Diagnostics. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function Facebook(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      style={{ fill: "#c50000" }}
    >
      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
    </svg>
  );
}

function Instagram(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 448 512"
      style={{ fill: "#c50000" }}
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function Youtube(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 576 512"
      style={{ fill: "#c50000" }}
    >
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
    </svg>
  );
}
