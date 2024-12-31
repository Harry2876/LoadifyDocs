import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col h-full overflow-hidden relative">
    <div className = "circle circle1 blur-2xl"></div>
    <div className="circle circle2 blur-2xl"></div>
    <div className="circle circle3 blur-2xl"></div>
    <div className="circle circle4 blur-2xl"></div> 
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh]  flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
    <div className="absolute inset-0  bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-80 backdrop-blur-2xl z-10"></div>
      <div className="relative z-10 flex flex-col items-center">
      <Link
        href="https://github.com/Harry2876/Loadify"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold"/>
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl sm:leading-tight">
      Supercharge Your Android Apps With <span className="text-transparent hue-shift bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] bg-clip-text inline-block">Loadify</span>
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
      Designed for seamless integration and lightning-fast performance, this library offers a wide range of customizable loaders that enhance 
      user engagement and make your app feel smoother and more responsive than ever before.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link>
      </div>
      <span className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
        <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
        {"npx create-aria-doc <project-directory>"}
      </span>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
