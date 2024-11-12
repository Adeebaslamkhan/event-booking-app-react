import React, { useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox"; // Import the FilterBox component
import Card from "../../components/EventCard/EventCard"; // Import a Card component to display individual events
import { eventList } from "../../utils/EventDatabase"; // Import your JSON data
const EventContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(eventList);

  // Filter function that considers both category and search term
  const handleFilter = (category, search) => {
    setSelectedCategory(category);
    setSearchTerm(search);

    const filtered = eventList.filter((event) => {
      const matchesCategory = category === "" || event.category === category;
      const matchesSearch =
        search === "" ||
        event.heading.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    setFilteredEvents(filtered);
  };

  return (
    <div>
      <FilterBox onFilter={handleFilter} />

      <div className="card-container">
        {filteredEvents.map((event) => (
          <Card
            id={event.id}
            category={event.category}
            heading={event.heading}
            date = {event.date}
            location={event.location}
            price={event.price}
            description={event.description}
            img={event.img}
          />
        ))}
      </div>
    </div>
  );
};

export default EventContainer;
