"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CommandIcon, HeartIcon,  } from "lucide-react";


export function Footer() {
  const [likeCount, setLikeCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);  // Track if the user has liked or not
  const hasIncrementedVisitorCount = useRef(false);

  useEffect(() => {
    // Get the like status and count from localStorage
    const storedLikes = localStorage.getItem("likeCount");
    if (storedLikes) {
      setLikeCount(Number(storedLikes));
    }

    const storedHasLiked = localStorage.getItem("hasLiked");
    if (storedHasLiked === "true") {
      setHasLiked(true);
    }

    // Get the visitor count from localStorage
    const storedVisitors = localStorage.getItem("visitorCount");
    if (storedVisitors) {
      setVisitorCount(Number(storedVisitors));
    }

    // Increment visitor count when a new visitor comes
    if (!hasIncrementedVisitorCount.current) {
      const newVisitorCount = (storedVisitors ? Number(storedVisitors) : 0) + 1;
      localStorage.setItem("visitorCount", newVisitorCount.toString());
      setVisitorCount(newVisitorCount);
      hasIncrementedVisitorCount.current = true;
    }
  }, []);

  const handleLikeClick = () => {
    if (hasLiked) {
      // If the user has already liked, remove the like
      const newLikeCount = likeCount - 1;
      localStorage.setItem("likeCount", newLikeCount.toString());
      localStorage.setItem("hasLiked", "false");
      setLikeCount(newLikeCount);
      setHasLiked(false);
    } else {
      // If the user hasn't liked yet, add the like
      const newLikeCount = likeCount + 1;
      localStorage.setItem("likeCount", newLikeCount.toString());
      localStorage.setItem("hasLiked", "true");
      setLikeCount(newLikeCount);
      setHasLiked(true);
    }
  };

  return (
    <footer className=" w-full h-16 z-10">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center">
            Build by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/Harry2876"
            >
              Hariom Harsh
            </Link>
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons likeCount={likeCount} onLikeClick={handleLikeClick} visitorCount={visitorCount} />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons({
  likeCount,
  onLikeClick,
  visitorCount,
}: {
  likeCount: number;
  onLikeClick: () => void;
  visitorCount: number;
}) {
  return (
    <>
      <button
        onClick={onLikeClick}
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon
          className={`h-4 w-4 mr-2 ${likeCount > 0 ? "text-red-600" : "text-muted-foreground"} fill-current`}
        />
        {likeCount > 0 ? `Loved By ${likeCount}` : "Like"}
      </button>
       
      <button className={buttonVariants({ variant: "outline", size: "sm" })}>
        Visitors: {visitorCount}
      </button>
    </>
  );
}
