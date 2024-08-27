export default () => (
  <div id="theme-toggle" className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-2">
      <svg
        className="swap-off h-6 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>sun icon</title>
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>
    </div>
    <ul
      // biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
      tabIndex={0}
      className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-26 p-2 shadow-2xl border-2"
    >
      <li>
        <input
          type="radio"
          id="light-theme-toggle"
          name="theme-dropdown"
          className="theme-controller btn btn-sm btn-block btn-ghost font-normaljustify-start"
          aria-label="light"
          value="cmyk"
        />
      </li>
      <li>
        <input
          type="radio"
          id="dark-theme-toggle"
          name="theme-dropdown"
          className="theme-controller btn btn-sm btn-block btn-ghost font-normaljustify-start"
          aria-label="dark"
          value="dracula"
        />
      </li>
      <li>
        <input
          type="radio"
          id="system-theme-toggle"
          name="theme-dropdown"
          className="theme-controller btn btn-sm btn-block btn-ghost font-normaljustify-start"
          aria-label="system"
          value="system"
        />
      </li>
    </ul>
  </div>
);
