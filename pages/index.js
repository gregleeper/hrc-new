import { Fragment } from "react";

import Image from "next/image";
import mainOffice from "../public/main-office-front.jpg";
import { API } from "aws-amplify";
import * as queries from "../src/graphql/queries";
import ScheduleList from "../components/ScheduleList";
import moment from "moment";
import Header from "../components/HeaderWithHero";

export default function Home({ data }) {
  let today = new Date();
  const sorted = data.data.listEvents.items.sort(
    (a, b) => new Date(a.dateAndTime) - new Date(b.dateAndTime)
  );

  const sortedAndFiltered = sorted.filter(
    (e) => moment(e.dateAndTime) >= moment(today)
  );

  const firstSix = sortedAndFiltered.slice(0, 8);

  return (
    <div className="relative bg-white overflow-hidden">
      <Header />

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          src={mainOffice}
          height="800"
          width="1000"
          alt="tball game"
          objectFit="initial"
        />
      </div>

      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="pb-5 border-b border-gray-200 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className=" leading-6 font-bold text-gray-900 py-3 text-xl">
              Upcoming Events
            </h3>
          </div>
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-4 sm:px-6 md:mt-8 lg:mt-12 lg:px-8 xl:mt-12">
            <ScheduleList events={firstSix} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await API.graphql({ query: queries.listEvents });

  return {
    props: { data: res },
    revalidate: 1,
  };
}
