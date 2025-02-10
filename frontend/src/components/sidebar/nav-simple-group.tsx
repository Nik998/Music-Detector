import * as React from "react"
import { type LucideIcon } from "lucide-react"
import { NavSimple } from "./nav-simple"
import { SidebarGroup, SidebarGroupLabel } from "../ui/sidebar"

interface NavSimpleWithHeaderProps {
    header: string
    items: {
        title: string
        url: string
        icon: LucideIcon
    }[]
}

export function NavSimpleWithHeader({
    header,
    items,
    ...props
}: NavSimpleWithHeaderProps & React.ComponentPropsWithoutRef<typeof NavSimple>) {
    return (
        <SidebarGroup {...props}>
            <SidebarGroupLabel>{header}</SidebarGroupLabel>
            <NavSimple items={items} />
        </SidebarGroup>
    )
}