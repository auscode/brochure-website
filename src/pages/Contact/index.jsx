import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";

const ContactPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "www.nexus.com";
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sourcesanspro gap-[54px] sm:gap-5 items-center justify-start mx-auto w-full overflow-hidden">
        <div className="flex flex-col items-center w-full">
          <header className="flex items-center justify-center md:px-5 sm:px-0 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between ml-[164px] mr-[181px] my-[15px] w-[76%] sm:ml-0 sm:mr-0 sm:my-1 sm:w-[90%] ">
              <div className="header-row ">
                <Img
                  className="h-[50px] sm:h-[40px]"
                  src="images/img_group642.svg"
                  alt="Group645"
                />
                <div className="mobile-menu" onClick={handleMenuToggle}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-row sm:hidden items-start justify-between pt-[7px] w-2/5">
                <Text
                  className="common-pointer text-black-900 text-lg"
                  size="txtSourceSansProBold18Black900"
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
                <Text
                  className="common-pointer text-black-900 text-lg"
                  size="txtSourceSansProBold18Black900"
                  onClick={() => navigate("/about")}
                >
                  About
                </Text>
                <Text
                  className="common-pointer text-black-900 text-lg"
                  size="txtSourceSansProBold18Black900"
                  onClick={() => navigate("/works")}
                >
                  Works
                </Text>
                <div className="flex flex-col gap-2.5 items-center justify-start">
                  <Text
                    className="text-lg text-red-401"
                    size="txtSourceSansProBold18"
                  >
                    Contact
                  </Text>
                  <div className="bg-red-401 h-1.5 rounded-[50%] w-1.5"></div>
                </div>
              </div>
            </div>
          </header>
          {/* mobile nav  */}
          <div className="hidden sm:block w-full ">
            {isMenuOpen && (
              <div className="mobile-menu-content gap-2.5 flex flex-row m-0 bg-gray-200 p-2 justify-between rounded-lg">
                {/* Add your menu items and styles here */}
                <Text
                  className="common-pointer text-black-900 text-lg"
                  size="txtSourceSansProBold18"
                  onClick={() => {
                    handleMenuToggle();
                    navigate("/");
                  }}
                >
                  Home
                </Text>
                <Text
                  className="common-pointer text-black-900 text-lg"
                  size="txtSourceSansProBold18Black900"
                  onClick={() => {
                    handleMenuToggle();
                    navigate("/about");
                  }}
                >
                  About
                </Text>
                <Text
                  className="common-pointer text-black-900 text-lg"
                  size="txtSourceSansProBold18Black900"
                  onClick={() => {
                    handleMenuToggle();
                    navigate("/works");
                  }}
                >
                  Works
                </Text>
                <div className="flex flex-col gap-2.5 items-center justify-start">
                  <Text
                    className="text-lg text-red-401"
                    size="txtSourceSansProBold18"
                  >
                    Contact
                  </Text>
                  <div className="bg-red-401 h-1.5 rounded-[50%] w-1.5"></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-5 w-[92%] sm:px-0 md:w-full">
          <div className="bg-blue-50 flex flex-col items-center justify-start md:ml-[0] ml-[121px] p-[51px] md:px-10 sm:px-5 rounded-[90px] w-[91%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[76px] h-[480px] items-center justify-end mb-[65px] mt-[65px] p-[72px] md:px-10 sm:px-5"
              style={{ backgroundImage: "url('images/img_group744.svg')" }}
            >
              <Text
                className="mt-1 sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtSourceSansProBold50"
              >
                <span className="text-black-900 font-sourcesanspro text-left font-bold">
                  Get in{" "}
                </span>
                <span className="text-red-401 font-sourcesanspro text-left font-bold">
                  touch
                </span>
              </Text>
              <Text
                className="leading-[40.00px] text-center text-gray-700 text-xl w-[86%] sm:w-full mb-20"
                size="txtSourceSansProRegular20Gray700"
              >
                Stay connected with us, we will help you with your various
                needs. we will provide the best service in technical and
                consulting matters. You can provide your needs or something you
                ask in the form below
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[41px] items-center justify-end md:ml-[0] ml-[120px] mt-[100px] w-[91%] md:w-full">
            <div className="bg-white-A700 md:h-[425px] sm:h-[538px] h-[599px] md:mt-0 mt-[15px] m-3 p-[70px] md:px-10 sm:px-5 relative rounded-[20px] shadow-bs6 w-[66%] md:w-full">
              <div className="absolute flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-auto pb-[72px] rounded-[5px] top-[12%] w-3/4">
                <Input
                  name="Group843"
                  placeholder="Send Message"
                  className="font-bold leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-left text-xl w-full"
                  wrapClassName="pr-[35px] w-full"
                  size="xs"
                ></Input>
                <div className="flex flex-col items-center justify-start rounded-[5px] w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="flex sm:flex-col items-center justify-between w-full">
                      <Input
                        name="Group750"
                        placeholder="Your Name"
                        className="font-bold leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        type="text"
                        shape="round"
                        color="gray_100"
                        variant="fill"
                      ></Input>
                      <Input
                        name="Group751"
                        placeholder="Your Email"
                        className="font-bold leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        type="email"
                        shape="round"
                        color="gray_100"
                        variant="fill"
                      ></Input>
                    </div>
                    <TextArea
                      className="bg-gray-100 border-0 font-bold leading-[normal] pb-[35px] pl-[19px] sm:pr-5 pr-[35px] pt-6 rounded-[5px] text-base placeholder:text-gray-400 text-gray-400 text-left w-full"
                      name="Group748"
                      placeholder="Your Message"
                    ></TextArea>
                  </div>
                </div>
              </div>
              <Button
                className="absolute bottom-[17%] cursor-pointer leading-[normal] left-[14%] min-w-[182px] rounded-[25px] text-center text-xl"
                color="green_600"
              >
                Send
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-center m-3 p-[33px] sm:px-5 rounded-[20px] shadow-bs6 w-[32%] md:w-full">
              <div className="flex flex-col gap-[31px] items-center justify-start mb-9 mt-11 w-[90%] md:w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-[98%] md:w-full">
                  <Input
                    name="Group762"
                    placeholder="Contact Information"
                    className="font-bold leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-left text-xl w-full"
                    wrapClassName="pr-[35px] w-full"
                    size="sm"
                  ></Input>
                  <div className="flex flex-col gap-[29px] items-start justify-start ml-1 md:ml-[0] w-[92%] md:w-full">
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[74%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_frame666.svg"
                        alt="Frame666"
                      />
                      <Text
                        className="text-[17px] text-gray-401"
                        size="txtSourceSansProSemiBold17"
                      >
                        hello@nexus.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[70%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                      <Text
                        className="common-pointer mt-1 text-[17px] text-gray-401"
                        size="txtSourceSansProSemiBold17"
                        onClick={handleNavigate}
                      >
                        www.nexus.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-full">
                      <Img
                        className="h-6 mt-[3px] w-6"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="sm:flex-1 text-[17px] text-gray-401 w-4/5 sm:w-full"
                        size="txtSourceSansProSemiBold17"
                      >
                        Sudirman street, holgan, melbourne
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="mt-1 text-[17px] text-gray-401"
                        size="txtSourceSansProSemiBold17"
                      >
                        0361 - 8878
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[41px] justify-start w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start mr-2 w-[98%] md:w-full">
                    <Text
                      className="text-gray-600 text-xl"
                      size="txtSourceSansProBold20Gray600"
                    >
                      Social Media
                    </Text>
                    <Line className="bg-gray-200 h-px w-full" />
                  </div>
                  <div className="flex flex-row gap-[19px] items-center justify-end md:ml-[0] w-[89%] md:w-full">
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px] hover:invert hover:brightness-50"
                      src="images/img_group270.png"
                      alt="Group270"
                    />
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px] hover:invert hover:brightness-50"
                      src="images/img_group271.png"
                      alt="Group271"
                    />
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px] hover:invert hover:brightness-50"
                      src="images/img_group268.png"
                      alt="Group268"
                    />
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px] hover:invert hover:brightness-50"
                      src="images/img_group269.png"
                      alt="Group269"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-801 flex items-center justify-center mt-[108px] rounded-tr-[50px] sm:rounded-tr-none w-full py-5 sm:py-0" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
