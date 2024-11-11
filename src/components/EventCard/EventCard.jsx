import { useState } from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ id, heading, date, location, img,price, initialSeats }) => {
  const { year, month } = date;
  const [availableSeats, setAvailableSeats] = useState(10);
  const [message, setMessage] = useState("");

  const handleBookTicket = () => {
    if (availableSeats > 0) {
      setAvailableSeats((prevSeats) => prevSeats - 1);
      setMessage(""); // Clear any previous messages
    } else {
      setMessage("The event is fully booked.");
    }
  };

  return (
    <>
      <Link to={`/events/${id}`}>
        <div className="card">
          <div className="card-content">
            <h3>{heading}</h3>
            <p>
              <span>Year: {year}</span>
              <span>Month: {month}</span>
            </p>
            <p>
              <span>{location}</span>
              <span>{price}</span>
            </p>
          </div>

          <div className="card-img-wrapper">
            <img src={img} alt="image not found" />
          </div>
        </div>
      </Link>
      <button onClick={handleBookTicket}>Book Ticket</button>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <p>Available Seats: {availableSeats}</p>
    </>
  );
};

export default EventCard;
