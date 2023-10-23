"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("system");
  }, [setTheme]);

  return (
    <main className="flex flex-col-reverse items-center md:flex-row p-24 min-h-screen justify-between">
      <div className="space-y-4 p-8 md:p-0">
        <div>
          <h1 className="text-xl font-bold">Hi, my name is Max Chan</h1>
          <p>
            I&apos;m a Software Engineer <br />
            with a focus in iOS development.
          </p>
        </div>
        <div className="flex flex-row space-x-2">
          <Button>
            <Link href="https://www.linkedin.com/in/maxdchan/">LinkedIn</Link>
          </Button>
          <Button>
            <Link href="https://github.com/maxxlt">GitHub</Link>
          </Button>
        </div>
      </div>
      <div className="relative aspect-square h-full w-full">
        <Image
          src={"/profile.png"}
          fill
          alt="profile image"
          className="object-fill"
        />
      </div>
    </main>
  );
}
