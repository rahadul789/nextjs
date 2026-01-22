"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export default function Navbar() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className=" w-full">
      <div className="flex justify-between items-center bg-gray-800 p-4">
        <div className="flex items-center gap-2">
          <Menu color="white" onClick={toggleSidebar} />
          <Link href="/" className="text-white text-lg font-bold">
            1Technologies
          </Link>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline">Login</Button>
          <Button>Logout</Button>
        </div>
      </div>
    </div>
  );
}
