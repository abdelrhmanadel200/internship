// app/home/page.tsx
import NavBar from "@/components/Header/Navbar2";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <main>
      <div>
        <div className="flex flex-col items-center">
          <div className="border-4 border-black  mt-20 mb-10 rounded-full w-48 bg-customOrange">
            <div className="bg-secondary py-3 px-8 rounded-full w-2/3 ">
              <span className="text-xl " style={{ padding: "inherit" }}>
                Beginner
              </span>
            </div>
          </div>
          <div className=" mt-20 mb-10 rounded-full w-80 ">
            <div className="rounded-full flex justify-center py-1 px-2 bg-customOrange">
              <span className="text-xl " style={{ padding: "inherit" }}>
                Finshed 30 out of 1000
              </span>
            </div>
          </div>
          <div className=" mt-20 mb-10 rounded-full w-80 border-customOrange border-3">
            <div className=" rounded flex justify-between py-1.5 px-2 ">
              <span className="text-xl " style={{ padding: "inherit" }}>
                Begginer
              </span>
              <span className="text-xl " style={{ padding: "inherit" }}>
                Level 4
              </span>
            </div>
          </div>
          <div className=" =mb-10 rounded w-95">
            <div className=" rounded flex justify-center py-1 px-2 bg-customOrange">
              <span className="text-xl " style={{ padding: "inherit" }}>
                Complete 10 Exam to Reach LEVEL 5
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
