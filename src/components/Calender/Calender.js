import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import 'datejs';
import swal from "sweetalert2/dist/sweetalert2.all.min.js"

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
                date: "09/30/2018",
                title: "Some Event",
                location: "Clubhouse"
            },
            {
                date: "11/15/2017",
                title: "Some Event",
                location: "Clubhouse"
            },
            {
                date: "12/30/2017",
                title: "Some Event",
                location: "Clubhouse"
            },
            {
                date: "10/5/2017",
                title: "Some Event",
                location: "Clubhouse"
            },
            {
                date: "08/30/2018",
                title: "Chase's Birthday",
                location: "Clubhouse"
            },
            {
                date: "02/20/2018",
                title: "Chase's Birthday",
                location: "Clubhouse"
            },
            {
                date: "10/3/2018",
                title: "Megan's Birthday",
                location: "California"
            },
            {
                date: "10/12/2017",
                title: "Kris's Birthday",
                location: "Home"
            }
    ]
    var sortedEventList = eventList.sort(function(a,b) { 
        return new Date(a.date).getTime() - new Date(b.date).getTime() 
    });
    var now = new Date();
    sortedEventList.map((item,i) => {
        var myDate = Date.parse(item.date);
            if (myDate < now) {
                sortedEventList.splice(item,1)
            }
    })
    // var fixDates = eventList.map(item => {
    //     var myDate = Date.parse(item.date);
    //     var returnedDate = myDate.toString('dd MMM')
    //     item.date = returnedDate
    //     return item
    // })

    var list = sortedEventList.slice(0,3).map((item,i) => (
        <div key={i} className="event-container">
            <div className="event-date">{item.date}</div>
            <h1 className="event-title">{item.title}</h1>
            <h3 className="event-location">{item.location}</h3>
        </div>
    ))
            var today = new Date();
            var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        return (
            <div className="calender-wrapper">
                <section className="calender-container">
                    <InfiniteCalendar
                        width={800}
                        height={550}
                        selected={today}
                        disabledDays={[]}
                        minDate={lastWeek}
                        onSelect={(date) => {var myDate = Date.parse(date);
                        swal(myDate.toString('dddd, MMM yyyy'))}
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