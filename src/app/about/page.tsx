import { Smile } from "lucide-react";
import Link from "next/link";

import TransitionChild from "@/components/transition/transition-child";

function AboutContent() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 relative">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto py-24 sm:py-48">
        <div className="flex items-center">
          <h1 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
            nice to meet you! &nbsp;
          </h1>
          <Smile size={16} />
        </div>

        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] leading-[1.8]">
          <p>
            I&apos;m from the North metro area of MN and currently studying
            Computer Science + User Experience Design at the{" "}
            <span>University of Minnesota</span>.
          </p>

          <p>
            I am also an intern at
            <Link
              href="https://www.spscommerce.com/"
              target="_blank"
              className="link italic"
            >
              {" "}
              SPS Commerce{" "}
            </Link>
            as a cloud operations engineer, building org-wide AWS infrastructure automation and tooling.
            <span className="text-[10px] sm:text-[12px] md:text-[14px] align-super">
              &nbsp;{"["}
              June - December 2025
              {"]"}
            </span>
          </p>

          <p>
            Previously, I worked at SPS Commerce as a software engineer intern developing internal tools.
          </p>

          <p>
            I&apos;m passionate about building products that are both beautiful
            + functional; one of its greatest rewards is constant learning.
          </p>

          <p>
            Feel free to{" "}
            <Link
              href="mailto:josh25dickinson@gmail.com"
              className="link italic"
            >
              reach out
            </Link>{" "}
            if you&apos;d like to chat!
          </p>

          <div className="flex items-end">
            <p className="italic">- Josh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main>
      <TransitionChild id="about">
        <AboutContent />
      </TransitionChild>
    </main>
  );
}
