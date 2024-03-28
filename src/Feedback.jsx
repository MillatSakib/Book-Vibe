import React from "react";

const Feedback = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-[99%] md:w-[95%] lg:w-[90%] mx-auto mt-20 items-center bg-gray-100 py-24 px-16 rounded-xl mb-10">
      <div className="w-[95%] lg:w-[60%]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl w-[65%] font-bold mb-6 text-green-500">
          We would love to hear you!
        </h2>
        <h2 className="text-left w-[85%] font-semibold">
          Please share your experience with our product/service. Your feedback
          helps us improve and provide better experiences for you and others.
          Thank you for taking the time to share your thoughts with us!
        </h2>
      </div>
      <div className="w-[90%] lg:w-[40%] bg-lime-100 py-4 px-6 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold my-6">Feedback</h2>
        <div>
          <input
            type="text"
            placeholder="Enter your Name"
            className="border-0 outline-none py-3 px-4 rounded-full mb-2 w-[80%]"
          ></input>
          <input
            type="number"
            placeholder="Enter your Phone Number"
            className="border-0 outline-none py-3 px-4 rounded-full mb-2 w-[80%]"
          ></input>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border-0 outline-none py-3 px-4 rounded-full mb-2 w-[80%]"
          ></input>
          <div>Prefered Method for Contct</div>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label htmlFor="html"> Phone</label>
          </div>

          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label htmlFor="css"> Email</label>
        </div>

        <textarea className="w-[100%] h-40 rounded-2xl mt-4 border-none outline-none py-6 px-4"></textarea>
        <button className="btn btn-success text-white mx-1 my-2">Submit</button>
        <button className="btn btn-error text-white mx-1 my-2">Reset</button>
      </div>
    </div>
  );
};

export default Feedback;
