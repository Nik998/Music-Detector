"use client"

import * as React from "react"
import {
  LucideIcon,
  Home,
  Music,
  Settings,
  HelpCircle
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar"

import { NavSimple } from "./nav-simple"
import { NavSimpleWithHeader } from "./nav-simple-group"

type ContentItem = {
  header: string
  items: {
    title: string
    icon: LucideIcon
    url: string
  }[]
}

const content_items: Record<string, ContentItem> = {
  "overview": {
    "header": "Overview",
    "items": [
      {
        title: "Dashboard",
        icon: Home,
        url: "#",
      },
      {
        title: "Artists",
        icon: Music,
        url: "#"
      }
    ],
  },
  "test": {
    "header": "Test (Remove later)",
    "items": [
      {
        title: "Test1 (Remove later)",
        icon: Home,
        url: "#",
      },
      {
        title: "Test2 (Remove later)",
        icon: Music,
        url: "#"
      }
    ]
  },
}

const footer_items = {
  "footer": [
    {
      title: "Settings",
      icon: Settings,
      url: "#",
    },
    {
      title: "Help",
      icon: HelpCircle,
      url: "#",
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarContent>
        {Object.keys(content_items).map((key) => (
          <NavSimpleWithHeader
            key={key}
            header={content_items[key].header}
            items={content_items[key].items}
          />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavSimple items={footer_items.footer} />
      </SidebarFooter>
    </Sidebar>
  )
}