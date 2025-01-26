import TransitionChild from "@/components/transition/transition-child";
import Link from "next/link";

function AboutContent() {
  return (
    <div className="flex-1 flex flex-col items-center px-4">
      <div className="w-full max-w-[700px] mt-[5vh] space-y-4">
        {/* main content */}
        <main className="w-full p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm">
          {/* greeting */}
          <div className="flex items-center mb-16">
            <h1 className="text-[22px] sm:text-[24px] md:text-[26px] font-normal">
              nice to meet you! &nbsp;
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
              className="inline-block flex-shrink-0 ml-1 mr-1"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>

          {/* bio paragraphs */}
          <div className="space-y-6">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8]">
              I&apos;m from the North metro area of MN and currently studying
              Computer Science + User Experience Design at the
              <span className=""> University of Minnesota</span>.
            </p>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8]">
              At the moment, I&apos;m developing internal tools at
              <Link
                href="https://www.spscommerce.com/"
                target="_blank"
                className="text-text-about-color hover:text-text-about-hover-color italic"
              >
                {" "}
                SPS Commerce{" "}
              </Link>
              as a software engineer intern
              <span className="text-[10px] sm:text-[12px] md:text-[14px] align-super">
                &nbsp;{"["}
                extended&nbsp;through&nbsp;the&nbsp;end&nbsp;of&nbsp;2024
                {"]"}
              </span>
              .
            </p>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8]">
              I&apos;m passionate about building products that are both
              beautiful + functional; one of its greatest rewards is constant
              learning.
            </p>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8]">
              Feel free to{" "}
              <Link
                href="mailto:josh25dickinson@gmail.com"
                className="text-text-about-color hover:text-text-about-hover-color italic"
              >
                reach out
              </Link>{" "}
              if you&apos;d like to chat!
            </p>

            {/* signature */}
            <div className="flex items-end">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8] italic">
                - Josh
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="text-text-about-color">
      <TransitionChild id="about">
        <AboutContent />
      </TransitionChild>
    </main>
  );
}
