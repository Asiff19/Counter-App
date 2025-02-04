import { useEffect, useState } from "react";

export default function Lyrics() {
  const lyr =
    "Muurjhaayi si shaakh pe dil ki phool khilte hain kyun🌹,\nBaat gulon ki zikr mehak ka acha lagta hai kyun❤️,\nUn rango se tune milaaya jinse kabhi main mil na paaya✨,\nDil karta hai tera shukriya,\nPhir se bahaare tu laa de.❤️";
  const [addtxt, setaddtxt] = useState("");
  useEffect(() => {
    let count = 0;
    const intrid = setInterval(() => {
      if (count < lyr.length - 1) {
        setaddtxt((prev) => prev + lyr[count]);
        count++;
      } else clearInterval(intrid);
    }, 150);
    return () => clearInterval(intrid);
  }, []);

  return <pre>{addtxt}</pre>;
}
