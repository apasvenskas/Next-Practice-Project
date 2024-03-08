import Link from "next/link";
import classes from '@/styles/event-item.module.css'
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";

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
            <Image src={'/' + image} alt={title} width={200} height={150}/>
            <div className={classes.content}>
                <div className="classes.summary">
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                    <time>{humanReadableDate}</time>
                    </div>
                    <AddressIcon />
                    <div className={classes.address}>
                    <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;