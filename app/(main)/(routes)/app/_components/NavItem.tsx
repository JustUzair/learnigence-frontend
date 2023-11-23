"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}
export const NavItem = ({ icon: Icon, label, active }: NavItemProps) => {
  return (
    <Button
      className={cn(
        "py-3 text-muted-foreground lg:py-7 rounded-full hover:bg-white dark:hover:bg-black px-2 font-semibold text-base w-[100%] flex items-start lg:items-center flex-col flex-wrap  lg:flex-nowrap lg:flex-row",
        active && "bg-white dark:bg-black text-black dark:text-white"
      )}
      variant={"ghost"}
    >
      <Icon className="lg:w-[25px] lg:h-[25px] sm:w-[18px] sm:h-[18px]" />
      <span className="lg:ml-2">{label}</span>
    </Button>
  );
};
