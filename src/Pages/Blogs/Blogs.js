import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='px-4 blogs-container'>
            <h1 className='text-center py-2'>Blog'<span className='text-primary'>s</span></h1>
            <div>
                <h5>Difference between authorization and authentication.</h5>
                <p>In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person’s or user’s authorities are checked for accessing the resources. Authentication is done before the authorization process, whereas authorization process is done after the authentication process.</p>
            </div>
            <div>
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.
                    <br />
                    Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
                </p>
            </div>
            <div>
                <h5>What other services does firebase provide other than authentication.</h5>
                <p>There are many services which Firebase provides, Most useful of them are:
                    <li>Cloud Firestore.</li>
                    <li>Cloud Functions.</li>
                    <li>Authentication.</li>
                    <li>Hosting.</li>
                    <li>Cloud Storage.</li>
                    <li>Google Analytics.</li>
                    <li>Predictions.</li>
                    <li>Cloud Messaging.</li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;