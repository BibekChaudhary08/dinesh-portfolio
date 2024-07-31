import React from 'react';
import ScrollAnimationForFooter from './ScrollAnimationForFooter';

const Footer = () => {
  return (
    <ScrollAnimationForFooter>
      <div id="footer" className="footer-bg relative">
        <div
          className="absolute top-0 left-0 right-0 h-full"
          style={{
            backgroundImage: `url('/footer-img.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          }}
        ></div>
        <div className="text-white flex flex-col mx-auto w-full items-center justify-center bg-center bg-cover bg-no-repeat pt-10 pb-5 md:py-12 lg:py-5">
          <div className="w-4/5 md:w-full mx-auto flex flex-col text-center justify-center items-center md:py-12 md:px-8 relative z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-white uppercase transition-transform duration-500 ease-in-out transform hover:scale-105">
              Any Questions? Look Here
            </h1>
            <div className="py-8">
              <p className="block lg:hidden">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
              <p className="hidden lg:block">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
              <p className="hidden lg:block">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-around items-start lg:items-center text-center">
            <div className="w-full lg:w-1/2 px-4 lg:px-8 mb-4 lg:mb-0">
              <div
                className="collapse items-center collapse-arrow bg-black mb-4 p-4 lg:p-9"
                style={{ boxShadow: '10px 30px 300px 30px #C9CBCC4D' }}
              >
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-medium">
                  <h1 className="text-lg text-left">Lorem Ipsum</h1>
                </div>
                <div className="collapse-content">
                  <p className="text-lg text-left">
                    Damaru allows users to discover new businesses in their area and avail exclusive deals from verified vendors. Simply
                    download the app, register, and explore a world of personalized business based on your preferences.
                  </p>
                </div>
              </div>

              <div
                className="collapse collapse-arrow bg-black mb-4 p-4 lg:p-9"
                style={{ boxShadow: '0px 20px 95px 0px #C9CBCC4D' }}
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium">
                  <h1 className="text-lg text-left">Is my personal information secure on Damaru?</h1>
                </div>
                <div className="collapse-content">
                  <p className="text-lg text-left">
                    Damaru allows users to discover new businesses in their area and avail exclusive deals from verified vendors. Simply
                    download the app, register, and explore a world of personalized business based on your preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4 lg:px-8 mb-4 lg:mb-0">
              <div
                className="collapse collapse-arrow bg-black mb-4 p-4 lg:p-8"
                style={{ boxShadow: '0px 20px 95px 0px #C9CBCC4D' }}
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium">
                  <h1 className="text-lg text-left">Is my personal information secure on Damaru?</h1>
                </div>
                <div className="collapse-content">
                  <p className="text-lg text-left">
                    Damaru allows users to discover new businesses in their area and avail exclusive deals from verified vendors. Simply
                    download the app, register, and explore a world of personalized business based on your preferences.
                  </p>
                </div>
              </div>

              <div
                className="collapse collapse-arrow bg-black mb-4 p-4 lg:p-8"
                style={{ boxShadow: '0px 20px 95px 0px #C9CBCC4D' }}
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium">
                  <h1 className="text-lg text-left">Is my personal information secure on Damaru?</h1>
                </div>
                <div className="collapse-content">
                  <p className="text-lg text-left">hello</p>
                </div>
              </div>

              <div
                className="collapse collapse-arrow bg-black mb-4 p-4 lg:p-8"
                style={{ boxShadow: '0px 20px 95px 0px #C9CBCC4D' }}
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-medium">
                  <h1 className="text-lg text-left">Is my personal information secure on Damaru?</h1>
                </div>
                <div className="collapse-content">
                  <p className="text-lg text-left">hello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimationForFooter>
  );
};

export default Footer;
