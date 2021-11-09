import Link from 'next/link';
import Image from 'next/image';

export default function FacilityItem({ facility }) {
    console.log(facility);
    return (
        <Link href={`/facilities/${facility.id}`}>
            <div className="flex justify-between items-center  w-full">
                <div className="justify-center items-center w-2/3">
                    <p className="font-semibold text-lg">{facility.name}</p>
                    <p className="">{facility.address}</p>
                </div>
                <div>
                    <Image className="rounded-lg w-1/3" src={facility.imageURL} width={100} height={100} alt="" />
                </div>
            </div>
        </Link>
    );
}
