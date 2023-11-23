import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, Phone, User2 } from "lucide-react";

interface TitleProps {
  label: string;
  className?: string;
}
export const Title = ({ label, className }: TitleProps) => {
  return (
    <div className="title-container flex flex-col lg:flex-row md:flex-wrap sm:flex-wrap items-center justify-between ">
      <Button
        variant={"ghost"}
        className={cn(
          "w-12 p-2 h-12 dark:bg-accent bg-gray-100 rounded-xl hover:bg-gray-300 hover:text-muted-foreground/80 dark:hover:text-muted-foreground dark:hover:bg-zinc-700 sm:self-start md:self-start",
          !!className && className
        )}
      >
        <ChevronLeft />
      </Button>
      <h1 className="title ml-2 text-3xl font-semibold">{label}</h1>
      <div className="help-container flex justify-end items-center grow">
        <div className="call flex flex-col lg:flex-row md:flex-wrap sm:flex-wrap     items-center">
          <Button
            variant={"default"}
            className="bg-blue-600 hover:bg-blue-400 text-white rounded-full w-8 h-8 p-2"
          >
            <Phone />
          </Button>
          <span className="ml-2 truncate tracking-tighter">Call Teacher</span>
        </div>
        <div className="support flex  flex-col lg:flex-row md:flex-wrap sm:flex-wrap items-center    ml-4">
          <Button
            variant={"default"}
            className="bg-orange-600 hover:bg-orange-400 text-white rounded-full w-8  h-8 p-2"
          >
            <User2 />
          </Button>
          <span className="ml-2 truncate tracking-tighter">Support</span>
        </div>
      </div>
    </div>
  );
};
