import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import Footer from "components/Footer";

const WorksPage = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sourcesanspro gap-[54px] sm:gap-5 items-start justify-start mx-auto w-full overflow-hidden">
        {/* <div className="flex flex-col items-center w-full"> */}
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
              <div className="flex flex-col gap-[11px] items-center justify-start">
                <Text
                  className="text-lg text-red-401"
                  size="txtSourceSansProBold18"
                >
                  Works
                </Text>
                <div className="bg-red-401 h-1.5 rounded-[50%] w-1.5"></div>
              </div>
              <Text
                className="common-pointer text-black-900 text-lg"
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/contact")}
              >
                Contact
              </Text>
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
              <div className="flex flex-col gap-[11px] items-center justify-start">
                <Text
                  className="text-lg text-red-401"
                  size="txtSourceSansProBold18"
                >
                  Works
                </Text>
                <div className="bg-red-401 h-1.5 rounded-[50%] w-1.5"></div>
              </div>
              <Text
                className="common-pointer text-black-900 text-lg"
                size="txtSourceSansProBold18Black900"
                onClick={() => {
                  handleMenuToggle();
                  navigate("/contact");
                }}
              >
                Contact
              </Text>
            </div>
          )}
        </div>
        {/* </div> */}
        <div className="flex flex-col items-start justify-start w-[92%] md:px-5 sm:px-0 md:w-full">
          <div className="bg-green-A100 sm:h-[400px] h-[646px] md:h-[930px] md:ml-[0] ml-auto p-1 relative rounded-[90px] w-[86%] md:w-full">
            <div className="absolute top-[25%] flex flex-col md:gap-10 gap-[82px] h-full justify-start m-auto">
              <Text
                className="text-center sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtSourceSansProBold50"
              >
                <span className="text-black-900 font-sourcesanspro text-center font-bold">
                  What we{" "}
                </span>
                <span className="text-red-401 font-sourcesanspro text-center font-bold">
                  do
                </span>
                <span className="text-black-900 font-sourcesanspro text-left font-bold">
                  {" "}
                </span>
              </Text>
              <Text
                className="leading-[40.00px] text-center text-gray-700 text-2xl sm:text-xl w-full px-32 sm:px-0"
                size="txtSourceSansProRegular20Gray700"
              >
                We have completed many projects from various companies in the
                world, we have made many of our clients feel happy and satisfied
                with the results we have provided
              </Text>
            </div>
            <div className="absolute sm:hidden bottom-[1%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[96%]">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-row sm:gap-10 gap-[767px]  items-start justify-start w-4/5 md:w-full">
                  <Img
                    className="h-[114px] rounded-[10px] w-[114px]"
                    src="images/img_rectangle57.svg"
                    alt="RectangleFiftySeven"
                  />
                  <div className="bg-deep_orange-A100 h-3.5 mb-[88px] mt-3 rounded-[50%] w-3.5"></div>
                </div>
                <div className="bg-light_blue-400 h-3.5 md:ml-[0] ml-[109px] mr-[1004px] mt-[74px] rounded-[50%] w-3.5"></div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[26px] mt-[175px] w-[98%] md:w-full">
                  <Img
                    className="h-[114px] md:mt-0 mt-[31px] w-[114px]"
                    src="images/img_group776.svg"
                    alt="group776"
                  />
                  <Img
                    className="h-[196px] md:ml-[0] ml-[745px] md:mt-0 mt-[7px] rounded-[15px] w-[196px]"
                    src="images/img_polygon1.svg"
                    alt="PolygonOne"
                  />
                  <div className="bg-deep_purple-800 h-3.5 mb-[189px] md:ml-[0] ml-[31px] rounded-[50%] w-3.5"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start md:ml-[0] ml-[129px] mt-[100px] pt-[17px] w-[91%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[58px] items-center sm:items-start sm:px-1 justify-start w-[59%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtSourceSansProBold40"
              >
                Latest Project
              </Text>
              <Text
                className="text-gray-700 text-xl"
                size="txtSourceSansProRegular20Gray700"
              >
                this is the last variety of projects we have worked on
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="md:h-[496px] h-[527px] relative w-[95%] md:w-full ml-auto">
                <div className="absolute bg-orange-A200 h-[505px] sm:h-[360px] inset-x-[0] mx-auto rounded-[30px] top-[0] w-full"></div>
                <div className="absolute bottom-[0] sm: h-[482px] right-[0] w-[92%] md:w-full">
                  <Img
                    className="absolute sm:static h-[482px] inset-y-[0] my-auto object-cover sm:object-contain right-[0] w-[73%] sm:w-full"
                    src="images/img_group21.png"
                    alt="groupTwentyOne"
                  />
                  <div className="absolute flex flex-col sm:m-4 items-start justify-start left-[0] top-[0] w-[28%] sm:w-full">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                      size="txtNunitoExtraBold35"
                    >
                      Foodie.
                    </Text>
                    <Text
                      className="mt-[136px] sm:mt-2 sm:text-[20px] md:text-[33px] text-[35px] text-white-A700 w-full"
                      size="txtSourceSansProBold35"
                    >
                      Launching website for Apps
                    </Text>
                    <Line className="bg-white-A700 h-0.5 mt-[68px] sm:mt-2 w-[24%]" />
                  </div>
                </div>
              </div>
              {/* <div className="md:h-[1034px] h-[580px] sm:h-[680px] mt-[100px] w-[95%] relative md:w-full ml-auto">
                <div className="absolute bg-indigo-800 h-[580px] inset-y-[0] left-[0] my-auto rounded-[30px] w-full"></div> */}
              <div className="md:h-[1034px] h-[580px] sm:h-[600px] mt-[100px] sm:mt-0 w-[95%] relative md:w-full ml-auto">
                <div className="absolute bg-indigo-800 h-[580px] sm:h-[500px] inset-y-[0] left-[0] my-auto rounded-[30px] w-full">
                  <div className="absolute sm:static flex md:flex-col flex-row md:gap-10 items-end sm:items-start justify-between right-[0] top-[7%] sm:w-full w-[92%]">
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-5 sm:m-6 ">
                      <Text
                        className="bg-clip-text bg-gradient sm:text-[31px] md:text-[33px] text-[35px] text-transparent"
                        size="txtSourceSansProBold35OrangeA200"
                      >
                        Floops
                      </Text>
                      <Text
                        className="mt-[193px] sm:mt-2 sm:text-[20px] md:text-[33px] text-[35px] text-white-A700 w-full"
                        size="txtSourceSansProBold35"
                      >
                        Landing page for Website Service
                      </Text>
                      <Line className="bg-white-A700 h-0.5 mt-[68px] sm:mt-2 w-[24%]" />
                    </div>
                    <Img
                      className="absolute sm:static left-[50%] top-[10%] h-[456px] md:h-auto "
                      src="images/img_group790.png"
                      alt="group790"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-red-A200 h-[580px] md:h-[690px] sm:h-[579px] mt-[110px] sm:mt-0 relative ml-auto rounded-[30px] w-[95%] md:w-full">
                <div className="flex flex-col h-full items-start justify-start ml-[101px] sm:ml-4 my-auto w-[26%] sm:w-[60%] pt-28 sm:pt-12">
                  <div className="flex flex-row gap-4 items-start justify-start w-[58%] sm:w-full md:w-full">
                    <Img
                      className="h-[38px] md:h-auto object-cover w-[31%] sm:w-[25%]"
                      src="images/img_group511.png"
                      alt="Group511"
                    />
                    <Img
                      className="h-8 mt-1 w-3/5"
                      src="images/img_insight.svg"
                      alt="Insight"
                    />
                  </div>
                  <Text
                    className="mt-[173px] sm:mt-4 sm:text-[20px] md:text-[33px] text-[35px] text-white-A700 w-full sm:w-full"
                    size="txtSourceSansProBold35"
                  >
                    Website for creative agency
                  </Text>
                  <Line className="bg-white-A700 h-0.5 mt-[68px] sm:mt-4 w-[24%]" />
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="h-[580px] relative w-full">
                    <Img
                      className="h-[580px] sm:hidden ml-auto my-auto object-cover sm:object-fill rounded-[30px] w-[32%]"
                      src="images/img_web192021.png"
                      alt="Web192021"
                    />
                    <Img
                      className="absolute sm:static h-[580px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-full"
                      src="images/img_web192021_580X1181.png"
                      alt="Web192021 One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-801 flex items-center justify-center mt-[110px] rounded-tr-[50px] sm:rounded-tr-none w-full py-5" />
        </div>
      </div>
    </>
  );
};

export default WorksPage;
