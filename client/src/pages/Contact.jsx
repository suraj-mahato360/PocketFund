import React from 'react'

const Contact = () => {
  
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white" >Contact Us</h1>
      </div>

      <form className="w-full mt-[65px] flex flex-col gap-[30px]">
      <input type="name" name="name" placeholder="Your Name.." required />
                <input type="email" name="email" placeholder="Enter Your Email.." required />
                <input type="" name="number" placeholder="Enter Your Mobile Number" />
                <textarea type="message" name="message" id="" cols="30" rows="10" placeholder="How can I hep You"></textarea>
                <input type="submit" value="Send Message" class="submit" required />          


   <div className="flex justify-center items-center mt-[40px]  ">
            <button>Sumbit</button>
          </div>
      </form>
    </div>
  )
}

export default Contact
