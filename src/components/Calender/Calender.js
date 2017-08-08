import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

class Calender extends Component {
       
    render() {
        // Render the Calendar
            var today = new Date();
            var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        return (
            <div>
                <InfiniteCalendar
                    width={400}
                    height={600}
                    selected={today}
                    disabledDays={[0,6]}
                    minDate={lastWeek}
                />
            </div>
        );
    }
}

export default Calender;