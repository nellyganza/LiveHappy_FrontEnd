import React from 'react';
import FeaturedEvents from '../components/landingPage/featuredEvents';
import OurClients from '../components/landingPage/ourClients';
import PrevEvents from '../components/landingPage/PrevEvents';
import Separateline from '../components/landingPage/separateline';
import ServicesPage from '../components/landingPage/services';
import WelcomeImages from '../components/landingPage/welcomeImages';
import PageWrapper from '../components/Layout/UnAuthorizedLayout';

function landingPage(props) {
    return (
        <PageWrapper className="mainfont">
            <WelcomeImages />
            <Separateline  title="Featured Events"/>
            <FeaturedEvents />
            <Separateline  title="Prev Events"/>
            <PrevEvents />
            <Separateline  title="Our clients"/>
            <OurClients />
            <Separateline title="Services" />
            <ServicesPage />
        </PageWrapper>
    );
}

export default landingPage;