"use client";

import React, { Fragment, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, Sidebar, SidebarProvider, SidebarTrigger, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import {
  Calendar,
  ChevronsUpDown,
  ArrowUpCircleIcon,
  Home,
  Inbox,
  Search,
  Settings,
  User,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { TextureButton } from "@/components/ui/texture-button";
import { NavMain } from "./nav-main";
import { NavDocuments } from "./nav-documents";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

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

interface Option {
  id: "images" | "video" | "no-media" | "code";
  label: string;
}

interface InfoCardDemoProps {
  initialCodeHtml: string;
}

export function NavPanel() {
  const [selected, setSelected] = useState<Option["id"]>("images");
  const [key, setKey] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isInPlayground, setIsInPlayground] = useState(true);

  const options: Option[] = [
    { id: "images", label: "Images" },
    { id: "video", label: "Video" },
    { id: "no-media", label: "Notification" },
    { id: "code", label: "Code" },
  ];
  return (
    <>
      <div className="relative h-[500px] max-w-[300px] md:mx-auto md:w-full">
        <SidebarProvider className="absolute left-0 top-0 h-full min-h-full overflow-hidden rounded-l-lg">
          <Sidebar className="absolute h-full">
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                    <a href="#">
                      <ArrowUpCircleIcon className="h-5 w-5" />
                      <span className="text-base font-semibold">Acme Inc.</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
              <NavMain items={data.navMain} />
              <NavDocuments items={data.documents} />
            </SidebarContent>
            <SidebarFooter>
              <SidebarGroup>
                <SidebarMenuButton className="h-12 w-full justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 rounded-md" />
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium">KL</span>
                      <span className="text-xs text-muted-foreground">kl@example.com</span>
                    </div>
                  </div>
                  <ChevronsUpDown className="h-5 w-5 rounded-md" />
                </SidebarMenuButton>
              </SidebarGroup>
            </SidebarFooter>
          </Sidebar>
          <div className="px-4 py-2">
            <SidebarTrigger />
          </div>
        </SidebarProvider>
        {/* <div className="relative h-full  rounded-l-lg border-y border-l border-gray-200 shadow-md dark:border-zinc-700/50 md:mx-auto md:w-full">
        </div> */}
      </div>
      {/* <AnimatePresence></AnimatePresence> */}
    </>
  );
}
