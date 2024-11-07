import Dropdown from "./Dropdown";

import { Bars3Icon } from "@heroicons/react/16/solid";

import navItems from "../../data/navItems.json";

export default function MenuDropdown() {
  return (
    <Dropdown
      buttonContent={<Bars3Icon className="h-5 w-5 cursor-pointer" />}
      position={"left"}
    >
      <div>
        <nav className="">
          <ul className="flex flex-col items-center gap-4 p-3">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="px-2 w-full text-sm font-semibold cursor-pointer text-neutral-dark-grayish-blue  hover:text-slate-900"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Dropdown>
  );
}
