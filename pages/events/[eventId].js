import EventContent from "@/components/events/event-detail/event-content";
import EventLogistics from "@/components/events/event-detail/event-logistics";
import EventSummary from "@/components/events/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert/error-alert";
// import { getEventById } from "@/dummy-data";
import { getEventById, getAllEvents } from "../../helpers/api-util";
// import { useRouter } from "next/router";
import { Fragment } from "react";

function EventDetailPage(props) {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          adress={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    </div>
  );
}
// aditional functions for getting data from firebase db
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30, // for reloading a page with updated data dont need to redeploy
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } })); // getting all the events
  return {
    paths: paths,
    fallback: true,
  };
}

export default EventDetailPage;
