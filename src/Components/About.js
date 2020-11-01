import React from 'react'

function About() {
    return (
        <div className="container mt-6 ">
            <h4 className="text-center">
                About
            </h4>

            <div className="jumbotron mt-5">
                <ul>
                    <li>Are you official?<p>No</p></li>
                    <li>What are your sources? How is the data gathered for this project?<p>We are using state bulletins and official handles to update our numbers. The data is validated by a group of volunteers and published into a Google sheet and an API. API is available for all at api.covid19india.org. We would love it if you can use this data in the fight against this virus. The source list is here.</p></li>
                    <li>Why does covid19india.org have difference in numbers compared to MOHFW website?<p>MoHFW updates the data at a scheduled time. However, we update them based on state press bulletins, official (CM, Health M) handles, PBI, Press Trust of India, ANI reports. These are generally more recent.</p></li>
                    <li>Where can I find the data for this?<p>All the data is available through an API for further analysis and development here : api.covid19india.org</p></li>
                    <li>Who are you?
                        <p>We are a group of dedicated volunteers who curate and verify the data coming from several sources. We extract the details, like a patient's relationship with other patients to identify local and community transmissions, travel history and status. We never collect or expose any personally identifiable data regarding the patients.</p>
                    </li>
                    <li>Why are you guys putting in time and resources to do this while not gaining a single penny from it?
                        <p>Because it affects all of us. Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About
