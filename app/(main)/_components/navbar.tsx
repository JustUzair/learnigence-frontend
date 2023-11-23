"use client";

import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  return (
    <>
      <nav className="bg-background dark:bg-[#1f1f1f] px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="h-12 w-12 text-muted-foreground"
          />
        )}
        <div className="flex items-center justify-between w-full"></div>
      </nav>
    </>
  );
};
