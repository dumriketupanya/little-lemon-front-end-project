import React, { useState } from "react";

function BookingForm({ availableTimes, onDateChange, onSubmit}) {

    // State Variables for form fields
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    // Event handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingDetails = { date, time, guests, occasion };
        console.log("Form submitted with values:", bookingDetails);
        if (onSubmit) {
            onSubmit(bookingDetails);
        }
    }

    // Event handling date change
    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        if (onDateChange) {
            onDateChange(newDate);
        }
    };

    // Styles
    const outerDetailContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "550px",
        backgroundColor: "#FFFFFF",
        minWidth: '1320px',
        margin: '0 auto',
        padding: '20px'
    };

    const innerDetailContainer = {
        display: 'grid',
        gridTemplateRows: `repeat(10, 34px)`,
        rowGap: '10px',
        width: '100%',
        maxWidth: '500px',
        backgroundColor: '#EDEFEE',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const headerStyle = {
        fontSize: '35px',
        fontColor: '#333333',
        justifySelf: 'flex-end',
    };

    const labelStyle = {
        fontSize: '18px',
        fontColor: '#333333',
        fontWeight: '500'
    };

    const submitButtonStyle = {
        fontSize: '16px',
        backgroundColor: '#F4CE14',
        fontWeight: '700'
    };

    return (
        <div style={outerDetailContainer} aria-labelledby="booking-form-heading">
            <form onSubmit={handleSubmit} style={innerDetailContainer} aria-labelledby="booking-form-heading">
                <h2 style={headerStyle}>Reservations</h2>
                <label htmlFor="res-date" style={labelStyle}>Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                    aria-required="true"
                    aria-label="Select the reservation date"
                />

                <label htmlFor="res-time" style={labelStyle}>Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    required
                    onChange={(e) => setTime(e.target.value)}
                    aria-required="true"
                    aria-label="Select the reservation time">
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>

                <label htmlFor="guests" style={labelStyle}>Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    value={guests}
                    placeholder="1"
                    min="1"
                    max="10"
                    required
                    onChange={(e) => setGuests(Number(e.target.value))}
                    aria-required="true"
                    aria-label="Enter the number of guests"
                />

                <label htmlFor="occasion" style={labelStyle}>Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    required
                    onChange={(e) => setOccasion(e.target.value)}
                        aria-required="true"
                        aria-label="Select the occasion">
                        <option value="">Select an occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>

                <input
                    type="submit"
                    style={submitButtonStyle}
                    value="Make Your Reservation"
                    aria-label="Submit reservation form"
                />
            </form>
        </div>

    );
};

export default BookingForm;
