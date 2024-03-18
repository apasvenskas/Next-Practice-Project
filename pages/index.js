// import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

function HomePage(props) {

  const featuredEvents = getFeaturedEvents();

  return(
    <div>
      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate:  1800 //revalidate the page for an update dont need to redeploy with this. 
  }
}

export default HomePage;