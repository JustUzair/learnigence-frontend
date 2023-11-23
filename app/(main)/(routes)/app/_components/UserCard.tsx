"use client";
import { Activity, SmilePlus } from "lucide-react";

import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
interface UserCardProps {
  name: string;
  isSpeaking?: boolean;
}
export const UserCard = ({ name, isSpeaking = false }: UserCardProps) => {
  const { resolvedTheme } = useTheme();
  const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap;
  const [icon, setIcon] = useState<any>(null);
  const themeMap = {
    dark: Theme.DARK,
    light: Theme.LIGHT,
  };

  const theme = themeMap[currentTheme];
  return (
    <div className="bg-[url(https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar23.jpg)] drop h-[250px] w-[250px] object-center object-contain relative rounded-3xl">
      {isSpeaking && (
        <Activity className="w-[2.5rem] h-[2.5rem] backdrop-filter-[10px] max-w-[50px] max-h-[50px] text-white  absolute top-[5%] left-[10%]" />
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button className="h-12 w-12 absolute top-[5%] right-[10%] bg-white/30 text-secondary dark:bg-white/30 dark:text-secondary-foreground">
            {icon === null ? (
              <span className="text-2xl p-1">
                <SmilePlus />
              </span>
            ) : (
              <span className="text-2xl p-1">{icon}</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0 w-full border-none shadow-none">
          <EmojiPicker
            height={350}
            theme={theme}
            onEmojiClick={(data) => {
              setIcon(data.emoji);
            }}
          />
        </PopoverContent>
      </Popover>

      <div className="absolute left-[-0.5%] bottom-[-0.5%] px-4 py-2 bg-secondary max-w-[50%] rounded-bl-3xl rounded-tl-none rounded-tr-3xl text-center">
        <h1 className="font-medium font-base text-sm tracking-widest truncate">
          {name}
        </h1>
      </div>
    </div>
  );
};
