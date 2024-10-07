// app/home/page.tsx
import NavBar from "@/components/Header/Navbar2";
import React from "react";
import Avatar from "@/public/avatars/Avatar.png";
import Image from "next/image";
import Home from "@/components/Home/home";

const HomePage: React.FC = () => {

  return (
    <main >
        <Home />
</main>
  );
};

export default HomePage;
