import { combineReducers } from 'redux';
import { organizationReduser } from './organizationReduser';
import { fleetAgenciesReduser } from './fleetAgencyReduser';
import { usersReduser } from './usersReduser';

const reducers = combineReducers({
    allOrganization: organizationReduser,
    fleetAgencies: fleetAgenciesReduser,
    allUsers: usersReduser
});

export default reducers
