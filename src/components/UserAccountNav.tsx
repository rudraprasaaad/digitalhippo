"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { User } from "@/payload-types";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

const UserAccountNav = ({ user }: { user: User }) => {
  const { signOut } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant="ghost" size="sm" className="relative">
          My account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-white w-60 rounded-md shadow-lg"
        align="end"
      >
        <div className="flex items-center justify-start gap-3 p-3 border-b border-gray-100">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-semibold text-sm text-gray-900">{user.email}</p>
            <p className="text-xs text-gray-500">Manage your account</p>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-gray-100" />

        <DropdownMenuItem asChild>
          <Link
            href="/sell"
            className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <span role="img" aria-label="dashboard">
              📊
            </span>
            Seller Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={signOut}
          className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer transition-colors"
        >
          <span role="img" aria-label="logout">
            🚪
          </span>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
