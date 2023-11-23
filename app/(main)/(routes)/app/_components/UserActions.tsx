"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {
  Video,
  Mic,
  Share,
  Forward,
  MessagesSquare,
  LogOut,
} from "lucide-react";
export const UserActions = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-4 min-w-[250px] py-2  sm:flex-wrap">
      <UserAction active={false} label="Cam" icon={Video} />
      <UserAction active={false} label="Mic" icon={Mic} />
      <UserAction active={false} label="Share" icon={Forward} />
      <UserAction active={false} label="Chat" icon={MessagesSquare} />
      <UserAction active={true} label="Leave" icon={LogOut} />
    </div>
  );
};

interface UserActionProps {
  active: boolean;
  icon: LucideIcon;
  label: string;
}

const UserAction = ({ active, icon: Icon, label }: UserActionProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "bg-secondary drop-shadow-md h-12 w-12 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-gray-200 hover:cursor-pointer transition ease-in-out",
          active && "bg-cyan-700 text-white hover:bg-cyan-500"
        )}
      >
        <Icon />
      </div>
      <span className="text-sm font-medium text-muted-foreground mt-1">
        {label}
      </span>
    </div>
  );
};
