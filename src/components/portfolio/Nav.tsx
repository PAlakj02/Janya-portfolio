import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { TABS } from "@/components/binder/content";
import { slugify } from "@/lib/slug";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LIST_TABS = new Set(["projects", "experiences", "research"]);

function tabPath(id: string) {
  return id === "core" ? "/about" : `/${id}`;
}

export function Nav({
  activeTab,
  navigate,
}: {
  activeTab: string;
  navigate: (to: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (to: string) => {
    setMenuOpen(false);
    navigate(to);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bubblegum">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-10">
        <button
          type="button"
          onClick={() => go("/")}
          className="font-serif-display text-lg italic tracking-tight"
        >
          Janya
        </button>

        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const isContact = tab.id === "contact";

            if (!LIST_TABS.has(tab.id)) {
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => navigate(tabPath(tab.id))}
                  className={cn(
                    "rounded-full text-xs font-medium uppercase tracking-[0.1em] transition-colors",
                    isContact
                      ? cn(
                          "ml-1 px-4 py-2 font-semibold sm:ml-2",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-ink/10",
                        )
                      : cn(
                          "px-3 py-2 sm:px-4",
                          isActive
                            ? "bg-secondary text-foreground"
                            : "text-foreground/70 hover:bg-secondary/70 hover:text-foreground",
                        ),
                  )}
                >
                  {tab.label}
                </button>
              );
            }

            return (
              <DropdownMenu key={tab.id}>
                <DropdownMenuTrigger
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.1em] outline-none transition-colors sm:px-4",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-foreground/70 hover:bg-secondary/70 hover:text-foreground",
                  )}
                >
                  {tab.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={14}
                  className="min-w-[15rem] rounded-none border-none bg-card p-6 shadow-2xl"
                >
                  {tab.sections.map((s) => (
                    <DropdownMenuItem
                      key={s.heading}
                      onSelect={() => navigate(`/${tab.id}/${slugify(s.heading)}`)}
                      className="cursor-pointer rounded-none px-0 py-3 font-serif-display text-lg focus:bg-transparent focus:text-foreground focus:underline"
                    >
                      {s.heading}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="-mr-2 rounded-full p-2 text-foreground/80 transition-colors hover:bg-secondary/70 md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-ink/10 px-4 pb-6 md:hidden">
          {TABS.map((tab) => (
            <div key={tab.id} className="border-b border-dashed border-ink/15 py-3">
              <button
                type="button"
                onClick={() => go(tabPath(tab.id))}
                className={cn(
                  "text-xs font-medium uppercase tracking-[0.1em]",
                  activeTab === tab.id ? "text-foreground" : "text-foreground/70",
                )}
              >
                {tab.label}
              </button>
              {LIST_TABS.has(tab.id) && (
                <ul className="mt-2 space-y-1 pl-3">
                  {tab.sections.map((s) => (
                    <li key={s.heading}>
                      <button
                        type="button"
                        onClick={() => go(`/${tab.id}/${slugify(s.heading)}`)}
                        className="py-1 text-left font-serif-display text-lg text-foreground/85 hover:underline"
                      >
                        {s.heading}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
