import Header from "../../components/Header";
import * as queries from "../../src/graphql/queries";
import { API } from "aws-amplify";
import FacilityPageLayout from "../../components/FacilityPageLayout";

export default function FacilityPage({ facility }) {
  //console.log(facility);
  console.log(facility);
  return (
    <>
      <Header />
      <FacilityPageLayout
        about={facility.about}
        address={facility.address}
        facilityName={facility.name}
        imageURL={facility.imageURL}
      />
    </>
  );
}

export async function getStaticPaths() {
  const facilities = await API.graphql({ query: queries.listFacilities });
  console.log(facilities);
  const paths = facilities.data.listFacilities.items.map((facility) => ({
    params: { id: facility.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const facility = await API.graphql({
    query: queries.getFacility,
    variables: { id: params.id },
  });
  console.log(facility);
  return {
    props: { facility: facility.data.getFacility },

    revalidate: 1,
  };
}
