import React, { useState } from "react";
import EventCard from "../../components/EventCard/EventCard.jsx";
import { eventList } from "../../utils/EventDatabase.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./EventList.css";

const EventList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of events to show per page

  // Calculate total pages
  const totalPages = Math.ceil(eventList.length / itemsPerPage);

  // Get the events to display on the current page
  const currentEvents = eventList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderEventCards = () => {
    return currentEvents.map(({ id, date, heading, location, price, img, category }) => {
      return (
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
      );
    });
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navigation />
      <div className="event-list-wrapper">
        <div className="event-list">
          {currentEvents.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>

        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventList;
