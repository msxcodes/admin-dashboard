import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "../theme/theme-toggle";
import MobileSideBar from "../sidebar/mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex border-b justify-between items-center px-4 py-2 bg-secondary dark:bg-slate-950">
      <div className="flex gap-2 items-center">
        <span className="md:hidden flex justify-center items-center">
          <MobileSideBar />
        </span>
        <Link href={"/"}>
          <span className="text-xl font-semibold">Dashboard</span>
        </Link>
      </div>

      {/* Avatar dropdown menu  */}
      <div className="flex gap-4 items-center">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              <AvatarFallback className="bg-slate-300">M</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-secondary">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-black/10 mx-0.5" />
            <DropdownMenuItem>
              <Link href={"/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/auth"}>Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
