import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { MdSportsMma } from "react-icons/md";

function FooterBelow() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4 gap-5 w-screen p-8 bg-white mt-12">


        <div className="flex flex-col gap-2 col-start-1 row-start-1 ml-12">
          <p className="font-bold text-lg">Creator:</p>
          <p className="ml-4">Guram Topchishvili (Guga)</p>
        </div>

       
        <div className="flex flex-col gap-2 col-start-2 row-start-2 ml-12">
          <p className="font-bold text-lg">Academy:</p>
          <p className="ml-4">Goal Oriented Academy (Goa)</p>
        </div>

       
        <div className="flex flex-col gap-2 col-start-1 row-start-3 ml-12">
          <p className="font-bold text-lg">Follow Us:</p>
          <div className="flex gap-4 ml-4">
            <a href="https://www.facebook.com/nika11keshelava" target="_blank">
              <FaFacebook className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://www.instagram.com/goal_oriented_academy__goa/" target="_blank">
              <RiInstagramFill className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://www.youtube.com/@Goal_Oriented_Academy__GOA" target="_blank">
              <FaYoutube className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://www.facebook.com/nika1keshelava" target="_blank">
              <MdSportsMma className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-125" />
            </a>
          </div>
        </div>

       
        <div className="flex flex-col gap-2 col-start-2 row-start-1 ml-12">
          <p className="font-bold text-lg">Created For:</p>
          <p className="ml-4">Goa 2025 Hackathon, Day 100 celebration.</p>
        </div>

        
        <div className="flex flex-col gap-2 col-start-2 row-start-3 ml-12">
          <p className="font-bold text-lg">Honorable Teacher:</p>
          <p className="ml-4">Luka Tskhvaradze</p>
        </div>

       
        <div className="flex flex-col gap-2 col-start-1 row-start-2 ml-12">
          <p className="font-bold text-lg">Email:</p>
          <p className="ml-4">guramtopchishvili@gmail.com</p>
        </div>

        
        <div className="flex flex-col gap-2 col-start-3 col-span-2 row-start-1 row-span-2 ml-12">
          <p className="font-bold text-lg">Negatives with creating this website:</p>
          <p className="ml-4">
            This is my first React website, which made things a lot harder,
            I was working much slower and less efficiently than usual.
            I had to deal with a lot of weird bugs and errors, that took me a lot of time to get rid of.
          </p>
        </div>

        <div className="flex flex-col gap-2 col-start-3 col-span-2 row-start-3 row-span-2 ml-12">
          <p className="font-bold text-lg">Positives with creating this website:</p>
          <p className="ml-4">
            Even though I struggled a lot to create this website,
            in the end it wasnt so bad. The only reason I didnt fully enjoy it was because of the time constraints.
            React is an amazing framework to work with.
          </p>
        </div>
      </div>

      
      <div className="bg-black text-center">
        <p className="text-white text-sm py-2">© 2025 Guram Topchishvili. All rights reserved.</p>
      </div>
    </>
  );
}

export default FooterBelow;
