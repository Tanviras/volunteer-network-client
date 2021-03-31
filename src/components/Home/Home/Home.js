import React from 'react';
import Header from '../../Header/Header';
import HomeIntro from '../HomeIntro/HomeIntro';
import HomeMain from '../HomeMain/HomeMain';
import VolunteeringActivities from '../VolunteeringActivities/VolunteeringActivities';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeIntro></HomeIntro>
            <HomeMain></HomeMain>
            <VolunteeringActivities></VolunteeringActivities>
        </div>
    );
};

export default Home;