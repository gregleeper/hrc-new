import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFootballBall } from "@fortawesome/free-solid-svg-icons";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Link from "next/link";
export default function ScheduleItem({ event }) {
  function ShowSportIcon() {
    if (event.Sport.name === "Football") {
      return (
        <FontAwesomeIcon
          icon={faFootballBall}
          className="text-yellow-700 text-xl"
        />
      );
    }
    if (event.Sport.name === "Volleyball") {
      return (
        <FontAwesomeIcon
          className="text-pink-500 text-xl"
          icon={faVolleyballBall}
        />
      );
    } else {
      return <FontAwesomeIcon className="text-xl" icon={faFutbol} />;
    }
  }
  return (
    <Link href={`/event/${event.id}`}>
      <div className="flex min-w-full justify-center items-center">
        <div className=" flex-grow">
          <ShowSportIcon />
        </div>
        <div className="min-w-full">
          <div className="flex justify-center items-center ">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className=" text-base font-medium text-gray-900">
              {event.AwayTeam.name}
            </p>
            <p className="text-sm text-gray-500 truncate px-2">{" VS "} </p>
            <p className="text-base font-medium text-gray-900">
              {event.HomeTeam.name}
            </p>
          </div>
          <div className="flex justify-center ">
            <p className="text-sm font-medium text-gray-900">
              {moment(event.dateAndTime)
                .add(5, "hours")
                .format("dddd, MMMM Do YYYY h:mm a")}
            </p>
          </div>
          <div className="flex justify-center ">
            <p className="text-sm font-medium text-gray-900">
              {event.Location.name}
            </p>
          </div>
          <div className="flex justify-center ">
            <p className="text-sm font-medium text-gray-900">
              {event.Division.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
