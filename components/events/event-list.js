import { getAllEvents } from "@/dummy-data";
import EventItem from "./event-item";
import classes from '@/styles/event-list.module.css'

function EventList(props){
    // const { items } = props;
    const eventsArray = getAllEvents();
    // console.log(items);
    // console.log(Array.isArray(items));// This should return true
    // console.log(typeof items) 

    return <ul className={classes.list}>
        {eventsArray.map((event) => (
            <EventItem 
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
        />
        ))}
    </ul>
}

export default EventList;