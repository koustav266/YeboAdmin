import { deleteReqest, putRequest } from "../baseServiceSetup/serviceMethods";
import { configUrl } from "../configuration";

export const deleteGuardAgency = async (IdGuardAgency) => {
    const response = await deleteReqest(configUrl.deleteGuardAgency + IdGuardAgency);
    if ( response && response.status === 200) {
        return response.data
    }else{
        console.log("Delete api error");
    }

}

export const activeGuardAgency = async (IdGuardAgency) => {
    const response = await putRequest(configUrl.activeGuardAgency + IdGuardAgency);
    if ( response && response.status === 200) {
        return response.data
    }else{
        console.log("Active api error");
    }

}