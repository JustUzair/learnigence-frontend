"use client";

import { cn } from "@/lib/utils";
import {
  BarChart2,
  BellDot,
  BookOpenCheck,
  ChevronsLeftIcon,
  Eye,
  GaugeCircle,
  Hexagon,
  MenuIcon,
  Plus,
  PlusCircle,
  Search,
  Settings,
  Trash,
  Users,
} from "lucide-react";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { UserItem } from "./user-item";

import Item from "./Item";
import { toast } from "sonner";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useSettings } from "@/hooks/use-settings";

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:768px)");

  const settings = useSettings();

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    if (isMobile) {
      collapseSidebar();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapseSidebar();
    }
  }, [pathname, isMobile]);
  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;
    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;
    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };
  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };
  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "250px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : `calc(100% - 250px)`
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : `250px`);

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapseSidebar = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "70px";
      navbarRef.current.style.setProperty("width", "70px");
      navbarRef.current.style.setProperty("left", "0");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex  item flex-col z-[99999]",
          isResetting &&
            "origin-top-left transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <Item
          label="Logo"
          isCollapsed={isCollapsed}
          icon={Hexagon}
          className="text-white bg-orange-400 hover:bg-orange-300"
        />

        {isCollapsed && <Item icon={MenuIcon} onClick={resetWidth}></Item>}

        <div className="relative">
          {!isCollapsed && (
            <Item
              icon={ChevronsLeftIcon}
              onClick={collapseSidebar}
              className={cn("bg-none hover:bg-none")}
            />
          )}
          <UserItem isCollapsed={isCollapsed} />
        </div>

        <Item label="Notifications" isCollapsed={isCollapsed} icon={BellDot} />
        <Item label="Test" isCollapsed={isCollapsed} icon={GaugeCircle} />
        <Item label="Results" isCollapsed={isCollapsed} icon={BookOpenCheck} />
        <Item label="View" isCollapsed={isCollapsed} icon={Eye} />
        <Item label="Stats" isCollapsed={isCollapsed} icon={BarChart2} />
        <Item label="Users" isCollapsed={isCollapsed} icon={Users} />

        <Item
          label="Settings"
          isCollapsed={isCollapsed}
          icon={Settings}
          onClick={settings.onOpen}
        />

        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="opacity-0 group-hover/sidebar:opacity-100 origin-top-left transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] w-[calc(100%-240px)]",
          isResetting &&
            "origin-top-left transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      ></div>
    </>
  );
};
