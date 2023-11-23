"use client";

import { Spinner } from "@/components/spinner";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Title } from "./_components/Title";
import { Navbar } from "./_components/Navbar";
import { VideoContent } from "./_components/VideoContent";

const MainApp = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) {
    return (
      <div className="w-[100%] h-[100%]">
        <div className="absolute top-[50%] left-[50%]">
          <Spinner size={"lg"} />
        </div>
      </div>
    );
  }
  if (!isSignedIn || !!!user) {
    toast.message("You are not logged in, Please log in to acccess the App");
    return router.push("/");
  }
  return (
    <div className="w-[90%] px-10 py-5 mx-auto min-w-[250px]">
      <Title label={"Basic Mathematics 101"} />
      <Navbar />
      <VideoContent />
    </div>
  );
};
export default MainApp;
