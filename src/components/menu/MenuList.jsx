import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  { label: "WORK", path: "/work" },
  { label: "AGENCY", path: "/agency" },
  { label: "CONTACT", path: "/contact" },
  { label: "BLOG", path: "/blog" },
];

const MenuList = ({ onNavigate }) => {
  return (
    <div className="mt-24 px-4">
      <div className="w-full border-t border-white/20" />

      {MENU_ITEMS.map(({ label, path }) => (
        <MenuItem
          key={label}
          label={label}
          path={path}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
};

export default MenuList;
