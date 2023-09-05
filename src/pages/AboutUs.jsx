import React from "react";
import AboutUsHeaderBgImg from "../img/about-us-cake-1.jpg";
import bannerTop1 from "../img/bannerTop1.png";
import bannerTop2 from "../img/bannerTop2.png";

function AboutUs() {
  return (
    <>
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden ">
          <img
            src={AboutUsHeaderBgImg}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        /> */}

        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-[100px] lg:px-0">
          <h1 className="text-4xl  text-white lg:text-5xl fontCopperplate">
            About us
          </h1>
          <p className="mt-4 text-xl text-white">
            Laveena เบเกอรี่ตำรับอเมริกัน รสชาติสไตล์ไทย
            แต่ละเมนูมีเรื่องราวจากหลายแหล่งที่มา
            พร้อมด้วยวัตถุดิบที่คัดสรรมาอย่างพิถีพิถัน ตามแบบฉบับ HOME MADE
            โดยเรายืนยันที่จะไม่เติมสารแต่งรสเกินจำเป็น… เพื่อให้ Laveena
            เป็นรสเบเกอรี่ที่มีความเป็นธรรมชาติ คุ้นลิ้นคนไทยโดยแท้
          </p>
        </div>
      </div>

      <div className="sm:flex my-20 justify-center md:w-[1290px] mx-auto items-center flex-wrap gap-y-7">
        <div className="sm:w-1/2">
          <img className="rounded-2xl" src={bannerTop1} alt="" />
        </div>
        <div className="sm:w-1/2 sm:pl-[120px] sm:pr-[20px]">
          <h2 className="text-[48px] font-normal leading-[48px] text-black fontCopperplate">
            A Perfect Delicious From Taphanhin
          </h2>
          <p
            className="text-[20px] mt-5 font-normal leading-[30px] text-black"
            style={{ fontFamily: "Noto Sans Thai" }}
          >
            ร้าน “Laveena” ปรุงขนมทุกจานด้วยความตั้งใจ คัดสรรเมนูอร่อย มีคุณภาพ
            ปรุงด้วยวัตถุดิบชั้นดี อีกทั้งด้วยบรรยากาศของร้าน
            ที่อบอุ่นเป็นกันเอง ทุกคนจึงรู้สึกดีเหมือน ได้นั่งทานขนมอร่อยๆ
            ในเวลาพักผ่อนได้อย่างสบายใจ
          </p>
          <button className="bg-[#D5828B] text-[20px] font-normal leading-[14px] text-white rounded-lg py-5 px-7 mt-7">
            ติดต่อและสั่งซื้อ
          </button>
        </div>

        <div className="sm:w-1/2 sm:pl-[80px] sm:pr-[100px]">
          <h2 className="text-[48px] font-normal leading-[48px] text-black fontCopperplate">
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
    </>
  );
}

export default AboutUs;
