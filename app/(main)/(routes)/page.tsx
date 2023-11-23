"use client";
import Image from "next/image";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useScrollTop } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  useEffect(() => {}, []);
  if (!isLoaded) {
    return (
      <div className="w-[100%] h-[100%]">
        <div className="absolute top-[50%] left-[50%]">
          <Spinner size={"lg"} />
        </div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="">
        <div className="w-[70%] mx-auto  text-center">
          {!isSignedIn && !!!user ? (
            <React.Fragment>
              <h1 className="px-5 py-3 text-muted-foreground font-semibold text-3xl">
                Please log in to continue
              </h1>
              <div>
                <SignInButton mode="modal">
                  <Button variant="default" size="sm">
                    Log in
                  </Button>
                </SignInButton>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h2 className="text-3xl text-primary font-bold dark:text-zinc-300 mb-10 ">
                Welcome, {user.firstName}
              </h2>
              <Button
                variant={"ghost"}
                className="border-2 border-neutral-900 hover:bg-slate-100 dark:border-blue-200 dark:hover:bg-blue-200 dark:hover:text-slate-700 font-semibold"
                onClick={() => router.push("/app")}
              >
                Enter App
              </Button>
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  );
}
