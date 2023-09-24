import Image from "next/image";

export default function Navbar() {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
        <a href="/">
          <div className="flex items-center bg-gradient-to-br from-customBlue to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
            <Image
              width={100}
              height={100}
              className="h-10 w-10"
              src="assets/images/document-svgrepo-com.svg"
              alt="Document image"
              loading="lazy"
            />
            Oldemar Jesus Portfolio
          </div>
        </a>
        <nav>
          <ul className="flex gap-x-3 font-medium text-gray-200">
            <li className="hover:text-white">
              <a href="#about-me">Sobre mim</a>
            </li>
            <li className="hover:text-white">
              <a href="#projects">Projetos</a>
            </li>
            <li className="hover:text-white">
              <a href="#contact-me">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
