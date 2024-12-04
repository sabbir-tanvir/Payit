import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";



export default function Home() {
  return (
    <div className="text-2xl">
      <Image
        src="/logo.png"
        alt="Paytm logo"
        width={200}
        height={200}
      />
      hi there from user-app
    </div>
  );

}
