import Header from "../../components/Header";
import * as queries from "../../src/graphql/queries";
import { API } from "aws-amplify";
import LeisurePageLayout from "../../components/LeisurePageLayout";

export default function SportPage({ activity }) {
  console.log(activity);
  return (
    <>
      <Header />
      <LeisurePageLayout
        about={activity.about}
        address={activity.address}
        activityName={activity.activityName}
        cost={activity.cost}
        imageURL={activity.imageURL}
      />
    </>
  );
}

export async function getStaticPaths() {
  const leisures = await API.graphql({ query: queries.listLeisures });

  const paths = leisures.data.listLeisures.items.map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const activity = await API.graphql({
    query: queries.getLeisure,
    variables: { id: params.id },
  });
  return {
    props: { activity: activity.data.getLeisure },

    revalidate: 1,
  };
}
