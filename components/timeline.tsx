"use client";

import React from "react";
import SectionHeading from "./section-header";
import { timeLineData } from "@/public/data/timeline";
import TimelineEvent from "./timeline-event";

export default function Timeline() {

  return (
    <section className="scroll-mt-28 mb-28">
      <SectionHeading>My biography</SectionHeading>
      <div>
        {timeLineData.map((project, index) => (
          <React.Fragment key={index}>
            <TimelineEvent {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}