import Image from "next/image";
import bg from "../../public/background/home-background.png";
import bitmoji from "../../public/assets/bitmoji.png";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      {/* TODO: fix the z-index of floating image and icons */}
      {/* TODO: Increase size of favicon */}
      <div className="w-full h-screen">
          <div className="absolute inset-5 flex justify-center items-center">
            <Navigation />
            <Image
              src={bitmoji}
              alt="A bitmoji of me"
              className="w-1/4 h-auto floating-image"
            />
        </div>
          {/* put other bitmojis in other places */}
          {/* <Image
            src={bitmoji}
            alt="A bitmoji of me"
            className="w-1/4 h-auto "
          /> */}
      </div>
    </main>
  );
}
