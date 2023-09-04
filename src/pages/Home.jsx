import React from "react";
import bannerTop1 from "../img/bannerTop1.png";
import bannerTop2 from "../img/bannerTop2.png";
import unitedStates1 from "../img/united-states-1.png";
import unitedStates2 from "../img/united-states-2.png";
import unitedStates3 from "../img/united-states-3.png";
import unitedStates4 from "../img/united-states-4.png";
import AmericanWaffle from "../img/American_Waffle.png";
import BelgiumChocolateCake from "../img/BelgiumFlouelessChocolateCake.png";
import COCONUTPIE1 from "../img/COCONUT-PIE-1.png";
import SanKaYa1 from "../img/San-Ka-Ya_1.png";
import PuddingChocolateCake from "../img/PuddingChocolateCake.jpg";
import ChocolateMousseCake from "../img/ChocolateMousseCake.jpg";
import ORIGINALMILO from "../img/ORIGINALMILO.png";
import BirthdayCake1 from "../img/BirthdayCake1.png";
import BirthdayCake2 from "../img/BirthdayCake2.png";
import BirthdayCake3 from "../img/BirthdayCake3.png";

function Home() {
  const products = [
    {
      id: 1,
      name: "Belgium Flourless Chocolate Cake",
      price: "149.00",
      href: "#",
      imageSrc: BelgiumChocolateCake,
      imageAlt: "Hand stitched, orange leather long wallet.",
    },
    {
      id: 1,
      name: "Pudding Chocolate Cake",
      price: "500.00",
      href: "#",
      imageSrc: PuddingChocolateCake,
      imageAlt: "Hand stitched, orange leather long wallet.",
    },
    {
      id: 1,
      name: "Chocolate Mousse Cake",
      price: "500.00",
      href: "#",
      imageSrc: ChocolateMousseCake,
      imageAlt: "Hand stitched, orange leather long wallet.",
    },
    {
      id: 1,
      name: "ORIGINAL MILO",
      price: "500.00",
      href: "#",
      imageSrc: ORIGINALMILO,
      imageAlt: "Hand stitched, orange leather long wallet.",
    },
  ];
  return (
    <>
      <div className="sm:flex my-20 justify-center md:w-[1290px] mx-auto items-center flex-wrap gap-y-7">
        <div className="sm:w-1/2">
          <img className="rounded-2xl" src={bannerTop1} alt="" />
        </div>
        <div className="sm:w-1/2 sm:pl-[120px] sm:pr-[20px]">
          <h2 className="text-[48px] font-normal leading-[48px] text-black">
            FINEST AMERICAN BAKING
          </h2>
          <p className="text-[20px] mt-5 font-normal leading-[30px] text-black">
            “Laveena” ปรุงขนมทุกจานด้วยความตั้งใจ คัดสรรเมนูอร่อย มีคุณภาพ
            ปรุงด้วยวัตถุดิบชั้นดี อีกทั้งด้วยบรรยากาศของร้าน
            ที่อบอุ่นเป็นกันเอง ทุกคนจึงรู้สึกดีเหมือนได้นั่งทานขนมอร่อยๆ
            ในเวลาพักผ่อนได้อย่างสบายใจ
          </p>
          <button className="bg-[#D5828B] text-[20px] font-normal leading-[14px] text-white rounded-lg py-5 px-7 mt-7">
            ติดต่อและสั่งซื้อ
          </button>
        </div>

        <div className="sm:w-1/2 sm:pl-[80px] sm:pr-[100px]">
          <h2 className="text-[48px] font-normal leading-[48px] text-black">
            OUR STORY
          </h2>
          <p className="text-[20px] mt-5 font-normal leading-[30px] text-black">
            “Finest American Baking” เป็นคำจำกัดความของ Laveena
            ที่หมายถึงการที่เราเสิร์ฟเมนูที่ได้เรียนมาจากตำรับอเมริกันโดยแท้
            ทุกเมนูล้วนเป็นกรรมวิธีการปรุงแบบอเมริกัน แต่พัฒนา
            ปรับปรุงรสชาติให้ออกมาแบบสไตล์ไทย ในแบบที่ทุกคนคุ้นเคย ไม่ว่าจะเป็น
            เค้ก พาย ขนมปัง และเมนูนางเอกของเรา อเมริกันวาฟเฟิ่ล ที่ Marlene
            ตั้งใจสอนและบันทึกลงบนแผ่นกระดาษด้วยลายมือให้เรากลับมาเป็นของฝากให้กับทุกคนที่บ้าน
          </p>
          <button className="bg-[#D5828B] text-[20px] font-normal leading-[14px] text-white rounded-lg py-5 px-7 mt-7">
            ติดต่อและสั่งซื้อ
          </button>
        </div>
        <div className="sm:w-1/2">
          <img className="rounded-2xl" src={bannerTop2} alt="" />
        </div>
      </div>

      <div className=" md:w-[1290px] mt-32 mx-auto">
        <h2 className="text-center text-[48px] font-normal leading-[53px]">
          SIGNATURE MENU
        </h2>
        <div className="mt-10 flex">
          <div className="bg-[#E7EBDE] w-1/4 text-center px-8">
            <img
              className="w-[34px] h-[34px] mx-auto mt-14"
              src={unitedStates1}
              alt=""
            />
            <p className="text-[24px] text-[#727574] mt-5 font-normal leading-[40px]">
              อเมริกันวาฟเฟิล
            </p>
            <h3 className="mt-5 text-[32px] min-h-[300px] leading-[46px] font-bold font-sans">
              AMERICAN WAFFLE
            </h3>
            <img
              src={AmericanWaffle}
              className="w-[251px] h-[210px] object-cover"
              alt=""
            />
            <h4 className="text-[48px] leading-[48px] font-bold min-h-[200px] text-black mt-5">
              89.-
            </h4>

            <a
              href="#"
              class="inline-block text-xl font-normal px-7 py-4 bg-[#D58288] text-white text-uppercase rounded-[10px] transition duration-200"
            >
              View More
            </a>
          </div>

          <div className="bg-[#FDFAF6] pb-16 w-1/4 text-center px-8">
            <img
              className="w-[34px] h-[34px] mx-auto mt-14"
              src={unitedStates2}
              alt=""
            />
            <p className="text-[24px] text-[#727574] mt-5 font-normal leading-[40px]">
              เบลเยี่ยมช็อคไร้แป้ง
            </p>
            <h3 className="mt-5 text-[32px] min-h-[300px] leading-[46px] font-bold font-sans">
              BELGIUM FLOURLESS CHOCOLATE CAKE
            </h3>
            <img
              src={BelgiumChocolateCake}
              className="w-[251px] h-[210px] object-cover"
              alt=""
            />
            <h4 className="text-[48px] leading-[48px] font-bold min-h-[200px] text-black mt-5">
              149.-
            </h4>

            <a
              href="#"
              class="inline-block text-xl font-normal px-7 py-4 bg-[#D58288] text-white text-uppercase rounded-[10px] transition duration-200"
            >
              View More
            </a>
          </div>
          <div className="bg-[#E7EBDE] w-1/4 text-center px-8">
            <img
              className="w-[34px] h-[34px] mx-auto mt-14"
              src={unitedStates3}
              alt=""
            />
            <p className="text-[24px] text-[#727574] mt-5 font-normal leading-[40px]">
              พายฝรั่งเศสไส้มะพร้าวอ่อน
            </p>
            <h3 className="mt-5 text-[32px] min-h-[300px] leading-[46px] font-bold font-sans">
              COCONUT FRENCH PIE
            </h3>
            <img
              src={COCONUTPIE1}
              className="w-[215px] h-[170px] object-cover"
              alt=""
            />
            <h4 className="text-[48px] leading-[48px] font-bold min-h-[200px] text-black mt-5">
              149.-
            </h4>

            <a
              href="#"
              class="inline-block text-xl font-normal px-7 py-4 bg-[#D58288] text-white text-uppercase rounded-[10px] transition duration-200"
            >
              View More
            </a>
          </div>
          <div className="bg-[#FDFAF6] w-1/4 text-center px-8">
            <img
              className="w-[34px] h-[34px] mx-auto mt-14"
              src={unitedStates4}
              alt=""
            />
            <p className="text-[24px] text-[#727574] mt-5 font-normal leading-[40px]">
              เค้กสังขยา
            </p>
            <h3 className="mt-5 text-[32px] min-h-[300px] leading-[46px] font-bold font-sans">
              SAN KA YA
            </h3>
            <img
              src={SanKaYa1}
              className="w-[251px] h-[210px] object-cover"
              alt=""
            />
            <h4 className="text-[48px] leading-[48px] font-bold min-h-[200px] text-black mt-5">
              199.-
            </h4>

            <a
              href="#"
              class="inline-block text-xl font-normal px-7 py-4 bg-[#D58288] text-white text-uppercase rounded-[10px] transition duration-200"
            >
              View More
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-[1100px] lg:px-8">
          <div className="">
            <h2 className="text-center text-[48px] font-normal leading-[53px]">
              BEST SELLER
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-4 lg:mt-16">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-64">
                  <img
                    src={product.imageSrc}
                    className="h-[230px] w-[230px] rounded-[20px] object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-[21px] font-semibold text-[#3c0603]">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="mt-2 text-base font-medium text-[#d5828b]">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-sm text-center">
            <a
              href="#"
              class="inline-block text-xl font-normal px-7 py-4 bg-[#D58288] text-white text-uppercase rounded-[10px] transition duration-200"
            >
              VIEW ALL MENU
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#D5828B] py-[60px]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-center text-[48px] font-normal text-white leading-[53px]">
            BEST SELLER
          </h2>
          <p className="text-[20px] leading-[30px] text-white text-center mt-[40px] px-[150px]">
            Birthday Fresh cream cake from Laveena Cake Box is sure to make
            their birthday even more special.
          </p>
          <div className="flex justify-between items-center mt-[60px]">
              <img src={BirthdayCake1} className="w-[295px] h-[250px] object-cover" alt="" />
              <img src={BirthdayCake2} className="w-[256px] h-[259px] object-cover"  alt="" />
              <img src={BirthdayCake3} className="w-[300px] h-[304px] object-cover"  alt="" />
          </div>
          
          <div className="mt-[50px] text-sm text-center">
            <a
              href="#"
              class="inline-block text-xl font-normal px-7 py-4 text-[#D58288] bg-white text-uppercase rounded-[10px] transition duration-200"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
