// app/home/page.tsx
import NavBar from "@/components/Header/Navbar2";
import React from "react";
import Avatar from "@/public/avatars/Avatar.png"
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <main className="mb-40">
      <div className="flex justify-evenly">
        <div className="flex flex-col items-center">
          <div className="border-4 border-black    rounded-full w-48 bg-customOrange mb-10 mt-10">
            <div className="bg-secondary py-3 px-8 rounded-full w-2/3 ">
              <span className="text-xl " style={{ padding: "inherit" }}>
                Beginner
              </span>
            </div>
          </div>
          <div className="   rounded-full w-80 mb-10">
            <div className="rounded-full flex justify-center py-1 px-2 bg-customOrange">
              <span className="text-xl " style={{ padding: "inherit" }}>
                Finshed 30 out of 1000
              </span>
            </div>
          </div>
          <div className=" border-2 border-secondary   rounded w-80  mb-10">
            <div className=" rounded flex justify-between py-1.5 px-2">
              <span className="text-xl " style={{ padding: "inherit" }}>
                Begginer
              </span>
              <span className="text-xl " style={{ padding: "inherit" }}>
                Level 4
              </span>
            </div>
          </div>
          <div className="  border-2 border-secondary  rounded w-95 mb-40 ">
            <div className=" rounded flex justify-center py-1 px-2 ">
              <span className="text-xl " style={{ padding: "inherit" }}>
                Complete 10 Exam to Reach LEVEL 5
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
            <Image src={Avatar} width={300} alt="Avatar"/>
            <div className=" border-2 border-secondary   rounded-lg w-60  mb-10">
            <div className=" rounded flex justify-between py-1 px-2">
              <span className="text-xl " style={{ padding: "inherit" }}>
                Rank
              </span>
              <span className="text-xl " style={{ padding: "inherit" }}>
                19 of 300
              </span>
            </div>
            </div>
            <div>
                <button className="bg-primary p-4 px-10 rounded-xl text-white">Practice</button>
                <button>Exam</button>
            </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
