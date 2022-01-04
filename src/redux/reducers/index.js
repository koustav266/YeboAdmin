import { combineReducers } from 'redux';
import { organizationReduser } from './organizationReduser';
import { fleetAgenciesReduser } from './fleetAgencyReduser';
import { usersReduser } from './usersReduser';
import { guardAgenciesReduser } from "./guardAgenciesReduser"
import {guardsReduser} from "./guardsReduser";
import {loadeReduser} from "./loaderReduser"

const reducers = combineReducers({
    allOrganization: organizationReduser,
    fleetAgencies: fleetAgenciesReduser,
    allUsers: usersReduser,
    guardAgencies: guardAgenciesReduser,
    allGuards: guardsReduser,
    loader: loadeReduser
});

export default reducers
