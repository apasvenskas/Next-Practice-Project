import EventContent from "@/components/events/event-detail/event-content";
import EventLogistics from "@/components/events/event-detail/event-logistics";
import EventSummary from "@/components/events/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function EventDetailPage(){
    const router = useRouter();
    const eventId = router.query.eventId; 
    const event = getEventById(eventId);

    if(!event){
        return <p>No event found!</p>
    }

    return (
        <div>
            <Fragment>
                <EventSummary title={event.title}/>
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
    )
}

export default EventDetailPage;