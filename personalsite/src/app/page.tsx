import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Hi, my name is Ameris Rudland. I am a full-stack software engineer based
        in Toronto, Canada.
        <br />
        I have 5 years of experience building full-stack at scales of up to 100M monthly active users, and I&apos;ve learned how to make a few optimizations and lead with data along the way.
        <br />
        Nothing excites me quite like synthesizing ideas into a product or service that delivers real value. In my spare time, I&apos;m directing that energy towards my volunteering, too.
        <br />
        I&apos;m building a few new projects right now, so this site is a work in progress. Over the course of the next while I hope to add some blog posts explaining what I&apos;m building and why.
        <br />
        In the meantime, feel free to explore my resume and LinkedIn profile below!
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
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
