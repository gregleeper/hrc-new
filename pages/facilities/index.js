import API from "@aws-amplify/api";
import PageHeading from "../../components/PageHeading";
import * as queries from "../../src/graphql/queries";
import Header from "../../components/Header";
import FacilitiesList from "../../components/FacilitiesList";
export default function Facilities({ facilities }) {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <PageHeading pageName="Facilites" />
        <div className=" py-3">
          <FacilitiesList facilities={facilities} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const facilities = await API.graphql({
    query: queries.listFacilities,
  });

  return {
    props: {
      facilities: facilities.data.listFacilities.items,
    },
  };
}
