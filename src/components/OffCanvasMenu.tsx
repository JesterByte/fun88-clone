import { casinoSubItems } from "../api/casinoSubItems";
import { sportsBettingSubItems } from "../api/sportsBettingSubItems";
import { myProfileSubItems } from "../api/myProfileSubItems";
import { cashierSubItems } from "../api/cashierSubItems";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Casino", expandable: true },
  { label: "Sports Betting", expandable: true },
  { label: "My Profile", expandable: true },
  { label: "User Verification" },
  { label: "Cashier", expandable: true },
  { label: "Free Bonus" },
  {
    label: "Referrals",
    badge: "Earn up to $888",
  },
  { label: "Suggestions", icon: "🎁" },
  { label: "Promotions" },
  { label: "Sponsorships" },
  { label: "Blogs" },
  { label: "News" },
];

export default function OffCanvasMenu({ isOpen, onClose }: Props) {
  const subMenus: Record<string, string[]> = {
    Casino: casinoSubItems,
    "Sports Betting": sportsBettingSubItems,
    "My Profile": myProfileSubItems,
    Cashier: cashierSubItems,
  };

  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set([]),
  );

  const toggleSection = (label: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
      >
        <aside
          onClick={(event) => event.stopPropagation()}
          className={`flex flex-col fixed left-0 top-0 z-50 h-full w-80 max-w-[85%] bg-white transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="px-5 py-6">
            <p className="mb-4 text-sm font-semibold text-[#2596be] uppercase">
              Welcome!
            </p>

            <button className="mb-3 w-full rounded-lg bg-[#2596be] py-3 text-sm font-semibold uppercase text-white">
              Login
            </button>

            <button className="w-full text-center text-sm font-semibold uppercase text-[#2596be] underline">
              Register
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto border-gray-800 border-b">
            {menuItems.map((item) => {
              const isExpandable = !!subMenus[item.label];
              const isOpen = openSections.has(item.label);

              return (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      isExpandable ? toggleSection(item.label) : undefined
                    }
                    className="flex w-full items-center justify-between px-5 py-4 text-sm font-medium text-[#2596be] border-b border-gray-100 uppercase"
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.label}</span>

                      {item.badge && (
                        <span className="rounded bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                          {item.badge}
                        </span>
                      )}

                      {item.icon && <span>{item.icon}</span>}
                    </div>

                    {isExpandable && (
                      <span
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        ▼
                      </span>
                    )}
                  </button>

                  {isExpandable && (
                    <div
                      className={`overflow-hidden bg-gray-100 transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {subMenus[item.label].map((sub) => (
                        <button
                          key={sub}
                          className={`block w-full px-8 py-3 text-left text-sm text-[#2596be] hover:bg-gray-200 ${item.label === "Casino" ? "uppercase" : ""}`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="px-5 py-4">
              <div className="flex rounded-full bg-gray-100 p-1">
                <button className="flex-1 rounded-full py-2 text-sm font-semibold text-gray-700">
                  🌙 Dark
                </button>
                <button className="flex-1 rounded-full bg-white py-2 text-sm font-semibold text-gray-700 shadow">
                  ☀️ Light
                </button>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
