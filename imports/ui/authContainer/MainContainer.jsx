import { withTracker } from 'meteor/react-meteor-data';
import MainPage from './MainPage.jsx'


export default MainContainer = withTracker(({params}) => {
    const currentUser = Meteor.user();
    return {
        currentUser,
    };
})(MainPage);