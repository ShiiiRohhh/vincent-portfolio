"use client";

import { glass, glassInnerHighlight } from "@/components/ui/glass";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  match?: "exact" | "prefix";
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", match: "exact" },
  { label: "Projects", href: "/projects", match: "prefix" },
  { label: "Hobbies", href: "/hobbies", match: "prefix" },
  { label: "About Me", href: "/about", match: "prefix" },
];

function isActive(pathname: string, item: NavItem) {
  if (item.match === "exact") return pathname === item.href;
  return pathname === item.href || pathname.startsWith(item.href + "/");
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 pt-6">
      <div className="mx-auto flex max-w-6xl justify-center px-6">
        <nav
          className={`${glass} ${glassInnerHighlight} rounded-full px-2 py-2`}
          aria-label="Primary"
        >
          <ul className="flex items-center gap-2 text-sm">
            {navItems.map((item) => {
              const active = isActive(pathname, item);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "rounded-full px-4 py-2 transition",
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
