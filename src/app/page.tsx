"use client";
import KanbanBoard from "@/components/custom/KanbanBoard";
import Sidebar from "@/components/custom/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen mx-auto min-h-screen flex-col items-center justify-between">
      <div className="w-full h-full">
        <div className="border-t bg-background md:grid grid-cols-8 h-full">
          <Sidebar className="hidden lg:block" playlists={[]} />
          <div className="md:col-span-7 md:border-l">
            <KanbanBoard />
          </div>
        </div>
      </div>
    </main>
  );
}
