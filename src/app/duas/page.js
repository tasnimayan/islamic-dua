"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter()
  
  useEffect(()=>{
    router.replace('/duas/category?cat=1')
  },[])
  return null
};

export default page;