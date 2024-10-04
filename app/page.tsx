// import Link from "next/link";
// import ProductCard from "./Components/ProductCard";
// import { getServerSession } from "next-auth";

// export default function Home() {
//   getServerSession()
//   return (
//     <main>
//       <h1>Hello World</h1>
//       <Link href="/users">Userss</Link>
//       <ProductCard/>
//     </main>
//   );
// }
'use client'
import { useState } from "react";
// import HeavyComponent from "./Components/HeavyComponent";
import dynamic from "next/dynamic";

const HeavyComponent=dynamic(()=>import('./Components/HeavyComponent'),
{loading:()=><p>Loading...</p>}
)


export default async function Home(){
  const [isVisible,setVisible] = useState(false);
  return(
  <main>
    <h1>Hello World</h1>
    
    <button onClick={()=> setVisible(true)}>show</button>
    {isVisible && <HeavyComponent/>}
  </main>
  )
}