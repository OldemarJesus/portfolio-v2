import Image from "next/image";

export default function Hero({ id }: { id: string }) {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6" id={id}>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
        <div>
          <h1 className="text-3xl font-bold">
            Olá por aí, Eu sou{" "}
            <span className="bg-gradient-to-br from-customBlue to-cyan-400 bg-clip-text text-transparent">
              Oldemar
            </span>{" "}
            👋
          </h1>
          <p className="mt-6 text-xl leading-9">
            Um jovem programador{" "}
            <a
              className="text-cyan-400 hover:underline"
              href="#"
            >
              intermediário
            </a>{" "}
            que tem anceio que aprender sempre mais e evoluir junto das{" "}
            <a
              className="text-cyan-400 hover:underline"
              href="#"
            >
              principais tecnologias
            </a>{" "}
            assentas no desenvolvimento WEB (FrontEnd) e API (BackEnd)
          </p>
          <div className="mt-3 flex gap-1">
            <a href="https://www.facebook.com/oldemar.jesus/">
              <Image
                width={100}
                height={100}
                className="h-12 w-12 hover:translate-y-1"
                src="/assets/images/facebook-icon.png"
                alt="Facebook icon"
                loading="lazy"
              />
            </a>
            <a href="https://www.linkedin.com/in/oldemar-jesus-892250206">
              <Image
                width={100}
                height={100}
                className="h-12 w-12 hover:translate-y-1"
                src="/assets/images/linkedin-icon.png"
                alt="Linkedin icon"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="shrink-0" />
        <Image
          width={100}
          height={100}
          className="h-80 w-64"
          src="assets/images/undraw_multitasking_re_ffpb.svg"
          alt="Multitasking image"
          loading="lazy"
        />
      </div>
    </div>
  );
}
