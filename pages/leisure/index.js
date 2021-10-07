import { API } from "aws-amplify";
import * as queries from "../../src/graphql/queries";
import Header from "../../components/Header";
import LeisureList from "../../components/LeisureList";
import PageHeading from "../../components/PageHeading";

export default function Leisure({ activities }) {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <PageHeading pageName="Leisure Activities" />
        <div className=" py-3">
          <LeisureList activities={activities} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const leisures = await API.graphql({
    query: queries.listLeisures,
  });

  return {
    props: {
      activities: leisures.data.listLeisures.items,
    },
  };
}
