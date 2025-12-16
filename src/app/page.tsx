import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="min-h-screen w-full items-center flex flex-col justify-between py-4  transition-shadow">
        <h1 className="w-4/5 bg-cyan-700 text-center p-6 rounded-2xl text-3xl text-amber-50 font-bold">
          اولین نسخه از پروژه
        </h1>
        <div className="w-4/5 flex justify-evenly bg-green-500 text-center p-6 rounded-2xl hover:scale-110 shadow-2xl">
          <Link href={"/menu"} className="">
            نمایش اولین منو
          </Link>
          <Link href={"/menu/qrcode"} className="">
            سفارش QRCODE اولین منو
          </Link>
        </div>
        <footer className="w-4/5 bg-cyan-700 text-center p-6 rounded-2xl text-3xl text-amber-50 font-bold ">
          فوتر
        </footer>
      </div>
    </>
  );
};

export default Home;
