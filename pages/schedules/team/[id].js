import { API } from 'aws-amplify';
import Header from '../../../components/Header';
import PageHeading from '../../../components/PageHeading';
import * as queries from '../../../src/graphql/queries';
import ScheduleList from '../../../components/ScheduleList';
import EmptyContent from '../../../components/EmptyContent';

export default function EventsByTeam({ filteredEvents, teamName }) {
    const sorted = filteredEvents.sort((a, b) => new Date(a.dateAndTime) - new Date(b.dateAndTime));
    const filtered = sorted?.filter((e) => !e._deleted);

    return (
        <div className="w-full">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex lg:justify-between md:justify-evenly my-8 ">
                    <PageHeading pageName={`Events for the ${teamName}`} />
                </div>
                {sorted.length > 0 ? <ScheduleList events={filtered} /> : <EmptyContent />}
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const teams = await API.graphql({ query: queries.listTeams });

    const paths = teams.data.listTeams.items.map((team) => ({
        params: { id: team.id },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const events = await API.graphql({
        query: queries.listEvents,
    });

    const team = await API.graphql({
        query: queries.getTeam,
        variables: { id: params.id },
    });

    const teamName = team.data.getTeam.name;

    const filteredEvents = events.data.listEvents.items.filter(
        (event) => event.AwayTeam.id === params.id || event.HomeTeam.id === params.id
    );

    return {
        props: { filteredEvents, teamName },
        revalidate: 60 * 60,
    };
}
