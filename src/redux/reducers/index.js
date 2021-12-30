import { combineReducers } from 'redux';
import { organizationReduser } from './organizationReduser';
import { fleetAgenciesReduser } from './fleetAgencyReduser';
import { usersReduser } from './usersReduser';
import { guardAgenciesReduser } from "./guardAgenciesReduser"

const reducers = combineReducers({
    allOrganization: organizationReduser,
    fleetAgencies: fleetAgenciesReduser,
    allUsers: usersReduser,
    guardAgencies: guardAgenciesReduser
});

export default reducers
