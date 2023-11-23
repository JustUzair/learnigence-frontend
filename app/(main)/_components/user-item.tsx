"use client";
import { ChevronsLeftRight } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SignOutButton, useUser } from "@clerk/clerk-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserItem = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="group min-h-[27px] text-sm p-5 pl-[18px] w-full hover:bg-primary/5  text-muted-foreground font-medium"
        >
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.imageUrl}></AvatarImage>
            </Avatar>
            {!isCollapsed && (
              <>
                <span className="text-start font-medium truncate ">
                  {user?.fullName}&apos;s Content
                </span>
                {/* <ChevronsLeftRight className="rotate-90 text-muted-foreground h-4 w-4" /> */}
              </>
            )}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user?.emailAddresses[0].emailAddress}
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.imageUrl}></AvatarImage>
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1">
                {user?.fullName}&apos;s Content
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="w-full cursor-pointer text-muted-foreground"
          asChild
        >
          <SignOutButton>Log Out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
