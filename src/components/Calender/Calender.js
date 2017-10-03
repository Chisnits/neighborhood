import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import 'datejs';

import './styles/Calender.css'

class Calender extends Component {
       
    render() {
        const eventList=[
            {
                date: "09/20/2017",
                title: "Chase's Birthday",
                location: "Clubhouse"
            },
            {
                date: "10/3/2017",
                title: "Megan's Birthday",
                location: "California"
            },
            {
                date: "10/12/2017",
                title: "Kris's Birthday",
                location: "Home"
            }
    ]
    var fixDates = eventList.map(item => {
        var myDate = Date.parse(item.date);
        var returnedDate = myDate.toString('dd MMM')
        item.date = returnedDate
        return item
    })
    var list = eventList.map((item,i) => (
        <div key={i} className="event-container">
            <div className="event-date">{item.date}</div>
            <h1 className="event-title">{item.title}</h1>
            <h3 className="event-location">{item.location}</h3>
        </div>
    ))
            var today = new Date();
            var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        return (
            <div className="wrapper">
                <section className="calender-container">
                    <InfiniteCalendar
                        width={800}
                        height={550}
                        selected={today}
                        disabledDays={[]}
                        minDate={lastWeek}
                        onSelect={(date) => {var myDate = Date.parse(date);
                        alert(myDate.toString('dddd, MMM yyyy'))}
                        }
                    />
                </section>
                <section >
                    <div className="event-list-container">{list}</div>
                </section>
            </div>
        );
    }
}

export default Calender;