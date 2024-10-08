"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-header";
import { timeLineData } from "@/public/data/timeline";
import TimelineEvent from "./timeline-event";
import TimeLineFilter from "./timeline-filter";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { TimeLine } from "@/types/timeline";

export default function Timeline() {
  const [filteredEvents, setFilteredEvents] = React.useState<TimeLine[]>(timeLineData);
  const [selectedTag, setSelectedTag] = React.useState<string>("all");
  const [parent] = useAutoAnimate();
  const allTags = timeLineData.reduce((tags: string[], event: TimeLine) => {
    if (!tags.includes(event.tag)) {
      tags.push(event.tag);
    }
    return tags;
  }, [])
  allTags.push("all")
  allTags.sort();
  
  React.useEffect(() => {
    if(selectedTag === "all") {
      setFilteredEvents(timeLineData);
      return;
    }
    const filteredEvents = timeLineData.filter((event: TimeLine) => {
      return selectedTag === event.tag;
    });
    setFilteredEvents(filteredEvents);
  }, [selectedTag, timeLineData]);

  return (
    <section className=" mb-28 md:mx-4 flex flex-col justify-center items-center">
      <TimeLineFilter tags={allTags} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <SectionHeading>My biography</SectionHeading>
      <div ref={parent}>
        {filteredEvents.map((event, index) => (
          <TimelineEvent key={index} {...event} />
        ))}
      </div>
    </section>
  );
}