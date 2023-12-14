import { SocialMediaIcon } from "@/components/social-media-icon";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppinsThin = Poppins({ subsets: ["latin"], weight: "200" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Danil Hendra Suryawan</title>
      </Head>

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${poppinsThin.className}`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 text-center">
          <h1
            className={`text-4xl font-medium ${poppinsBold.className} tracking-wide`}
          >
            Danil Hendra Suryawan
          </h1>

          <a
            href="mailto:danilhendrasr@gmail.com"
            className="block relative group/email w-fit h-fit mx-auto my-3"
          >
            <span className="text-xs">danilhendrasr@gmail.com</span>
            <span className="absolute bottom-0 left-0 w-0 group-hover/email:w-full h-px bg-white transition-all"></span>
          </a>

          <div className="mx-auto w-fit flex gap-1">
            <SocialMediaIcon
              link="https://github.com/danilhendrasr"
              iconPath="/github.svg"
            />
            <SocialMediaIcon
              link="https://linkedin.com/in/danilhendrasr"
              iconPath="/linkedin.svg"
            />
            <SocialMediaIcon
              link="https://leetcode.com/danilhendrasr"
              iconPath="/leetcode.svg"
            />
          </div>
        </div>
      </main>
    </>
  );
}
