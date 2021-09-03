import Header from "../../../components/Header";
import PageHeading from "../../../components/PageHeading";
import { API } from "aws-amplify";
import * as queries from "../../../src/graphql/queries";
import ScheduleList from "../../../components/ScheduleList";
import EmptyContent from "../../../components/EmptyContent";

export default function EventsByDivision({ filteredEvents, divisionName }) {
  return (
    <div className="w-full">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex lg:justify-between md:justify-evenly my-8 ">
          <PageHeading pageName={`Events for ${divisionName}`} />
        </div>
        {filteredEvents.length > 0 ? (
          <ScheduleList events={filteredEvents} />
        ) : (
          <EmptyContent />
        )}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const divisions = await API.graphql({ query: queries.listDivisions });

  const paths = divisions.data.listDivisions.items.map((division) => ({
    params: { id: division.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const events = await API.graphql({
    query: queries.listEvents,
  });

  const division = await API.graphql({
    query: queries.getDivision,
    variables: { id: params.id },
  });

  const divisionName = division.data.getDivision.name;

  const filteredEvents = events.data.listEvents.items.filter(
    (event) => event.Division.id === params.id
  );

  return {
    props: { filteredEvents, divisionName },
  };
}
