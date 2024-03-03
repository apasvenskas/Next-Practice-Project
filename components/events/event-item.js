import Link from "next/link";

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
        <li>
            {/* getting the desired image from public image folder */}
            <img srv={'/' + image} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                    <time>{humanReadableDate}</time>
                    </div>
                    <div>
                    <address>{formattedAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}>Expolre Event</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem;