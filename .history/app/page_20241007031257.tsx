// app/home/page.tsx
import NavBar from "@/components/Header/Navbar2";
import React from "react";
import Avatar from "@/public/avatars/Avatar.png"
import Image from "next/image";

const HomePage: React.FC = () => {
    const users = [
        {
          name: "Mira Rodeo",
          email: "mirarodeo23@mail.com",
          designation: "Software Developer",
          department: "Development",
          status: "Active",
          role: "1",
          avatar: "https://i.imgur.com/siKnZP2.jpg",
        },
      ];
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
        <div className="flex flex-col items-center">
            <Image src={Avatar} width={300} alt="Avatar" className="mb-10"/>
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
                <button className="bg-primary p-4 px-12 rounded-xl text-white text-lg mr-10 w-44">Practice</button>
                <button className="bg-primary p-4 px-12 rounded-xl text-white text-lg w-44">Exam</button>
            </div>
        </div>
        <div className="min-h-screen py-5">
      <div className="overflow-x-auto w-full">
        <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead className="bg-primary">
            <tr className="text-white text-left">
              <th className="font-semibold text-sm uppercase px-6 py-4">Rank</th>
              <th className="font-semibold text-sm uppercase px-6 py-4">Name</th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">State</th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Score</th>
              <th className="font-semibold text-sm uppercase px-6 py-4"> </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-center">{user.role}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex w-10 h-10">
                      <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src={user.avatar} />
                    </div>
                    <div>
                      <p>{user.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p>{user.designation}</p>
                  <p className="text-gray-500 text-sm font-semibold tracking-wide">{user.department}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  
      </div>
    </main>
  );
};

export default HomePage;
