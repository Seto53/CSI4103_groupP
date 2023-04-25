import "./styles/about.css"
import React from "react"

export function About() {
        return(
            <div style={{backgroundColor:"rgb(211, 211, 211)", height:"100vh", width:"100%"}}>
                <div className="contentA" style={{color:"black"}}>
                <h1>Need help?</h1>
                <h2>For General Navigation:</h2>
                <p>The navigation bar (for mobile users, the side menu) is always available throughout every page of the application for you to access any page from anywhere.</p>
                <br></br>
                <h2>For the Functionality of Flights:</h2>
                <p>You should see the table of all active flights. Once the table has loaded, you can click on any row of the table to visualize more specific details on the selected flight. You can also click on the "Sort by: 'Destination' or 'Flight #'" buttons to filter the table by destination city and flight number respectively.</p>
                <br></br>
                <p>You are also able to view hotels in the destination city of a particular flight by clicking "View Hotels" in the flight details.</p>
                <br></br>
                <h2>For the Functionality of Hotels:</h2>
                <p>You should see the table of all available hotels. Once the table has loaded, you can click on any row of the table to visualize more specific details on the selected hotel. You can also filter by hotel name or ranking by clicking on the "Sort by: 'name' and 'ranking'" buttons respectively.</p>
                <h2>How to track a bus:</h2>
						<ol>
							<li>
								Search for an address OR zoom into a location on the map.
							</li>
							<li>
								See the bus stops near the desired location.
							</li>
							<li>
								Select a bus stop to see the buses serviced at that stop.
							</li>
							<li>
								Select a bus route to see where that bus is right now, and when it's coming to your stop.
							</li>
						</ol>
                </div>
            </div>
        )
}

export default About;
