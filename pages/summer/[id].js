import { API } from 'aws-amplify';
import Header from '../../components/Header';
import * as queries from '../../src/graphql/queries';
import SummerPageLayout from '../../components/SummerPageLayout';

export default function SummerActivityPage({ activity }) {
    console.log(activity);
    return (
        <>
            <Header />
            <SummerPageLayout
                about={activity.about}
                address={activity.address}
                activityName={activity.name}
                cost={activity.cost}
                imageURL={activity.imageURLs[0]}
            />
        </>
    );
}

export async function getStaticPaths() {
    const summers = await API.graphql({ query: queries.listSummers });

    const paths = summers.data.listSummers.items.map((item) => ({
        params: { id: item.id },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const activity = await API.graphql({
        query: queries.getSummer,
        variables: { id: params.id },
    });
    return {
        props: { activity: activity.data.getSummer },

        revalidate: 1,
    };
}
