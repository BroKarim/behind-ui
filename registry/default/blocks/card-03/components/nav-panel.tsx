"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, Sidebar, SidebarProvider, SidebarTrigger, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { ArrowUpCircleIcon, User, CameraIcon, ClipboardListIcon, DatabaseIcon, FileCodeIcon, FileIcon, FileTextIcon, FolderIcon, HelpCircleIcon, LayoutDashboardIcon, SearchIcon, SettingsIcon } from "lucide-react";
import { TextureButton } from "@/components/ui/texture-button";
import { NavMain } from "./nav-main";
import { NavDocuments } from "./nav-documents";
import { ImageContent } from "./image-content";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboardIcon,
    },

    {
      title: "Projects",
      url: "#",
      icon: FolderIcon,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      name: "Reports",
      url: "#",
      icon: ClipboardListIcon,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: FileIcon,
    },
  ],
};

export function NavPanel() {
  return (
    <>
      <div className="relative h-[700px] max-w-[350px]  overflow-hidden rounded-l-lg border-y border-l border-gray-200  dark:border-zinc-700/50 md:mx-auto md:w-full">
        <AnimatePresence mode="wait">
          <SidebarProvider className="absolute left-0 top-0 h-full min-h-full overflow-hidden rounded-l-lg">
            <Sidebar className="absolute h-full">
              <SidebarHeader>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                      <a href="#">
                        <ArrowUpCircleIcon className="h-5 w-5" />
                        <span className="text-base font-semibold text-primary">Acme Inc.</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarHeader>
              <SidebarContent className="text-primary">
                <NavMain items={data.navMain} />
                <NavDocuments items={data.documents} />
              </SidebarContent>
              <SidebarFooter>
                <ImageContent />
                <SidebarGroup className=" gap-4">
                  <TextureButton variant="accent" className="w-full">
                    <div className="flex w-full items-center gap-2">
                      <User className="h-5 w-5 rounded-md" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">BroKarim</span>
                        <span className="text-xs dark:text-muted-foreground">brokariim@gmail.com</span>
                      </div>
                    </div>
                  </TextureButton>
                </SidebarGroup>
              </SidebarFooter>
            </Sidebar>
            <div className="px-4 py-2">
              <SidebarTrigger />
            </div>
          </SidebarProvider>
          <div className="pointer-events-none absolute -right-4 top-0 h-full w-10 bg-white dark:bg-transparent" />
        </AnimatePresence>
      </div>
    </>
  );
}
