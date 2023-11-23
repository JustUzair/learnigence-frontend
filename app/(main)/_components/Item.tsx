"use client";
import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ChevronDown,
  ChevronRight,
  Divide,
  LucideIcon,
  MoreHorizontal,
  Plus,
  Trash,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUser } from "@clerk/clerk-react";
interface ItemProps {
  label?: string;
  onClick?: () => void;
  onExpand?: () => void;
  icon: LucideIcon;
  className?: string;
  documentIcon?: string;
  expanded?: boolean;
  active?: boolean;
  isSearch?: boolean;
  level?: number;
  isCollapsed?: boolean;
}
const Item = ({
  label,
  onClick,
  icon: Icon,
  active,
  documentIcon,
  isSearch,
  expanded,
  level = 0,
  onExpand,
  className,
  isCollapsed,
}: ItemProps) => {
  const { user } = useUser();

  const router = useRouter();
  const handleExpand = (event: React.MouseEvent) => {
    event.stopPropagation();
    onExpand?.();
  };

  const ChevronIcon = expanded ? ChevronDown : ChevronRight;
  return (
    <div
      onClick={onClick}
      role="button"
      style={{
        paddingLeft: level ? `${level * 12 + 12}px` : "18px",
      }}
      className={cn(
        "group min-h-[27px] text-sm p-5 px-2 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        !!className && className,
        active && "bg-primary/5 text-primary"
      )}
    >
      <Icon className="shrink-0 h-8 w-8  text-muted-foreground" />

      {!isCollapsed && <span className="truncate  text-xl ml-3">{label}</span>}
    </div>
  );
};
Item.Skeleton = function ItemSkeleton({ level }: { level?: number }) {
  return (
    <div
      style={{
        paddingLeft: level ? `${level * 12 + 25}px` : "12px",
      }}
      className="flex gap-x-2 py-[3px]"
    >
      <Skeleton className="h-8 w-8" />
      <Skeleton className="h-8 w-[30%]" />
    </div>
  );
};
export default Item;
