"use client";

import { NavItem } from "./NavItem";
import {
  Laptop,
  Presentation,
  Youtube,
  Projector,
  FileText,
  Tv,
  CassetteTape,
} from "lucide-react";
export const Navbar = () => {
  return (
    <nav className="navbar bg-gray-100 dark:bg-secondary min-w-[250px] w-[100%] px-5 py-3 mt-10 rounded-xl lg:rounded-full gap-y-2 flex justify-between flex-wrap lg:flex-nowrap">
      <NavItem label="Classroom" icon={Laptop} active={false} />
      <NavItem label="Whiteboard" icon={Presentation} active={false} />
      <NavItem label="Videos" icon={Youtube} active={true} />
      <NavItem label="Slideshow" icon={Tv} active={false} />
      <NavItem label="Documents" icon={FileText} active={false} />
      <NavItem label="Doc.Cam" icon={CassetteTape} active={false} />
    </nav>
  );
};
