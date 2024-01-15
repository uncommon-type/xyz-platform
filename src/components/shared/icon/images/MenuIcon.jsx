const MenuIcon = ({ ...props }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className="w-[2.75rem] h-[2.75rem]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

export default MenuIcon;
