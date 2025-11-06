"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  type?: string; // e.g. "Keynote", "Workshop", "Panel Discussion"
}

interface ScheduleDay {
  date: string;
  dayLabel: string;
  events: ScheduleItem[];
}

const defaultScheduleData: ScheduleDay[] = [
  {
    date: "December 10, 2025",
    dayLabel: "Day 1",
    events: [
      {
        time: "9:30 AM - 10:00 AM",
        title: "Inauguration and Welcome Address",
        description: "Opening of the conference and welcome remarks.",
        speaker: "Organizing Committee",
        type: "Ceremony",
      },
      {
        time: "10:00 AM - 11:30 AM",
        title: "Keynote Talk – Mr. Krishna Sastry Pendyala",
        description: "",
        speaker: "Mr. Krishna Sastry Pendyala, Partner at Ernst & Young",
        type: "Keynote",
      },
      {
        time: "11:30 AM - 1:00 PM",
        title: "Keynote Talk – Prof. Rajat Subhra Chakraborty",
        description:
          "Topic: Can I Trust My Eyes? Introduction to Image Morphing and Digital Image Forensics",
        speaker: "Prof. Rajat Subhra Chakraborty, IIT Kharagpur",
        type: "Keynote",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Keynote Talk – Prof. Santhi Thilagam",
        description: "Topic: IoT Security",
        speaker: "Prof. Santhi Thilagam, NIT Surathkal",
        type: "Keynote",
      },
      {
        time: "3:30 PM - 5:00 PM",
        title: "Keynote Talk – Prof. Muttukrishnan Rajarajan",
        description:
          "Topic: Translating Digital Security Research & Innovation to Commercialization",
        speaker:
          "Prof. Muttukrishnan Rajarajan, Institute for Cyber Security, UK",
        type: "Keynote",
      },
    ],
  },
  {
    date: "December 11, 2025",
    dayLabel: "Day 2",
    events: [
      {
        time: "10:00 AM - 11:30 AM",
        title: "Keynote Talk – Prof. Bodhisatwa Mazumdar",
        description: "",
        speaker: "Prof. Bodhisatwa Mazumdar, IIT Indore",
        type: "Keynote",
      },
      {
        time: "11:30 AM - 1:00 PM",
        title: "Keynote Talk – Prof. Sharad Sinha",
        description: "",
        speaker: "Prof. Sharad Sinha, IIT Goa",
        type: "Keynote",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Hands-on Session – Mr. Karthikeyan R.",
        description: "Topic: Post Quantum Cryptography",
        speaker: "Mr. Karthikeyan R., TCS",
        type: "Hands-on Session",
      },
      {
        time: "3:30 PM - 5:00 PM",
        title: "Keynote Talk – Dr. Folayo Aina",
        description:
          "Topic: Bridging the Cybersecurity R&D Gap: Turning Academic Innovation into Industry-Ready Security Solutions",
        speaker: "Dr. Folayo Aina, University of Lancashire, UK",
        type: "Keynote",
      },
    ],
  },
  {
    date: "December 12, 2025",
    dayLabel: "Day 3",
    events: [
      {
        time: "10:00 AM - 11:30 AM",
        title: "Talk – Dr. Monosij Maitra",
        description: "Topic: Lattice-based Encryption",
        speaker: "Dr. Monosij Maitra, IIT Kharagpur",
        type: "Talk",
      },
      {
        time: "11:30 AM - 1:00 PM",
        title: "Hands-on Session – Dr. Gaurav Varshney",
        description: "Topic: Web Phishing & Email Security and Gen AI Trends",
        speaker: "Dr. Gaurav Varshney, IIT Jammu",
        type: "Hands-on Session",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Hands-on Session – Mr. Chinmaya Mishra",
        description: "Topic: AI for Cyber",
        speaker: "Mr. Chinmaya Mishra, Walmart",
        type: "Hands-on Session",
      },
      {
        time: "3:30 PM - 5:00 PM",
        title: "Keynote Talk – Prof. Chester Rebeiro",
        description: "",
        speaker: "Prof. Chester Rebeiro, IIT Madras",
        type: "Keynote",
      },
    ],
  },
  {
    date: "December 13, 2025",
    dayLabel: "Day 4",
    events: [
      {
        time: "10:00 AM - 11:00 AM",
        title: "Keynote Talk – Prof. Durga Toshniwal",
        description: "Topic: Data Protection and Privacy",
        speaker: "Prof. Durga Toshniwal, IIT Roorkee",
        type: "Keynote",
      },
      {
        time: "11:00 AM - 12:00 PM",
        title: "Keynote Talk – Prof. Shashikala Tapaswi",
        description: "Topic: Malware Analysis",
        speaker: "Prof. Shashikala Tapaswi, ABV-IIITM Gwalior",
        type: "Keynote",
      },
      {
        time: "12:00 PM - 1:00 PM",
        title: "Keynote Talk – Prof. Somanath Tripathy",
        description: "",
        speaker: "Prof. Somanath Tripathy, NIT Patna",
        type: "Keynote",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Talk – Dr. Aditya Japa",
        description:
          "Topic: Power Side Channel Attacks on Cryptography Engines",
        speaker: "Dr. Aditya Japa, Ulster University, UK",
        type: "Talk",
      },
      {
        time: "3:30 PM - 4:30 PM",
        title: "Talk – Dr. Chandra Shekhar V.",
        description: "Topic: Adversarial Machine Learning",
        speaker: "Dr. Chandra Shekhar V., Samsung",
        type: "Talk",
      },
    ],
  },
  {
    date: "December 14, 2025",
    dayLabel: "Day 5",
    events: [
      {
        time: "10:00 AM - 11:30 AM",
        title: "Talk – Dr. Chandan Gautam",
        description: "Talk presentation.",
        speaker: "Dr. Chandan Gautam, Singapore",
        type: "Talk",
      },
      {
        time: "11:30 AM - 1:00 PM",
        title: "Talk – Dr. Nikhil Tripathi",
        description: "Topic: AI for Encrypted Traffic Analysis",
        speaker: "Dr. Nikhil Tripathi, IIT (ISM) Dhanbad",
        type: "Talk",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Talk – Mr. Ujval Bucha",
        description: "Topic: Agentic AI in Cyber Defense",
        speaker: "Mr. Ujval Bucha, EclecticIQ, Dubai",
        type: "Talk",
      },
      {
        time: "3:00 PM - 4:00 PM",
        title: "Keynote Talk – Prof. John Augustine",
        description: "",
        speaker: "Prof. John Augustine, IIT Madras",
        type: "Keynote",
      },
      {
        time: "4:00 PM - 5:00 PM",
        title: "Talk – Dr. Rohit Kumar",
        description: "",
        speaker: "Dr. Rohit Kumar, ABV-IIITM Gwalior",
        type: "Talk",
      },
      {
        time: "5:00 PM onwards",
        title: "Closing Ceremony",
        description: "Closing remarks and awards.",
        speaker: "Organizing Committee",
        type: "Ceremony",
      },
    ],
  },
];

