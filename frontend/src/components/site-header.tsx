"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import { SearchForm } from "@/components/search-form";
import { Separator } from "@/components/ui/separator";
import { ThemeSwitcher } from "./ThemeSwitcher";


export function SiteHeader() {
  const { resolvedTheme } = useTheme();
  let logo_src
  switch (resolvedTheme) {
    case "light":
      logo_src = "/Logo_Primary_Black.svg";
      break;
    case "dark":
      logo_src = "/Logo_Primary_White.svg";
      break;
    default:
      logo_src = "/Logo_Primary_Black.svg";
  }

  return (
    <header className="sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-4 px-4">

        <Image
          src={logo_src}
          alt="Logo"
          width={150}  // TODO: dummy values?
          height={50}  // TODO: dummy values?
          className="h-fill w-fill py-5"
        />

        <Separator orientation="vertical" className="mx-2 h-10" />

        <span className="text-lg">Live Music Detector</span>

        <SearchForm className="w-full sm:ml-auto sm:w-auto" />

        <ThemeSwitcher />
      </div>
    </header>
  );
}
