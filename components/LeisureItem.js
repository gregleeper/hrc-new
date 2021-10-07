import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faHandsHelping,
  faPaintBrush,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
export default function FacilityItem({ activity }) {
  function ShowSportIcon() {
    if (activity.activityName.toLowerCase().includes("cheer")) {
      return (
        <FontAwesomeIcon icon={faChild} className="text-red-600 text-3xl" />
      );
    }
    if (activity.activityName.toLowerCase().includes("arts")) {
      return (
        <FontAwesomeIcon
          className="text-pink-800 text-3xl"
          icon={faPaintBrush}
        />
      );
    }
    if (activity.activityName.toLowerCase().includes("tumbling")) {
      return (
        <FontAwesomeIcon className="text-blue-600 text-3xl" icon={faRunning} />
      );
    } else {
      return <FontAwesomeIcon className="text-3xl" icon={faHandsHelping} />;
    }
  }
  return (
    <Link href={`/leisure/${activity.id}`}>
      <div className="flex justify-between items-center  w-full">
        <div className="justify-center items-center w-2/3">
          <p className="font-semibold text-lg">{activity.activityName}</p>
          <p className="">{activity.summary}</p>
        </div>
        <div className="">
          <ShowSportIcon />
        </div>
      </div>
    </Link>
  );
}
