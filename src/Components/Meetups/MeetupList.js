import React from "react";
import MeetupItem from "./MeetupItem";
import ml from "./MeetupList.module.css";
export default function MeetupList({ meetups }) {
  return (
    <div className={ml.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.id}
          address={meetup.id}
          description={meetup.description}
        />
      ))}
    </div>
  );
}
