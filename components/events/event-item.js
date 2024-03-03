import Link from "next/link";
import classes from '@/styles/event-item.module.css'

function EventItem(props){
    const { title, image, date, location, id } = props

    // formats the date
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: "numeric",
    });
    
    // formating the address 
    const formattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`;

    return(
        <li className={classes.item} >
            {/* getting the desired image from public image folder */}
            <img srv={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className="classes.summary">
                    <h2>{title}</h2>
                    <div className={classes.date}>
                    <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                    <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={exploreLink}>Expolre Event</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem;