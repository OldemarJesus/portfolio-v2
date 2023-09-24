export default function Navbar() {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
        <a href="/demo/astro-boilerplate">
          <div className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="3" y="12" width="6" height="8" rx="1"></rect>
              <rect x="9" y="8" width="6" height="12" rx="1"></rect>
              <rect x="15" y="4" width="6" height="16" rx="1"></rect>
              <path d="M4 20h14"></path>
            </svg>
            Oldemar Jesus Portfolio
          </div>
        </a>
        <nav>
          <ul className="flex gap-x-3 font-medium text-gray-200">
            <li className="hover:text-white">
              <a href="#about-me">About Me</a>
            </li>
            <li className="hover:text-white">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-white">
              <a href="#contact-me">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
