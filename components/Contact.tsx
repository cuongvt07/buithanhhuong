
import React from 'react';
import SectionLabel from './SectionLabel';

const Contact: React.FC = () => {
    interface ContactConfig {
        label: string;
        text: string;
        link?: string;
    }

    const contacts: ContactConfig[] = [
        {
            label: "email",
            text: "hi@buithanhhuong.com",
            link: "mailto:hi@buithanhhuong.com"
        },
        {
            label: "linkedin",
            text: "/buithanhhuong",
            link: "https://www.linkedin.com/in/buithanhhuong/"
        },
        {
            label: "behance",
            text: "/buithanhhuong",
            link: "https://www.behance.net/buithanhhuong"
        },
        {
            label: "unsplash",
            text: "/buithanhhuong",
            link: "https://unsplash.com/@buithanhuong/illustrations"
        },
        {
            label: "threads",
            text: "/buithanhhuong_as_usual",
            link: "https://www.threads.com/@buithanhuong_as_usual"
        }
    ];

    return (
        <section className="flex-1 w-full flex flex-col items-center relative overflow-hidden justify-end">
            <div className="absolute left-[0px] flex flex-col gap-[23px] items-start">
                {/* Label: positioned 23px above image */}
                <SectionLabel
                    text="ping me"
                    width="144px"
                    className=""
                    style={{ position: 'relative' }}
                />

                {/* Decorative image in bottom-left corner */}
                <div className="p-[24px]">
                    <img src="images/Frame 7.svg" alt="" className="w-full h-full" />
                </div>
            </div>


            {/* Main Content - Bottom aligned */}
            <div className="w-full flex flex-col justify-end items-center z-10">
                <div className="relative w-fit mx-auto translate-x-[50px]">
                    {/* Ghost Element from Hero to force identical centering */}
                    <div className="flex flex-col select-none w-full space-y-4 opacity-0 pointer-events-none h-0 overflow-hidden">
                        <div className="w-full text-left ml-[340px]"><h1 className="hero-title">I WALK</h1></div>
                        <div className="w-full text-left ml-[100px]"><h1 className="hero-title">THIS EARTH,</h1></div>
                        <div className="w-full text-left ml-[280px] !mb-[10px]"><h1 className="hero-title">WATER THE FLOWERS,</h1></div>
                        <div className="w-full text-left -ml-[100px] !mb-[10px]"><h1 className="hero-title">PAT THE LITTLE PUPPIES,</h1></div>
                        <div className="w-full flex items-baseline space-x-6 ml-[260px] !mb-[10px]"><h1 className="hero-title">SEW, GROW RICE, AND</h1></div>
                        <div className="w-full text-left ml-[90px] !mb-[10px]"><h1 className="hero-title">READ ARCHITECTURE NEWS</h1></div>
                    </div>

                    {/* Actual Content aligned with ghost structure */}
                    <div className="ml-[340px] flex flex-col space-y-4 text-left px-[48px] py-[32px]">
                        {contacts.map((item, i) => (
                            <div key={i} className="flex items-baseline gap-[100px]">
                                <span className="text-[16px] font-stix text-[#1d3413] leading-relaxed min-w-[120px]">
                                    {item.label}
                                </span>
                                <a
                                    href={item.link || "#"}
                                    target={item.link?.startsWith('http') ? '_blank' : undefined}
                                    rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="group relative block w-fit text-[16px] font-stix text-[#1d3413] leading-relaxed hover:underline"
                                >
                                    <span className="relative z-10">{item.text}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;