// Define a set of metallic grey/white gradients for the chips
const chipGradients = [
  "linear-gradient(135deg, rgba(220, 220, 225, 0.25) 0%, rgba(180, 180, 190, 0.2) 100%)", // Metallic grey/white
  "linear-gradient(135deg, rgba(210, 210, 220, 0.25) 0%, rgba(170, 170, 185, 0.2) 100%)", // Lighter metallic grey
  "linear-gradient(135deg, rgba(225, 225, 230, 0.25) 0%, rgba(185, 185, 200, 0.2) 100%)", // Whitish metallic grey
];

interface EventScheduleProps {
  scheduleData?: ScheduleDay[];
}

export default function EventSchedule({
  scheduleData = defaultScheduleData,
}: EventScheduleProps) {
  return (
    <section
      className="relative w-full overflow-hidden text-white py-20"
      style={{
        background: "#1a1a1a",
      }}
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4 tracking-tight relative inline-block w-full"
            style={{
              color: "#e0e0e0",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              letterSpacing: "0.05em",
            }}
          >
            Workshop Schedule
          </h2>
          {/* Removed the spotlight effect */}
          <p
            className="text-lg max-w-2xl mx-auto mt-6"
            style={{
              color: "rgba(255,255,255,0.8)",
              textShadow: "0 0 12px rgba(0,0,0,0.5)",
              fontWeight: 300,
              letterSpacing: "0.01em",
            }}
          >
            Explore our comprehensive lineup of sessions, workshops, and
            activities scheduled over the 5-day virtual event.
          </p>
        </div>

        <Accordion.Root
          className="w-full space-y-4"
          type="single"
          defaultValue={scheduleData[0]?.dayLabel}
          collapsible
        >
          {scheduleData.map((day, dayIndex) => {
            // Cycle through the predefined gradients
            const currentChipGradient =
              chipGradients[dayIndex % chipGradients.length];

            return (
              <div key={day.dayLabel}>
                <Accordion.Item
                  value={day.dayLabel}
                  className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] group focus-within:ring-2 focus-within:ring-white/30 transition-all duration-300 relative"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(40,40,40,0.9) 100%)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-lg hover:bg-white/10 transition-all duration-200 group-data-[state=open]:bg-white/5">
                      <span className="flex items-baseline gap-3">
                        <span
                          className="text-sm font-bold px-3 py-1.5 rounded-full"
                          style={{
                            background: currentChipGradient, // Apply the cycled gradient
                            color: "rgba(255,255,255,0.85)",
                            border: "1.5px solid rgba(255,255,255,0.3)",
                            boxShadow:
                              "0 0 12px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 8px rgba(0,0,0,0.3)",
                          }}
                        >
                          {day.dayLabel}
                        </span>
                        <span
                          className="text-white font-semibold"
                          style={{
                            textShadow: "0 0 12px rgba(0,0,0,0.4)",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {day.date}
                        </span>
                      </span>
                      <ChevronDownIcon
                        className="h-5 w-5 text-white/70 group-data-[state=open]:rotate-180 transition-transform duration-300 ease-in-out"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                    <div
                      className="px-6 py-6 border-t"
                      style={{
                        background: "rgba(10,10,10,0.6)",
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="space-y-8">
                        {day.events.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className="pb-6 last:pb-0 border-b border-white/10 last:border-b-0"
                          >
                            <div className="flex items-center gap-2 text-white/60 text-sm mb-3 font-medium">
                              <span
                                style={{
                                  background:
                                    "linear-gradient(135deg, #f0f0f0 0%, #a0a0a0 100%)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                }}
                              >
                                🕒
                              </span>
                              {event.time}
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <h3
                                className="text-xl font-semibold"
                                style={{
                                  color: "rgba(255,255,255,0.95)",
                                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                                  letterSpacing: "0.01em",
                                }}
                              >
                                {event.title}
                              </h3>
                              {event.type && (
                                <span
                                  className="px-3 py-1 text-xs font-bold rounded-full"
                                  style={{
                                    background: currentChipGradient, // Apply the same gradient as the day label
                                    color: "rgba(255,255,255,0.8)",
                                    border: "1.5px solid rgba(255,255,255,0.2)",
                                    boxShadow:
                                      "0 0 10px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)",
                                  }}
                                >
                                  {event.type}
                                </span>
                              )}
                            </div>

                            {event.speaker && (
                              <p
                                className="text-sm mb-3 font-medium"
                                style={{
                                  color: "rgba(200,200,200,0.7)",
                                }}
                              >
                                👤 {event.speaker}
                              </p>
                            )}
                            <p
                              className="text-base leading-relaxed"
                              style={{
                                color: "rgba(255,255,255,0.75)",
                              }}
                            >
                              {event.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </div>
            );
          })}
        </Accordion.Root>
      </div>
    </section>
  );
}
