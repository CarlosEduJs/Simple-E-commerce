import Logo from "../../assets/images/logo.svg";

import avatar from "../../assets/images/image-avatar.png";

import navItems1 from "../../data/navItems.json";

import CartDropdown from "../Dropdowns/CartDrop";

import MenuDropdown from "../Dropdowns/MenuDrop";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b w-full max-md:p-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <MenuDropdown />
          </div>
          <img src={Logo} />
        </div>
        <nav className="max-md:hidden">
          <ul className="flex items-center gap-4">
            {navItems1.map((item, index) => (
              <li
                key={index}
                className="py-5 px-2 text-xs cursor-pointer text-neutral-dark-grayish-blue hover:border-b-4 hover:border-b-primary-orange"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-8">
        <CartDropdown />

        <img
          className="w-8 h-8 cursor-pointer hover:border rounded-full hover:border-primary-orange transition-all"
          src={avatar}
          alt="avatar"
        />
      </div>
    </header>
  );
};

export default Header;
