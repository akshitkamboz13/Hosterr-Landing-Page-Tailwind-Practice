import React from "react";

function Body() {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:pt-28 lg:gap-28 lg:justify-around">
      <div className="flex justify-center my-[50px] mx-12 ">
        <img
          src="../../Assets/Blue Shape.svg"
          alt="Blue"
          className=" h-64 md:h-80 lg:h-96 -rotate-[45deg]"
        />
        <img
          src="../../Assets/Pink Shape.svg"
          alt="Pink"
          className="absolute h-64 md:h-80 lg:h-96 -rotate-[30deg]"
        />
        <img
          src="../../Assets/Purple Shape.svg"
          alt="Purple"
          className="absolute h-64 md:h-80 lg:h-96 -rotate-[15deg]"
        />
        <img
          src="../../Assets/Hero Image (Model).png"
          alt="Hero"
          className="absolute h-64 lg:h-96 md:h-80"
        />
      </div>
      <div>
      <div>
        <h1 className="font-bold font-Playfair text-5xl lg:text-7xl leading-normal ">Host your website in less than 5 minutes.</h1>
        <p className="font-Lato my-2 text-gray-500 text-lg ">
          With Hosterr, get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online.
        </p>
      </div>
      <div>
        <form action="#" className="flex flex-col md:flex-row md:gap-4">
          <input
            type="text"
            placeholder="Enter e-mail address"
            className="border border-none rounded-md p-4 lg:w-96 lg:p-7 my-4 "
          />
          <button className="bg-blue-600 text-white rounded-md p-4 hover:bg-blue-700 md:my-4 ">
            Join Waitlist
          </button>
        </form>
      </div>
      <div className="flex my-4">
        <img src="../../Assets/Checkmark.svg" alt="Check" className="mx-3" />
      <p className="font-Lato my-2 text-gray-500 text-lg">
      No spam, ever. Unsubscribe anytime.</p>
      </div>
      </div>
    </div>
  );
}

export default Body;
