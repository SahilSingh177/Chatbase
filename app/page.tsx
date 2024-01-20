"use client"
import React from "react";
import ConnectNotion from "@/components/ConnectNotion";
import { useRouter,usePathname } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  const path = usePathname();
  return (
    <div>
      {path=="/"?<ConnectNotion/>:""}
    </div>
  );
};

export default Home;
