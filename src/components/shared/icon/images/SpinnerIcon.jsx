const SpinnerIcon = ({ ...props }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className="w-[3rem] h-[3rem] stroke-none rounded-lg bg-[rgb(var(--primary-1)/1)]"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Group 1321317024">
      <circle id="Ellipse 743" cx="17" cy="17" r="15" stroke="#BB99FF" strokeWidth="4" />
      <path
        id="Ellipse 744"
        d="M32 17C32 8.71573 25.2843 2 17 2"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default SpinnerIcon;
