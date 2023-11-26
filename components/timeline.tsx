"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-header";
import { timeLineData } from "@/public/data/timeline";
import TimelineEvent from "./timeline-event";
import TimeLineFilter from "./timeline-filter";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Project } from "next/dist/build/swc";
import { TimeLine } from "@/types/timeline";

export default function Timeline() {
  const [filteredEvents, setFilteredEvents] = React.useState<TimeLine[]>(timeLineData);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [parent] = useAutoAnimate();
  const allTags = timeLineData.reduce((tags: string[], event: TimeLine) => {
    if (!tags.includes(event.tag)) {
        tags.push(event.tag);
    }
    return tags;
}, []);


  React.useEffect(() => {
    let filteredEvents;

    if (selectedTags.length === 0) {
        filteredEvents = timeLineData;
    } else {
        filteredEvents = timeLineData.filter((event: TimeLine) => {
            return selectedTags.some((tag: string) => event.tag.includes(tag));
        });
    }

    setFilteredEvents(filteredEvents);
}, [selectedTags, timeLineData]);

  return (
    <section className="scroll-mt-28 mb-28 mx-4">
      <TimeLineFilter tags={allTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <SectionHeading>My biography</SectionHeading>
      <div ref={parent}>
        {filteredEvents.map((project, index) => (
          <TimelineEvent key={index} {...project} />
        ))}
      </div>
    </section>
  );
}