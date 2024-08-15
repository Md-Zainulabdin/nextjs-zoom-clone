import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="shadow">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between font-medium">
        <div className="logo">
          <Link href={"/"}>Zoom Clone</Link>
        </div>

        <SignedIn>
          <div className="flex items-center gap-5">
            <Link href={"/meetings"}>Meetings</Link>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </nav>
    </header>
  );
};

export default Navbar;
