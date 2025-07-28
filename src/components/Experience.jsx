import React from "react";
import { experiences } from "../utils/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import ExperienceCard from "./ExperienceCard";
import CircularText from "../helper/CircularText.jsx";

function Experience() {
    return (
        <div
            id="experience"
            className="relative z-50 mt-12 lg:mt-24 border-y border-[var(--md-sys-color-surface-container-high)]"
        >
            {/* Section Heading */}
            <div className="flex justify-center my-6 lg:py-10">
                <div className="flex items-center">
                    <span className="w-20 h-[2px] bg-[var(--md-sys-color-inverse-primary)]"></span>
                    <span className="bg-[var(--md-sys-color-inverse-primary)] text-[var(--md-sys-color-on-surface)] text-xl p-2 px-5 rounded-md shadow-sm tracking-wider">
                        The Journey
                    </span>
                    <span className="w-20 h-[2px] bg-[var(--md-sys-color-inverse-primary)]"></span>
                </div>
            </div>

            {/* Main Section */}
            <div className="py-6 lg:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
                    
                    {/* BIG CIRCULAR TEXT BOX */}
                    <div className="w-[600px] h-[600px] lg:w-[650px] lg:h-[650px] rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface)] flex items-center justify-center relative overflow-hidden">
                        <CircularText
                            text="LEARN*DESIGN*CODE*CREATE*"
                            spinDuration={20}
                            radius={140} // adjust as needed
                            fontSize={24} // if supported
                            className="text-[var(--md-sys-color-primary)]"
                        />
                    </div>

                    {/* EXPERIENCE CARDS */}
                    <div className="flex flex-col gap-6">
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
