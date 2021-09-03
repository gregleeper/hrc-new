import Header from "../../components/Header";
import PageHeading from "../../components/PageHeading";
import { API } from "aws-amplify";
import * as queries from "../../src/graphql/queries";
import ScheduleList from "../../components/ScheduleList";
import Select from "../../components/Select";
import Dropdown from "../../components/Dropdown";
export default function AllSchedules(data) {
  const sorted = data.data.events.data.listEvents.items.sort(
    (a, b) => new Date(a.dateAndTime) - new Date(b.dateAndTime)
  );

  return (
    <div className="w-full">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex lg:justify-between md:justify-evenly my-8 ">
          <PageHeading pageName="All Schedules" />
          <div className="md:flex md:justify-around md:w-3/4 w-3/5 py-4 md:py-0">
            <Dropdown
              options={data.data.sports.data.listSports.items}
              label="Sport"
            />
            <Dropdown
              options={data.data.divisions.data.listDivisions.items}
              label="Division"
            />
            <Dropdown
              options={data.data.teams.data.listTeams.items}
              label="Team"
            />
          </div>
        </div>
        <div className="z-0"></div>
        <ScheduleList events={sorted} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const events = await API.graphql({ query: queries.listEvents });
  const sports = await API.graphql({ query: queries.listSports });
  const divisions = await API.graphql({ query: queries.listDivisions });
  const teams = await API.graphql({ query: queries.listTeams });
  return {
    props: { data: { events, sports, divisions, teams } }, // will be passed to the page component as props
  };
}
