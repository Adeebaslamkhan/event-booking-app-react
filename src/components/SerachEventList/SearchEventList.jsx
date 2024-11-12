import EventCard from "../EventCard/EventCard"
import {eventList} from '../../utils/EventDatabase'
import "./SearchEventList.css"

const SearchEventList = ({monthYear})=>{
    const {selectedMonth,selectedYear}=monthYear;
    const filteredEvents = eventList.filter((eventDetail)=>{
        return(
            eventDetail.date.year=== selectedYear &&
            eventDetail.date.month===selectedMonth
        )
    })

    const renderEventCards =()=>{
        return filteredEvents.map(({ id, date, heading, location,price, category, img })=>{
            return(
                <EventCard
                key={id}
                id={id}
                date={date}
                heading={heading}
                location={location}
                img={img}
                price={price}
                category={category}
                />
            )
        })
    }

    return(
       <>
         {filteredEvents.length>0 ?(
            renderEventCards()
         ):(
            <p></p>
         )}
       </>
    )
}
export default SearchEventList;