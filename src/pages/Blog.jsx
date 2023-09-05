import React from "react";
import AboutUsHeaderBgImg from "../img/about-us-cake-1.jpg";


function Blog() {
  return (
    <>
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden "
        >
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
            BLOGS
          </h1>
          <p className="mt-4 text-xl text-white">
            ทางเลือกใหม่ของผู้นิยมเบเกอรี่ หวานน้อย จากการผลิตแบบ home made
            ตำรับครัวอเมริกัน
            พิถีพิถันกับทุกขั้นตอนและด้วยความใส่ใจในความต้องการของลูกค้า Laveena
            จึงมีเมนูออกใหม่ในทุกๆปี และมีเมนูพิเศษในทุก ๆ ฤดูกาล
          </p>
          
        </div>
      </div>
    </>
  );
}

export default Blog;
