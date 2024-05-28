import Section from "@/components/section/Section";
import React from "react";
import socialLinks from "../../../data/social.json";
import { FaGithub, FaFacebook, FaLinkedin, FaMedium } from "react-icons/fa";
import WORK_EXPERIENCE from "../../../data/work_experience.json";

const SOCIAL_MEDIA_LINKS: {
  key: string;
  link: string;
  icon: React.ReactNode;
}[] = [
  { key: "github", link: socialLinks.github, icon: <FaGithub size={28} /> },
  {
    key: "facebook",
    link: socialLinks.facebook,
    icon: <FaFacebook size={28} />,
  },
  {
    key: "linkedin",
    link: socialLinks.linkedin,
    icon: <FaLinkedin size={28} />,
  },
  { key: "medium", link: socialLinks.medium, icon: <FaMedium size={28} /> },
];

const Intro = () => {
  return (
    <Section title="intro">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse
          </p>

          <div className="flex flex-row gap-3 mt-6">
            {SOCIAL_MEDIA_LINKS.map(({ key, link, icon }) => (
              <a key={key} href={link} target="_blank">
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-2/4 flex justify-end">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg py-3 px-4 mt-8 sm:mt-0 w-full sm:w-3/4 sm:relative bottom-4">
            <h4>work experience</h4>

            <div className="flex flex-col gap-4 mt-2">
              {WORK_EXPERIENCE.map(
                ({ company, position, endYear, startYear }, i) => (
                  <div key={i} className="flex flex-col align-middle">
                    <p className="text-sm">- {position}</p>
                    <span className="text-slate-400 font-thin text-xs inline-block pl-4">
                      {company} ({startYear} - {endYear})
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
