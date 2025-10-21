"use client";

import React from "react";
import {
  ArrowRight,
  Globe,
  Lock,
  Cpu,
  TerminalSquare,
  FileSearch,
  Search,
  Calendar,
  Clock,
  Target,
} from "lucide-react";

const CtfSection = () => {
  const round1Data = {
    title: "Round 1: The Brew Begins",
    theme: "Theme: Warm-Up & Recon",
    description:
      "Round 1 serves as an introduction to the CyberTEA CTF experience. Participants will explore a variety of challenge categories and develop a solid understanding of the competition format. The focus of this round is on foundational cybersecurity concepts across areas such as web exploitation, cryptography, forensics, and OSINT. This stage is designed to be accessible while still encouraging problem-solving and collaboration. It's a great opportunity for participants to engage with one another, share ideas, and build momentum for the next phase of the event.",
    date: "25 October 4pm - 11:59pm",
    duration: "8 hours",
    objective: "Solve as many challenges as possible to qualify for Round 2.",
  };

  const round2Data = {
    title: "Round 2: The Strong Brew",
    theme: "Theme: Advanced Infusion",
    description:
      "Round 2 increases the difficulty and depth of the challenges. Participants will face more complex problems that require critical thinking, technical knowledge, and teamwork. This round is aimed at testing advanced skills in areas such as reverse engineering, exploitation, and advanced cryptography. The second round highlights creativity, persistence, and collaboration under pressure. Competitors who advance to this stage will demonstrate not only technical expertise but also strategic problem-solving abilities.",
    date: "2 November 12pm - 11:59pm",
    duration: "12 hours",
    objective:
      "Compete for top ranks and demonstrate mastery of advanced cybersecurity challenges.",
  };

  const categoriesData = [
    {
      icon: "Globe",
      title: "Web Exploitation",
      level: "All Levels",
      description: "Discover and exploit vulnerabilities in web applications.",
    },
    {
      icon: "Lock",
      title: "Cryptography",
      level: "All Levels",
      description:
        "Break codes, decrypt messages, and solve cipher challenges.",
    },
    {
      icon: "Cpu",
      title: "Reverse Engineering",
      level: "Intermediate",
      description: "Analyze and understand compiled programs and binaries.",
    },
    {
      icon: "TerminalSquare",
      title: "Binary Exploitation",
      level: "Advanced",
      description: "Identify and exploit vulnerabilities in program binaries.",
    },
    {
      icon: "FileSearch",
      title: "Forensics",
      level: "All Levels",
      description: "Analyze digital evidence to solve security puzzles.",
    },
    {
      icon: "Search",
      title: "OSINT",
      level: "Beginner",
      description: "Use open-source intelligence to solve challenges.",
    },
  ];

  const iconMap = {
    Globe,
    Lock,
    Cpu,
    TerminalSquare,
    FileSearch,
    Search,
  };

  const InfoItem = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: any;
    label: string;
    value: string;
  }) => (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="w-4 h-4" style={{ color: "rgba(255,255,255,0.6)" }} />
      <span style={{ color: "rgba(255,255,255,0.6)" }}>{label}:</span>
      <span style={{ color: "rgba(255,255,255,0.9)" }}>{value}</span>
    </div>
  );

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-900/30 text-green-300";
      case "Intermediate":
        return "bg-yellow-900/30 text-yellow-300";
      case "Advanced":
        return "bg-red-900/30 text-red-300";
      default:
        return "bg-green-900/30 text-green-300";
    }
  };

  return (
    <section
      className="relative py-24"
      style={{
        background: "#1a1a1a",
      }}
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4 tracking-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #cccccc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 12px rgba(255,255,255,0.4)",
            }}
          >
            CyberTEA CTF
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{
              color: "rgba(255,255,255,0.7)",
              textShadow: "0 0 8px rgba(0,0,0,0.3)",
            }}
          >
            Test your skills in our upcoming cybersecurity competition.
          </p>
          <a
            href="https://unstop.com/hackathons/capture-the-flag-cybertea-30-indian-institute-of-information-technology-iiit-sri-city-1570636"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transform hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(230,230,230,0.9) 100%)",
              color: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Register on Unstop
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Rounds Section */}
        <div className="space-y-6 mb-16">
          {/* Round 1 */}
          <div
            className="rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.3)] group focus-within:ring-2 focus-within:ring-white/20 transition-all duration-300 p-8"
            style={{
              background: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-baseline gap-3 mb-4">
              <span
                className="text-sm font-medium px-3 py-1 rounded-full"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Round 1
              </span>
              <h3
                className="text-2xl font-bold"
                style={{
                  color: "white",
                  textShadow: "0 0 8px rgba(0,0,0,0.3)",
                }}
              >
                {round1Data.title}
              </h3>
            </div>
            <p
              className="text-lg mb-4"
              style={{
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {round1Data.theme}
            </p>
            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {round1Data.description}
            </p>

            <div className="space-y-3">
              <InfoItem icon={Calendar} label="Date" value={round1Data.date} />
              <InfoItem
                icon={Clock}
                label="Duration"
                value={round1Data.duration}
              />
              <InfoItem
                icon={Target}
                label="Objective"
                value={round1Data.objective}
              />
            </div>
          </div>

          {/* Round 2 */}
          <div
            className="rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.3)] group focus-within:ring-2 focus-within:ring-white/20 transition-all duration-300 p-8"
            style={{
              background: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-baseline gap-3 mb-4">
              <span
                className="text-sm font-medium px-3 py-1 rounded-full"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Round 2
              </span>
              <h3
                className="text-2xl font-bold"
                style={{
                  color: "white",
                  textShadow: "0 0 8px rgba(0,0,0,0.3)",
                }}
              >
                {round2Data.title}
              </h3>
            </div>
            <p
              className="text-lg mb-4"
              style={{
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {round2Data.theme}
            </p>
            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {round2Data.description}
            </p>

            <div className="space-y-3">
              <InfoItem icon={Calendar} label="Date" value={round2Data.date} />
              <InfoItem
                icon={Clock}
                label="Duration"
                value={round2Data.duration}
              />
              <InfoItem
                icon={Target}
                label="Objective"
                value={round2Data.objective}
              />
            </div>
          </div>
        </div>

        {/* Challenge Categories Section */}
        {/* <div className="mb-16">
          <h2
            className="text-3xl font-bold mb-8 text-center tracking-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #cccccc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 12px rgba(255,255,255,0.4)",
            }}
          >
            Challenge Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesData.map((category, index) => {
              const IconComponent =
                iconMap[category.icon as keyof typeof iconMap];

              return (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 p-6"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <IconComponent
                        className="w-5 h-5"
                        style={{ color: "rgba(255,255,255,0.9)" }}
                      />
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      style={{
                        color: "white",
                        textShadow: "0 0 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                        category.level
                      )}`}
                      style={{
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {category.level}
                    </span>
                  </div>

                  <p
                    className="leading-relaxed text-sm"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CtfSection;
