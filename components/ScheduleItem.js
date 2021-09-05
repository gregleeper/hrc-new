import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFootballBall } from "@fortawesome/free-solid-svg-icons";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import moment from "moment";

export default function ScheduleItem({ event }) {
  function ShowSportIcon() {
    if (event.Sport.name === "Football") {
      return (
        <FontAwesomeIcon icon={faFootballBall} className="text-blue-600" />
      );
    }
    if (event.Sport.name === "Volleyball") {
      return <FontAwesomeIcon icon={faVolleyballBall} />;
    } else {
      return <FontAwesomeIcon icon={faFutbol} />;
    }
  }
  return (
    <>
      <div className=" flex-grow">
        <ShowSportIcon />
      </div>
      <div className="min-w-full">
        <div className="flex justify-center ">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">
            {event.AwayTeam.name}
          </p>
          <p className="text-sm text-gray-500 truncate px-2">{" VS "} </p>
          <p className="text-sm font-medium text-gray-900">
            {event.HomeTeam.name}
          </p>
        </div>
        <div className="flex justify-center ">
          <p className="text-xs font-medium text-gray-900">
            {moment(event.dateAndTime).format("dddd, MMMM Do YYYY h:mm a")}
          </p>
        </div>
        <div className="flex justify-center ">
          <p className="text-xs font-medium text-gray-900">
            {event.Location.name}
          </p>
        </div>
        <div className="flex justify-center ">
          <p className="text-xs font-medium text-gray-900">
            {event.Division.name}
          </p>
        </div>
      </div>
    </>
  );
}
