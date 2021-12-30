

import { postRequest } from "../baseServiceSetup/serviceMethods";
import { configUrl } from "../configuration/index";
export const postMasterGuardAgency = async ({
    idGuardAgency = 0,
    guardAgencyCode= "",
    guardAgencyName= "",
    contactName= "",
    idOrganisation= 0,
    idOrgBranch= 0,
    regdDate = (new Date()).toISOString().toString(),
    guardAgencyDocumentsImg= "",
    emailId= "",
    mobileNo= "",
    description= "",
    guardAgencyLocation= "",
    charges= "",
    guardAgencyAddress= "",
    activeStatus= 0
}) => {
    const data = {
        idGuardAgency,
        guardAgencyCode,
        guardAgencyName,
        contactName,
        idOrganisation,
        idOrgBranch,
        regdDate,
        guardAgencyDocumentsImg,
        emailId,
        mobileNo,
        description,
        guardAgencyLocation,
        charges,
        guardAgencyAddress,
        activeStatus
    }
    const response = await postRequest(configUrl.postMasterGuardAgency, data);
    if (response) {
        return response.data
    }
    else {
        console.log("postSendOTPForLoginService errr ===>");
    }

}
