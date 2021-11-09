import { API } from 'aws-amplify';
import Header from '../../components/Header';
import PageHeading from '../../components/PageHeading';
import * as queries from '../../src/graphql/queries';
import ScheduleList from '../../components/ScheduleList';
import Dropdown from '../../components/Dropdown';

export default function AllSchedules({ data }) {
    const sorted = data?.events?.data?.listEvents?.items?.sort(
        (a, b) => new Date(a.dateAndTime) - new Date(b.dateAndTime)
    );

    const filtered = sorted?.filter((e) => !e._deleted);

    return (
        <div className="w-full">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex lg:justify-between md:justify-evenly my-8 ">
                    <PageHeading pageName="All Schedules" />
                    {filtered.length ? (
                        <div className="flex  flex-col md:flex-row justify-around md:w-3/4 w-full py-4 md:py-0  ">
                            <Dropdown options={data?.sports?.data?.listSports?.items} label="Sport" />
                            <Dropdown options={data?.divisions?.data?.listDivisions?.items} label="Division" />
                            <Dropdown options={data?.teams?.data?.listTeams?.items} label="Team" />
                        </div>
                    ) : null}
                </div>
                <div className="z-0" />
                {!filtered.length ? (
                    <div className="prose-lg">
                        <p>There are no scheduled events right now!</p>
                    </div>
                ) : (
                    <ScheduleList events={filtered} />
                )}
            </div>
        </div>
    );
}

export async function getStaticProps(context) {
    try {
        const events = await API.graphql({ query: queries.listEvents });
        const sports = await API.graphql({ query: queries.listSports });
        const divisions = await API.graphql({ query: queries.listDivisions });
        const teams = await API.graphql({ query: queries.listTeams });
        return {
            props: { data: { events, sports, divisions, teams } },
            revalidate: 60 * 60,
        };
    } catch (err) {
        console.log(err);
        return {
            props: {
                data: {
                    events: [],
                    sports: [],
                    divisions: [],
                    teams: [],
                },
            },
        };
    }
}
