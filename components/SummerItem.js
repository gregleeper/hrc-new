import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChild,
    faHamburger,
    faHandsHelping,
    faPaintBrush,
    faRunning,
    faSwimmer,
    faSwimmingPool,
} from '@fortawesome/free-solid-svg-icons';

export default function FacilityItem({ activity }) {
    function ShowSportIcon() {
        if (activity.name.toLowerCase().includes('lessons')) {
            return <FontAwesomeIcon icon={faSwimmer} className="text-red-600 text-3xl" />;
        }
        if (activity.name.toLowerCase().includes('pool')) {
            return <FontAwesomeIcon icon={faSwimmingPool} className="text-blue-600 text-3xl" />;
        }
        if (activity.name.toLowerCase().includes('arts')) {
            return <FontAwesomeIcon className="text-pink-800 text-3xl" icon={faPaintBrush} />;
        }
        if (activity.name.toLowerCase().includes('barbecue')) {
            return <FontAwesomeIcon className="text-pink-800 text-3xl" icon={faHamburger} />;
        }
        if (activity.name.toLowerCase().includes('run')) {
            return <FontAwesomeIcon className="text-blue-600 text-3xl" icon={faRunning} />;
        }
        return <FontAwesomeIcon className="text-3xl" icon={faHandsHelping} />;
    }
    return (
        <Link href={`/summer/${activity.id}`}>
            <div className="flex justify-between items-center  w-full">
                <div className="justify-center items-center w-2/3">
                    <p className="font-semibold text-lg">{activity.name}</p>
                    <p className="">{activity.summary}</p>
                </div>
                <div className="">
                    <ShowSportIcon />
                </div>
            </div>
        </Link>
    );
}
