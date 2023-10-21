import leftImage from "../../assets/customer/left.svg";
import rightImage from "../../assets/customer/right.svg";
import man2 from "../../assets/customer/man3.png";
import man3 from "../../assets/customer/man3.png";
import man4 from "../../assets/customer/man4.png";
import man5 from "../../assets/customer/man5.png";
import man6 from "../../assets/customer/man6.png";
import officer from "../../assets/customer/officer.png";
import star from "../../assets/customer/star.png";

const Customer = () => {
  return (
    <div className="container mx-auto mt-28 md:mt-16 lg:mt-32 mb-20 md:mb-16 lg:mb-32 p-4 md:p-6 lg:p-0 relative">
      {/*  */}
      <img
        className="hidden lg:block absolute top-[50%] left-[10%] translate-x-[-50%] translate-y-[-50%]"
        src={leftImage}
        alt=""
      />
      <img
        className="hidden lg:block absolute top-[50%] right-[-10%] translate-x-[-50%] translate-y-[-50%]"
        src={rightImage}
        alt=""
      />
      <div className="absolute top-[10%] left-[20%] translate-x-[-50%] translate-y-[-50%] ps-1 md:ps-2 pt-1 md:pt-2 pe-4 md:pe-6 pb-1 md:pb-2  rounded-s-full bg-[#A5A4F7] bg-opacity-25">
        <img
          className="rounded-full border-2 border-[#FFF]"
          src={man2}
          alt=""
        />
      </div>
      <div className="absolute top-[70%] lg:top-[80%] right-[-2%] translate-x-[-50%] translate-y-[-50%] ps-1 md:ps-2 pt-4 md:pt-6 pe-1 md:pe-2 pb-1 md:pb-2  rounded-b-full bg-[#A5A4F7] bg-opacity-25">
        <img
          className="rounded-full border-2 border-[#FFF]"
          src={man3}
          alt=""
        />
      </div>
      <div className="absolute top-[-5%] md:top-[1%] left-[4%] translate-x-[-50%] translate-y-[-50%] ps-2 pt-2 pe-2 pb-6  rounded-t-full bg-[#A5A4F7] bg-opacity-20">
        <img
          className="rounded-full border-2 border-[#FFF]"
          src={man4}
          alt=""
        />
      </div>
      <img
        className="absolute top-[97%] left-[90%] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-[#FFF]"
        src={man5}
        alt=""
      />
      <img
        className="absolute top-[80%] md:top-[90%] right-[80%] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-[#FFF]"
        src={man6}
        alt=""
      />

      <div className="flex flex-row gap-2 absolute top-[-4%] md:top-[10%] right-[-12%] md:right-[5%] translate-x-[-50%] translate-y-[-50%]  border-2 border-[#FFF] p-3 drop-shadow-sm rounded-md">
        <div>
          <img className="rounded-full" src={officer} alt="" />
        </div>
        <div>
          <p className="text-[10px] font-semibold m-0 text-[#5248AA]">
            Herbert Alison
          </p>
          <p className="text-[8px] text-[#596F6C] mb-0.5">Happy Customer</p>
          <img src={star} alt="" />
        </div>
      </div>

      {/*  */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold text-[#29273E]">
        More then <br />
        <span className="text-[#F15E2D]">100000+</span> happy customers
      </h2>
      <p className="text-sm md:text-lg text-center text-[#818186] mt-3 lg:mt-5">
        Do you know what could beat the exciting felling of having a new
        computer? <br /> Make you own making your own computer from scratch is
        not only fun to do <br /> but cheaper as well.
      </p>
      <div className="text-center mt-8 lg:mt-12">
        <button className="px-6 md:px-8 lg:px-14 py-2 md:py-3 lg:py-5 bg-[#F15E2D] text-[#FFFFFF] border border-[#F15E2D] hover:text-[#F15E2D] hover:bg-[#FFF] duration-300 text-sm  md:text-base font-bold rounded-md">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Customer;
