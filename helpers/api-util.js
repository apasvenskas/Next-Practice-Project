export async function getAllEvents(){
   const response = await fetch('https://nextjs-fetchingprerendering-default-rtdb.firebaseio.com/events.json');
   const data = await response.json();
  // trasnforme the retreved data from object
  const events = [];
  for(const key in data){
    events.push({
        id: key,
        ...data[key]
  })
  }
  return events;
}

// the getAllEvents get called in the following function to get Featured events
export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }