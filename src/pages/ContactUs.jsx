import React from "react";

function ContactUs() {
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/2 bg-[#D5828B]">
          <div className="pt-[11%] pr-[0%] pb-[10%] pl-[20%]">
            <div className=" elementor-widget-wrap elementor-element-populated p-4">
              <div
                className="elementor-element elementor-element-30af089 elementor-widget elementor-widget-heading"
                data-id="30af089"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="text-[48px] font-normal text-white leading-[53px] fontCopperplate">
                    Branch
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-5ef2c94 elementor-widget elementor-widget-text-editor mt-4"
                data-id="5ef2c94"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p className="text-white text-[24px] leading-[30px] font-medium">
                    Laveena Taphanhin
                  </p>
                  <p className="text-[16px] leading-[30px] font-medium text-white">
                    08:00 – 17:30 Everyday
                  </p>
                  <p className="text-[16px] leading-[30px] font-medium text-white">
                    Tel : 062.826.4941
                  </p>
                  <p className="text-[16px] leading-[30px] font-medium text-white">
                    <a
                      href="https://goo.gl/maps/b6fkQUFZuMYkgPxGA"
                      className="underline"
                    >
                      GET DIRECTION
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className=" elementor-widget-wrap elementor-element-populated p-4">
              <div
                className="elementor-element elementor-element-5ef2c94 elementor-widget elementor-widget-text-editor mt-4"
                data-id="5ef2c94"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p className="text-white text-[24px] leading-[30px] font-medium">
                    Laveena Meung Pichit
                  </p>
                  <p className="text-white text-[16px] leading-[30px] font-medium">
                    08:00 – 17:30 Everyday
                  </p>
                  <p className="text-[16px] leading-[30px] font-medium text-white">
                    Tel : 062.826.4941
                  </p>
                  <p className="text-[16px] leading-[30px] font-medium text-white">
                    <a
                      href="https://goo.gl/maps/zEaqd9JVD7Mj3jAEA"
                      className="underline"
                    >
                      GET DIRECTION
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 HomeMapSec"></div>
      </div>
    </>
  );
}

export default ContactUs;
