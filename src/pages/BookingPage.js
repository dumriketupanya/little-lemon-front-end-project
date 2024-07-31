import React, { useReducer, useEffect, useState } from "react";
import BookingForm from "../components/BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

// APIs Function
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
// ----------------
// Available Time Handle userReducer
// Initialization
const initializeTimes = () => ({availableTimes: []});

// Function
const timeReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return {
                ...state,
                availableTimes: action.payload
            };
        default:
            return state;
    }
};
// ----------------
// APIs Fetching
const fetchData = async (date) => {
    try {
        const times = fetchAPI(date);
        return times;
    } catch (error) {
        console.error('Error fetching data:' , error);
        return [];
    }
};

// Time update
const updateTimes = async (selectedDate, dispatch) => {
    try {
        const times = await fetchData(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', payload: times });
    } catch (error) {
        console.error('Error updating times:', error);
    }
};


function BookingPage() {
    const [calendar, Setcalendar] =  useReducer(timeReducer, undefined, initializeTimes);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isComfirmed, setIsConfirmed] = useState(false);

    useEffect(() => {updateTimes(selectedDate, Setcalendar)}, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(new Date(date));
    };

    const handleBookingSubmit = (formData) => {
        console.log("Booking confirmation:", formData);
        setIsConfirmed(true);
    };

    return (
        <>
        {isComfirmed ? (
            <ConfirmedBooking />
        ) : (
            <BookingForm
                availableTimes={calendar.availableTimes}
                dispatch={Setcalendar}
                onDateChange={handleDateChange}
                onSubmit={handleBookingSubmit}
            />
        )}
        </>
    );
};

export default BookingPage;