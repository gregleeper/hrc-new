import { API } from "aws-amplify";
import * as queries from "../../src/graphql/queries";
import Header from "../../components/Header";
import SummerList from "../../components/SummerList";
import PageHeading from "../../components/PageHeading";

export default function Summer({ activities }) {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <PageHeading pageName="Summer Activities" />
        <div className=" py-3">
          <SummerList activities={activities} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const summers = await API.graphql({
    query: queries.listSummers,
  });

  return {
    props: {
      activities: summers.data.listSummers.items,
    },
  };
}
