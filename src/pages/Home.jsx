import React from 'react'
import bannerTop1 from '../img/bannerTop1.png'
import bannerTop2 from '../img/bannerTop2.png'
import unitedStates1 from '../img/united-states-1.png'
import unitedStates2 from '../img/united-states-2.png'
import unitedStates3 from '../img/united-states-3.png'
import unitedStates4 from '../img/united-states-4.png'

function Home() {
  return (
    <>
    <div className='sm:flex my-20 justify-center md:w-[1290px] mx-auto items-center flex-wrap gap-y-7'>
      <div className='sm:w-1/2'>
        <img className='rounded-2xl' src={bannerTop1} alt="" />
      </div>
      <div className='sm:w-1/2 sm:pl-[120px] sm:pr-[20px]'>
        <h2 className='text-[48px] font-normal leading-[48px] text-black'>FINEST AMERICAN BAKING</h2>
        <p className='text-[20px] mt-5 font-normal leading-[30px] text-black'>“Laveena” ปรุงขนมทุกจานด้วยความตั้งใจ คัดสรรเมนูอร่อย มีคุณภาพ ปรุงด้วยวัตถุดิบชั้นดี อีกทั้งด้วยบรรยากาศของร้าน ที่อบอุ่นเป็นกันเอง ทุกคนจึงรู้สึกดีเหมือนได้นั่งทานขนมอร่อยๆ ในเวลาพักผ่อนได้อย่างสบายใจ</p>
        <button className='bg-[#D5828B] text-[20px] font-normal leading-[14px] text-white rounded-lg py-5 px-7 mt-7'>ติดต่อและสั่งซื้อ</button>
      </div>

      <div className='sm:w-1/2 sm:pl-[80px] sm:pr-[100px]'>
        <h2 className='text-[48px] font-normal leading-[48px] text-black'>OUR STORY</h2>
        <p className='text-[20px] mt-5 font-normal leading-[30px] text-black'>“Finest American Baking” เป็นคำจำกัดความของ Laveena ที่หมายถึงการที่เราเสิร์ฟเมนูที่ได้เรียนมาจากตำรับอเมริกันโดยแท้ ทุกเมนูล้วนเป็นกรรมวิธีการปรุงแบบอเมริกัน แต่พัฒนา ปรับปรุงรสชาติให้ออกมาแบบสไตล์ไทย ในแบบที่ทุกคนคุ้นเคย ไม่ว่าจะเป็น เค้ก พาย ขนมปัง และเมนูนางเอกของเรา อเมริกันวาฟเฟิ่ล ที่ Marlene ตั้งใจสอนและบันทึกลงบนแผ่นกระดาษด้วยลายมือให้เรากลับมาเป็นของฝากให้กับทุกคนที่บ้าน</p>
        <button className='bg-[#D5828B] text-[20px] font-normal leading-[14px] text-white rounded-lg py-5 px-7 mt-7'>ติดต่อและสั่งซื้อ</button>
      </div>
      <div className='sm:w-1/2'>
        <img className='rounded-2xl' src={bannerTop2} alt="" />
      </div>
    </div>

    <div className=' md:w-[1290px] mx-auto'>
      <h2 className='text-center text-[48px] font-normal leading-[53px]'>SIGNATURE MENU</h2>
      <div className='mt-10 flex'>
        <div className='bg-[#E7EBDE] w-1/4 text-center px-10'>
          <img className='w-[34px] h-[34px] mx-auto mt-14' src={unitedStates1} alt="" />
          <p className='text-[24px] text-[#727574] mt-5 font-normal leading-[40px]'>อเมริกันวาฟเฟิล</p>
          <h3 className='mt-5 text-[34px] leading-[46px] font-bold font-sans'>AMERICAN WAFFLE</h3>
        </div>
        <div className='bg-[#FDFAF6] w-1/4 text-center px-10'>
          <img className='w-[34px] h-[34px] mx-auto mt-14' src={unitedStates2} alt="" />
          <p className='text-[24px] text-[#727574] mt-5 font-normal leading-[40px]'>อเมริกันวาฟเฟิล</p>
          <h3 className='mt-5 text-[34px] leading-[46px] font-bold font-sans'>AMERICAN WAFFLE</h3>
        </div>
        <div className='bg-[#E7EBDE] w-1/4 text-center px-10'>
          <img className='w-[34px] h-[34px] mx-auto mt-14' src={unitedStates3} alt="" />
          <p className='text-[24px] text-[#727574] mt-5 font-normal leading-[40px]'>อเมริกันวาฟเฟิล</p>
          <h3 className='mt-5 text-[34px] leading-[46px] font-bold font-sans'>AMERICAN WAFFLE</h3>
        </div>
        <div className='bg-[#FDFAF6] w-1/4 text-center px-10'>
          <img className='w-[34px] h-[34px] mx-auto mt-14' src={unitedStates4} alt="" />
          <p className='text-[24px] text-[#727574] mt-5 font-normal leading-[40px]'>อเมริกันวาฟเฟิล</p>
          <h3 className='mt-5 text-[34px] leading-[46px] font-bold font-sans'>AMERICAN WAFFLE</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home