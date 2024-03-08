import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title/results-title";
import Button from "@/components/ui/button";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function FilteredEventsPAge() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear; // turnes it into number
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numYear < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if(!filteredEvents || filteredEvents.length === 0){
    return(
        <Fragment>
        <p>No events found for the chosen filter!</p>
        <Button link="/events">Show All Events</Button>
        </Fragment>
    ) 
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />  
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
export default FilteredEventsPAge;
