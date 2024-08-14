import React from "react";
import Link from "next/link";
import UserButton from "./userButton";
import { MainNav } from "./main-nav";
import DarkModeDropDown from "./dark-mode-dropdown";
const Header = () => {
  return (
    <div className="px-8 py-6 flex items-center justify-between">
      <Link href="/" className="font-medium text-lg">
        SST ion todo next
      </Link>
      <div className="flex items-center gap-4">
        <MainNav />
        <UserButton />
        <DarkModeDropDown />
      </div>
    </div>
  );
};
export default Header;
