import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFootballBall,
  faVolleyballBall,
  faFutbol,
  faBasketballBall,
  faBaseballBall,
} from "@fortawesome/free-solid-svg-icons";
export default function FacilityItem({ sport }) {
  function ShowSportIcon() {
    if (sport.name === "Football" || sport.name === "Tackle Football") {
      return (
        <FontAwesomeIcon
          icon={faFootballBall}
          className="text-yellow-700 text-3xl"
        />
      );
    }
    if (sport.name === "Basketball") {
      return (
        <FontAwesomeIcon
          className="text-yellow-600 text-3xl"
          icon={faBasketballBall}
        />
      );
    }
    if (sport.name.includes("Baseball") || sport.name.includes("TBall")) {
      return (
        <FontAwesomeIcon
          className="text-3xl text-yellow-600"
          icon={faBaseballBall}
        />
      );
    }
    if (sport.name.includes("Softball")) {
      return (
        <FontAwesomeIcon
          className=" text-yellow-200 text-3xl"
          icon={faBaseballBall}
        />
      );
    }
    if (sport.name === "Volleyball") {
      return (
        <FontAwesomeIcon
          className="text-pink-500 text-3xl"
          icon={faVolleyballBall}
        />
      );
    } else {
      return <FontAwesomeIcon className="text-3xl" icon={faFutbol} />;
    }
  }
  return (
    <Link href={`/sports/${sport.id}`}>
      <div className="flex justify-between items-center  w-full">
        <div className="justify-center items-center w-2/3">
          <p className="font-semibold text-lg">{sport.name}</p>
          <p className="">{sport.summary}</p>
        </div>
        <div className="">
          <ShowSportIcon />
        </div>
      </div>
    </Link>
  );
}
