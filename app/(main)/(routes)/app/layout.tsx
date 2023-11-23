"use client";

import { ReactNode } from "react";
import { Spinner } from "@/components/spinner";
import { redirect, useRouter } from "next/navigation";
import { Navigation } from "../../_components/navigation";
import { useUser } from "@clerk/clerk-react";

// import {Red} from "next/link";
const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
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
    <div className="h-[100vh] flex">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
