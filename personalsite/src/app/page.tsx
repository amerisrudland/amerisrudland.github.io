import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="pl-4 pr-4">
        <div className="pb-6 text-xl font-bold">
          Hi, my name is Ameris Rudland. I am a full-stack software engineer based in Toronto, Canada.
        </div>
        <div className="pb-4">
          I have 5 years of experience building full-stack at scales of up to 100M monthly active users, and I&apos;ve learned how to make a few optimizations and lead with data along the way.
          Nothing excites me quite like synthesizing ideas into a product or service that delivers real value. In my spare time, I&apos;m directing that energy towards my volunteering, too.
         </div>
         <div className="pb-4">
          I&apos;m building a few new projects right now, so this site is a work in progress. Over the course of the next while I hope to add some blog posts explaining what I&apos;m building and why.
        </div>
          <div className="pb-4">
          In the meantime, feel free to explore my resume and LinkedIn profile below!
      </div>
      </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Ameris_Rudland_Resume.pdf"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          My Resume
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/ameris-rudland/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
