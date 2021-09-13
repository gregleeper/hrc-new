import API from "@aws-amplify/api";
import { useRouter } from "next/dist/client/router";
import * as queries from "../../src/graphql/customQueries";
import Header from "../../components/Header";
import PageHeading from "../../components/PageHeading";
import Spinner from "../../components/Spinner";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import moment from "moment";

export default function Event() {
  const router = useRouter();
  const { id } = router.query;

  const [event, setEvent] = useState({});

  const {
    data: eventData,

    isSuccess,
    isLoading,
    isLoadingError,
  } = useQuery(
    ["event", id],
    async () => {
      const myData = API.graphql({
        query: queries.getEvent,
        variables: { id },
      });
      return myData;
    },
    {
      retry: true,
      refetchInterval: false,
      staleTimer: "Infinity",
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      setEvent(eventData.data.getEvent);
    }
  }, [eventData, isSuccess]);

  function DataDisplay() {
    if (event && event.Sport) {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-lg ">
            <div>
              <PageHeading pageName={`Event - ${event.Sport.name}`} />
            </div>
            <div className="text-center text-sm">
              <div className="flex justify-evenly items-center pt-8 pb-2">
                <div>
                  <h5 className="text-2xl">{event.AwayTeam.name}</h5>
                </div>
                <div>
                  <p>vs</p>
                </div>
                <div>
                  <h5 className="text-2xl">{event.HomeTeam.name}</h5>
                </div>
              </div>
              <div>
                <p>{event.Location.name}</p>
              </div>
              <div>
                {moment(event.dateAndTime)
                  .add(5, "hours")
                  .format("dddd, MMMM Do YYYY h:mm a")}
              </div>
            </div>
            {event.HomeTeam.roster.items.length &&
              event.AwayTeam.roster.items.length && (
                <div className="w-full py-10">
                  <div className="w-3/6 mx-auto">
                    <div>
                      <p className="text-center text-lg font-semibold">
                        {event.AwayTeam.name}
                      </p>
                      <ul>
                        {event.AwayTeam.roster.items.map((player) => (
                          <li className="flex justify-between" key={player}>
                            <p>{player.name}</p> <p>{player.number}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-3/6 mx-auto">
                    <div>
                      <p className="text-center text-lg font-semibold">
                        {event.HomeTeam.name}
                      </p>
                      <ul>
                        {event.HomeTeam.roster.items.map((player) => (
                          <li className="flex justify-between" key={player}>
                            <p>{player.name}</p> <p>{player.number}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      );
    } else if (isLoading) {
      return <Spinner />;
    } else {
      return <div>no</div>;
    }
  }

  return (
    <div className="w-full">
      <Header></Header>
      <DataDisplay></DataDisplay>
    </div>
  );
}
