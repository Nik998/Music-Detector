"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, SidebarIcon as SidebarOpenIcon } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar"; 

export function Some() {
    const { toggleSidebar } = useSidebar(); 
    const pathSegments = usePathname().split("/").filter((segment) => segment);

    return (
        <header className="sticky top-0 z-50 w-full items-center bg-background">
            <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
                <Button
                    className="h-8 w-8"
                    variant="ghost"
                    size="icon"
                    onClick={toggleSidebar}
                >
                    <SidebarOpenIcon />
                </Button>
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        {/* Home Link */}
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        {pathSegments.map((segment, index) => {
                            const href = "/" + pathSegments.slice(0, index + 1).join("/");
                            const isLast = index === pathSegments.length - 1;

                            return (
                                <div key={href} className="flex items-center">
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        {!isLast ? (
                                            <BreadcrumbLink asChild>
                                                <Link href={href}>{decodeURIComponent(segment)}</Link>
                                            </BreadcrumbLink>
                                        ) : (
                                            <BreadcrumbPage>{decodeURIComponent(segment)}</BreadcrumbPage>
                                        )}
                                    </BreadcrumbItem>
                                </div>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    );
}
