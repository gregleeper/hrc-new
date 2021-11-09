import { API } from 'aws-amplify';
import Header from '../../components/Header';
import * as queries from '../../src/graphql/queries';
import SportPageLayout from '../../components/SportPageLayout';

export default function SportPage({ sport }) {
    // console.log(sport);
    console.log(sport);
    return (
        <>
            <Header />
            <SportPageLayout
                about={sport.about}
                address={sport.address}
                sportName={sport.name}
                cost={sport.cost}
                imageURL={sport.imageURL}
            />
        </>
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
    console.log(params);
    const sport = await API.graphql({
        query: queries.getSport,
        variables: { id: params.id },
    });
    return {
        props: { sport: sport.data.getSport },

        revalidate: 1,
    };
}
