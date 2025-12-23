import MenuHeader from "./MenuHeader";
import MenuList from "./MenuList";
import MenuFooter from "./MenuFooter";

const Menu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black text-white">
      <MenuHeader onClose={onClose} />
      <MenuList />
      <MenuFooter />
    </div>
  );
};

export default Menu;
