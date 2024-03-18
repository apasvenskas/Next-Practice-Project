import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/events-search";
import { getAllEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import { Fragment } from "react";

function AllEventsPage(props){

    const events = props.events; 
    const router = useRouter(); // need the route since it is used fro programtic nav not only getting data

    function findEventHandler(year, month){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath);
    }

    return(
        <Fragment>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </Fragment>
    );
}

export async function getStaticProps(){
    const events = await getAllEvents();

    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}

export default AllEventsPage; 