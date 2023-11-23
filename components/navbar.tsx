"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const { isLoaded, isSignedIn, user } = useUser();
  useEffect(() => {}, []);
  if (!isLoaded) {
    <>Loading...</>;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between px-5 py-3",
        scrolled && "border-b-2 border-b-gray-200"
      )}
    >
      <h1 className="">Company Logo</h1>
      <div className="flex items-center justify-around w-[8%]">
        {!!user ? (
          <UserButton />
        ) : (
          <SignInButton mode="modal">
            <Button variant="link" size="sm">
              Log in
            </Button>
          </SignInButton>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};
