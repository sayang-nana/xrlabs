import React, { useState, useRef, useEffect } from 'react';
import ARIcon from "../assets/AR_icon.svg";
import VRIcon from "../assets/VR_icon.svg";
import aloevera from "../assets/aloevera.svg";
import homeButton from "../assets/HomeBtn.svg";
import line15 from "../assets/Line_15.svg";
import menu from "../assets/Menu.png";
import closeIcon from "../assets/Menu.png";







export const CoursePage = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const modelRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const scrollToModel = () => {
        if (modelRef.current) {
            modelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const section = modelRef.current;
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      
      <div className="bg-[#cdffaa] flex flex-row justify-center w-full">
        <div className="bg-[#cdffaa] overflow-hidden w-[1440px] h-[7286px] relative">
          <div className="absolute w-full h-[965px] top-[356px] left-0 bg-[url(/fresh-aloe-vera-plant-isolated-white-vibrant-aloe-vera-plant-water-droplets-showcased-pure-white-background-325502035-1.svg)] bg-cover bg-center z-0">
          </div>


          {/* Introduction*/}          
          <section id="brief-intro" className="mt-10">
          <div className="absolute w-full top-[400px] left-0 z-10 text-center">
            <img
                className="absolute w-[1107px] h-[737.54px] top-[50px] left-[212px] object-cover"
                alt="Fresh aloe vera"
                src={aloevera}
            />
            <h1 className="[-webkit-text-stroke:5px_#ffffff] [font-family:'Hojas_de_plata',Helvetica] font-normal text-black text-[220px] tracking-[22.00px] leading-[normal] whitespace-nowrap relative z-20">
                Aloe Vera
            </h1>
            <h2 className="[font-family:'Poly-Italic',Helvetica] font-normal italic text-black text-[50px] tracking-[-0.50px] leading-[normal] whitespace-nowrap relative z-20">
                Aloe vera (L.) Burm.f.
            </h2>
          </div>
              <div className="absolute w-[1297px] h-auto top-[1447px] left-[76px] bg-[#ffffffc4] p-20 rounded-lg shadow-lg">
                  <p className="transition-all duration-[0.2s] ease-[ease] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[28px] text-left tracking-[0.38px] leading-[39px] opacity-100 scale-110">
                      <span className="tracking-[0.14px]">
                          Hey there! Let me tell you about a super cool plant called{" "}
                      </span>

                      <span className="[font-family:'Poppins-Bold',Helvetica] font-bold tracking-[0.14px]">
                          Aloe vera
                      </span>

                      <span className="tracking-[0.14px]">
                          . Think of it like a special plant superhero that's been
                          helping people stay healthy for thousands of years!
                          <br />
                          <br />
                          It's like a cactus with thick, squishy leaves filled with a clear gel. People
                          use this gel like nature's band-aid - it helps make cuts feel better and
                          keeps skin healthy. In ancient times, kings and queens in Egypt even
                          called it the "plant of immortality" because they thought it was magical!
                          <br />
                          <br />
                          Today, we still use Aloe vera in lots of ways - in skin creams,
                          drinks, and medicine. It's like having a natural first-aid kit
                          growing right in your garden!
                      </span>
                  </p>
              </div>
          </section>
  
          <div className="absolute w-[1355px] h-[784px] top-[2393px] left-[85px]">
            <div className="absolute w-[508px] h-[565px] top-[113px] left-[763px]">
            </div>
            {/* 3D model */}
            <section ref={modelRef} id="3D-Model" className={`mt-10 fade-in ${isVisible ? 'visible' : ''}`}>
                <img
                    className="absolute w-[1107px] h-[737.54px] top-[100px] left-[312px] object-cover z-0"
                    alt="Fresh aloe vera"
                    src={aloevera}
                />
                <p className="absolute w-[678px] top-0 left-0 bg-white bg-opacity-50 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[26px] tracking-[0] leading-[33px] pl-2 pr-4 pt-4 pb-4 z-10">
                    <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[26px] tracking-[0] leading-[33px]">
                        Aloe vera is a succulent plant known for its medicinal properties.
                        It is characterized by:
                        <br />
                        <br />
                    </span>

                    <span className="[font-family:'Poppins-Bold',Helvetica] font-bold">
                        Stem
                    </span>

                    <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[26px] tracking-[0] leading-[33px]">
                        : Aloe vera typically has a short, stout stem, often hidden under
                        the rosette of leaves. Some varieties may have a slightly longer
                        stem, but it&#39;s generally not a prominent feature.
                        <br />
                        <br />
                    </span>

                    <span className="[font-family:'Poppins-Bold',Helvetica] font-bold">
                        Leaves
                    </span>

                    <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[26px] tracking-[0] leading-[33px]">
                        : Thick, fleshy, and lance-shaped with serrated edges. They are
                        typically green to gray-green with white flecks.
                        <br />
                        <br />
                    </span>

                    <span className="[font-family:'Poppins-Bold',Helvetica] font-bold">
                        Flowers
                    </span>

                    <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[26px] tracking-[0] leading-[33px]">
                        : Aloe vera produces tall flower stalks with clusters of tubular
                        flowers. The flowers are typically yellow or orange, but some
                        varieties may have red or pink flowers.  <br />
                        <br />
                    </span>

                    <span className="[font-family:'Poppins-Bold',Helvetica] font-bold">
                        Gel
                    </span>

                    <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[26px] tracking-[0] leading-[33px]">
                        : The inner part of the leaf contains a clear, gel-like substance
                        that is rich in nutrients and has various medicinal properties.
                    </span>
                </p>
            </section>
          </div>
  
          {/* Navbar */}
          <section id="navbar" className="fixed top-0 left-0 w-full h-24 bg-[#212121] z-50">
              <img
                  className="absolute w-px h-[76px] top-2.5 left-[110px] object-cover"
                  alt="Line"
                  src={line15}
              />

              <p className="absolute top-[31px] left-[136px] z-10 [font-family:'Poppins-Regular',Helvetica] font-bold text-[30px] text-white text-center leading-[36px] whitespace-nowrap">
                  Aloe vera: A Succulent with Healing Powers
              </p>

              <img
                  className="absolute w-[75px] h-[54px] top-[18px] left-[11px]"
                  alt="Home button"
                  src={homeButton}
              />

              <img
                  className="absolute w-[50px] h-[50px] top-5 right-5 cursor-pointer"
                  alt="Menu"
                  src={menu}
                  onClick={toggleDropdown}
              />
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                  <div className="absolute top-10 right-[80px] bg-white shadow-lg rounded-lg p-5 z-50 transform scale-105">
                     <h3 className="text-[40px] font-bold mb-2">Course Modules</h3>
                     <div className="border-b border-black mb-2" />
                     <ul className="list-none">
                          <li onClick={closeDropdown} className="py-2 px-4 cursor-pointer hover:bg-gray-300 text-[31px]">Introduction</li>
                          <li onClick={closeDropdown} className="py-2 px-4 cursor-pointer hover:bg-gray-300 text-[31px]">3D Model</li>
                          <li onClick={closeDropdown} className="py-2 px-4 cursor-pointer hover:bg-gray-300 text-[31px]">Benefits of Aloe Vera</li>
                          <li onClick={closeDropdown} className="py-2 px-4 cursor-pointer hover:bg-gray-300 text-[31px]">Immersive Interaction</li>
                          <li onClick={closeDropdown} className="py-2 px-4 cursor-pointer hover:bg-gray-300 text-[31px]">Quiz</li>
                      </ul>
                  </div>
              )}
          </section>
  
          <section id="benefits" className="mt-10">
            <div className="absolute w-[1304px] h-[930px] top-[3803px] left-[62px] bg-white rounded-[15px]">
                <p className="absolute w-[1240px] top-[25px] left-[38px] [font-family:'Poppins-Bold',Helvetica] font-normal text-black text-[32px] tracking-[-0.96px] leading-[51px]">
                    <span className="font-bold tracking-[-0.31px]">Soothes Skin</span>

                    <span className="[font-family:'Poppins-Regular',Helvetica] tracking-[-0.31px]">
                        : Aloe vera gel is widely known for its soothing properties on the
                        skin. It can help relieve sunburn, minor burns, cuts, scrapes, and
                        irritation.  <br />
                        <br />
                    </span>

                    <span className="font-bold tracking-[-0.31px]">
                        Moisturizes Skin
                    </span>

                    <span className="[font-family:'Poppins-Regular',Helvetica] tracking-[-0.31px]">
                        : Aloe vera gel is a natural moisturizer that can help hydrate and
                        soften the skin. It can be particularly beneficial for dry, flaky
                        skin.
                        <br />
                        <br />
                    </span>

                    <span className="font-bold tracking-[-0.31px]">
                        Promotes Wound Healing
                    </span>

                    <span className="[font-family:'Poppins-Regular',Helvetica] tracking-[-0.31px]">
                        : Aloe vera contains compounds that may help speed up the healing
                        process of minor wounds.
                        <br />
                        <br />
                    </span>

                    <span className="font-bold tracking-[-0.31px]">
                        Reduces Inflammation
                    </span>

                    <span className="[font-family:'Poppins-Regular',Helvetica] tracking-[-0.31px]">
                        : It has anti-inflammatory properties that can help reduce redness
                        and swelling associated with various skin conditions.
                        <br />
                        <br />
                    </span>

                    <span className="font-bold tracking-[-0.31px]">
                        May Improve Digestive Health
                    </span>

                    <span className="[font-family:'Poppins-Regular',Helvetica] tracking-[-0.31px]">
                        : Some studies suggest that Aloe vera may have beneficial effects
                        on digestion, such as relieving constipation.
                        <br />
                        <br />
                    </span>

                    <span className="font-bold tracking-[-0.31px]">
                        May Boost Immunity
                    </span>

                    <span className="[font-family:'Poppins-Regular',Helvetica] tracking-[-0.31px]">
                        : Some research suggests that Aloe vera may have immune-boosting
                        properties, although more research is needed.
                    </span>
                </p>
            </div>

            <div className="absolute w-[1303px] h-[150px] top-[3590px] left-[62px]">
                <div className="relative w-[1301px] h-[150px]">
                    <div className="absolute w-[1297px] h-[150px] top-0 left-1 bg-[#ffffffc4]" />

                    <p className="absolute w-[1297px] top-[60px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[65px] text-center tracking-[-0.90px] leading-[42px]">
                        Benefits Of Aloe Vera
                    </p>
                </div>
            </div>
          </section>
  
          <section id="AR_VR" className="relative">
              <div className="absolute w-[1304px] h-[114px] top-[5000px] left-[62px] bg-[#ffffffc4]">
                  <p className="absolute w-[1240px] top-[35px] left-[38px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[49px] tracking-[-1.47px] leading-[42px] whitespace-nowrap">
                      Time for some Interactive and Immersive Experience!
                  </p>
              </div>

              <div className="absolute w-[266px] h-[69px] top-[5900px] left-[264px]">
                  <div className="relative w-[298px] h-[95px] bg-white rounded-[30px] border border-solid border-black shadow-[8px_8px_4px_#00000040]">
                      <div className="absolute w-[127px] top-6 left-[90px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[32px] tracking-[-0.96px] leading-[42px] whitespace-nowrap">
                          Enter AR
                      </div>
                  </div>
              </div>

              <div className="absolute w-[266px] h-[69px] top-[5900px] left-[944px]">
                  <div className="relative w-[298px] h-[95px] bg-white rounded-[30px] border border-solid border-black shadow-[8px_8px_4px_#00000040]">
                      <div className="absolute w-[127px] top-[25px] left-[90px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[32px] tracking-[-0.96px] leading-[42px] whitespace-nowrap">
                          Enter VR
                      </div>
                  </div>
              </div>
          </section>
  
          <section id="take-quiz-button" className="relative">
              <div className="absolute w-[1304px] h-[114px] top-[6300px] left-[62px] bg-[#ffffffc4]">
                  <p className="absolute w-[1331px] top-[35px] left-[35%] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[53px] tracking-[-1.59px] leading-[42px] whitespace-nowrap">
                      Time for some QUIZ
                  </p>
              </div>

              <div className="absolute w-[360px] h-[46px] top-[2042px] left-[1658px] bg-[#333333c4]" />

              <div className="absolute w-[300px] h-[95px] top-[6700px] left-[578px]">
                  <div className="relative w-[298px] h-[95px] bg-white rounded-[25px] border border-solid border-black shadow-[8px_8px_4px_#00000040] transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer">
                      <div className="absolute w-[154px] top-[29px] left-[71px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[32px] tracking-[-0.96px] leading-[42px] whitespace-nowrap">
                          TAKE QUIZ
                      </div>
                  </div>
              </div>
          </section>
  
          <section id="3d-model-heading" className="relative">
              <div className="absolute w-[1439px] h-[114px] top-[2042px] left-0 bg-[#ffffffc4]">
                  <p className="absolute w-[706px] top-9 left-1/2 transform -translate-x-1/2 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[57px] tracking-[-1.71px] leading-[42px] whitespace-nowrap">
                      Check Out This 3D model!
                  </p>
              </div>

              <p className="absolute w-[618px] top-[2283px] left-[76px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[44px] tracking-[0] leading-[44.4px] whitespace-nowrap">
                  Aloe vera: Nature&#39;s First Aid
              </p>
          </section>
  
          <section id="ar_vr-icon" className="relative">
              <div className="absolute w-[566px] h-[566px] top-[5200px] left-[113px] bg-white rounded-[68px] border border-solid border-black shadow-[inset_10px_10px_4px_#00000040]">
                  <img
                      className="absolute w-[314px] h-[314px] top-[132px] left-[132px] transition-all duration-[0.2s] ease-linear object-cover"
                      alt="AR icon"
                      src={ARIcon}
                  />
              </div>

              <div className="absolute w-[566px] h-[566px] top-[5200px] left-[793px] bg-white rounded-[68px] border border-solid border-black shadow-[inset_10px_10px_4px_#00000040]">
                  <img
                      className="absolute w-[314px] h-[314px] top-[132px] left-[132px] transition-all duration-[0.2s] ease-linear object-cover"
                      alt="VR icon"
                      src={VRIcon}
                  />
              </div>
          </section>
        </div>
      </div>
    );
  };