import Head  from "next/head";
import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

function HomePage(props) {

  return(
    <div>
      <Head>
        <title>NextJS Events</title>
        <meata name="description" content="Find events that will improve you"/>
      </Head>
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