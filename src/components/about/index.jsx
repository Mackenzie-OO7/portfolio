import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize text-pink-400">
            Dev Advocate, Bookworm, and a host of other things that will be included later
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            You found me!.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl text-pink-400">
            12+ <sub className="font-semibold text-base text-pink-400">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl text-pink-400">
            4+{" "}
            <sub className="font-semibold text-base text-pink-400">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mackenzie-OO7&theme=transparent&hide_border=true&title_color=F472B6&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="My top languages used"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Mackenzie-OO7&theme=transparent&hide_border=true&title_color=F472B6&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Stats from my GitHub account"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,bootstrap,css,docker,figma,firebase,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Skill icons"
            loading="lazy"
          />
        </ItemLayout>

      {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <a href="https://git.io/streak-stats"><img src="https://github-readme-streak-stats.herokuapp.com?user=Mackenzie-OO7&theme=dark&hide_border=true&type=png&background=EB545400&ring=F472B6&currStreakLabel=F472B6&sideNums=F472B6" alt="GitHub Streak" /></a>
        </ItemLayout>   */}

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/Mackenzie-OO7/celestia-docs"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=Mackenzie-OO7&repo=celestia-docs&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="Documentation Website for Celestia"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/Mackenzie-OO7/stellar-docs"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=Mackenzie-OO7&repo=stellar-docs&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="Ducumentation website for Stellar"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
