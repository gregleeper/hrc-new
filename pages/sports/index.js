import API from '@aws-amplify/api';
import PageHeading from '../../components/PageHeading';
import * as queries from '../../src/graphql/queries';
import Header from '../../components/Header';
import SportsList from '../../components/SportsList';

export default function Sports({ sports }) {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
                <PageHeading pageName="Sports" />
                <div className=" py-3">
                    <SportsList sports={sports} />
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const sports = await API.graphql({
        query: queries.listSports,
    });

    return {
        props: {
            sports: sports.data.listSports.items,
        },
    };
}
