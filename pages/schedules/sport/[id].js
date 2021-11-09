import { API } from 'aws-amplify';
import Header from '../../../components/Header';
import PageHeading from '../../../components/PageHeading';
import * as queries from '../../../src/graphql/queries';
import ScheduleList from '../../../components/ScheduleList';
import EmptyContent from '../../../components/EmptyContent';

export default function EventsBySport({ filteredEvents, sportName }) {
    const sorted = filteredEvents.sort((a, b) => new Date(a.dateAndTime) - new Date(b.dateAndTime));
    const filtered = sorted?.filter((e) => !e._deleted);

    return (
        <div className="w-full">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex lg:justify-between md:justify-evenly my-8 ">
                    <PageHeading pageName={`Events for ${sportName}`} />
                </div>
                {filteredEvents.length > 0 ? <ScheduleList events={filtered} /> : <EmptyContent />}
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const sports = await API.graphql({ query: queries.listSports });

    const paths = sports.data.listSports.items.map((sport) => ({
        params: { id: sport.id },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const events = await API.graphql({
        query: queries.listEvents,
    });

    const sport = await API.graphql({
        query: queries.getSport,
        variables: { id: params.id },
    });

    const sportName = sport.data.getSport.name;

    const filteredEvents = events.data.listEvents.items.filter((event) => event.Sport.id === params.id);

    return {
        props: { filteredEvents, sportName },
        revalidate: 60 * 60,
    };
}
