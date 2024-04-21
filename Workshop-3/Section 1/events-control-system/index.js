let events = []
let eventName, eventDate, eventDescription, eventInfo
let regExDate = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)


// NORMAL EXECUTION


while (true) {
    let option = prompt("Insert the number of the option:\n\n1. Add New Event\n2. Show Events or Look For One\n3. Update Event\n4. Remove Event\n5. Finish")

    if (option == "5") {
        break
    }

    else if (option == "1") {

        eventName = prompt("Insert the name of the event:").toUpperCase()
        eventDate = setEventDate(regExDate)
        eventDescription = prompt("Insert a short description of the event:")

        eventInfo = {
            "id": events.length + 1,
            "name": eventName,
            "date": eventDate,
            "description": eventDescription
        }

        events.push(eventInfo)

        alert(`Added ${eventName}`)
    }

    else if (option == "2" && events.length != 0) {
        let secOption = prompt("Insert the option:\n\n1. Show All Events\n2. Look For One")

        if (secOption == "1") {
            let allEventsMsg = ""
            events.forEach((event) => {
                allEventsMsg += `Event: ${event.name}\nID: ${event.id}\nDate: ${event.date}\nDescription: ${event.description}\n\n`
            })
            alert(allEventsMsg)
        }

        else if (secOption == "2") {
            let searchName = prompt("Insert the name of the event you are trying to find:").toUpperCase()
            let foundEvent = getEvent(searchName)

            if (foundEvent != undefined) {
                alert(`Event Found:\n\nID: ${foundEvent.id}\nName: ${foundEvent.name}\nDate: ${foundEvent.date}\nDescription: ${foundEvent.description}`)
            } else {
                alert("Event Not Found")
            }
        } else {
            alert("Not A Valid Option")
        }
    }

    else if (option == "3" && events.length != 0) {
        let searchName = prompt("Insert the name of the event you are trying to edit:").toUpperCase()
        let foundEvent = getEvent(searchName)

        if (foundEvent != undefined) {
            eventName = prompt("Insert the new name of the event:").toUpperCase()
            eventDate = setEventDate(regExDate)
            eventDescription = prompt("Insert a new short description of the event:")

            eventInfo = {
                "id": events.length + 1,
                "name": eventName,
                "date": eventDate,
                "description": eventDescription
            }

            events[events.indexOf(foundEvent)] = eventInfo

            alert("The Event Has Been Updated Correctly")
        } else {
            alert("There's No Saved Event With The Inserted Name")
        }
    }

    else if (option == "4" && events.length != 0) {
        let searchName = prompt("Insert the name of the event you are trying to remove:").toUpperCase()
        let foundEvent = getEvent(searchName)

        if (foundEvent != undefined) {
            delete events[events.indexOf(foundEvent)]
            alert("The Event Has Been Correctly Removed")
        } else {
            alert("There's No Saved Event With The Inserted Name")
        }
    }

    else {
        if (events.length == 0) {
            alert("Events List Is Currently Empty")
        } else {
            alert("Not A Valid Option")
        }
    }
}

alert("Have A Good One :D")


// FUNCTIONS


function setEventDate(regEx) {
    while (true) {
        let theDate = prompt("Insert the date of the event, with the format 'dd-mm-yyyy':")
        if (regEx.test(theDate)) {
            return theDate
        } else {
            alert("Follow the date format")
        }
    }

}

function getEvent(toFind) {
    let foundEvent
    events.forEach((event) => {
        if (event.name == toFind) {
            foundEvent = event
        }
    })

    return foundEvent
} 
