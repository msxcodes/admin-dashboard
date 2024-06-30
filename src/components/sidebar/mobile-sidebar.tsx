import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBar from "./sidebar";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="p-0 w-[300px]" side={"left"}>
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
