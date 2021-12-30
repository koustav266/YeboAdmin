import { putRequest } from "../baseServiceSetup/serviceMethods";
import { configUrl } from "../configuration";

export const editGuardAgencies = async ({
    idGuardAgency = null,
    guardAgencyCode ="",
    guardAgencyName = "",
    contactName = "",
    idOrganisation = 0,
    idOrgBranch = 0,
    regdDate = "",
    guardAgencyDocumentsImg = "",
    emailId= "",
    mobileNo ="",
    description ="",
    guardAgencyLocation ="",
    charges = "",
    guardAgencyAddress= "",
    activeStatus = 0
  }) => {
      let data = {
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
    const response = await putRequest(configUrl.editMasterGuardAgency + idGuardAgency, data);
    if ( response && response.status === 200) {
        return response.data
    }else{
        console.log("postSendOTPForLoginService errr ===>");
    }

}