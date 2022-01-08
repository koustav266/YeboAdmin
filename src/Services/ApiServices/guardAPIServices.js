import { getRequest, postRequest, putRequest, deleteReqest } from "../baseServiceSetup/serviceMethods";
import { configUrl } from "../configuration";

export const getMasterGuards = async () => {
    const response = await getRequest(configUrl.getMasterGuards);
    if ( response && response.status === 200) {
        return response.data
    }else{
        console.log("getMasterGuards API error");
    }
}

export const postMasterGuard = async ({
    idGuard = 0,
    emailId = "",
    mobileNo= "",
    guardFullName ="",
    userImage = "NA",
    activeStatus= 0,
    gender= 0,
    dob = "2022-01-05T05:38:34.641Z",
    idCountry = 0,
    idState = 0,
    city = 0,
    address1= "",
    address2= "",
    zipCode = "000000",
    userSource = 0,
    appUserType = 0,
    idOrganisation = 0,
    idOrgBranch = 0,
    orgDBCode = "",
    idGuardAgency = 0,
    location = "",
    policeVerificationDate = "",
    backgroundVerificationDate= "",
    policeVerificationExpDate = "",
    backgroundVerificationExpDate = ""
}) => {
    const data = {
        idGuard,
        emailId,
        mobileNo,
        guardFullName,
        userImage,
        activeStatus,
        gender,
        dob,
        idCountry,
        idState,
        city,
        address1,
        address2,
        zipCode,
        userSource,
        appUserType,
        idOrganisation,
        idOrgBranch,
        orgDBCode,
        idGuardAgency,
        location,
        policeVerificationDate,
        backgroundVerificationDate,
        policeVerificationExpDate,
        backgroundVerificationExpDate
    }
    const response = await postRequest(configUrl.postMasterGuard, data);
    if (response) {
        return response.data
    }
    else {
        console.log("postguard error ===>");
    }
}


export const editMasterGuard = async ({
    idGuard = 0,
    emailId = "",
    mobileNo= "",
    guardFullName ="",
    userImage = "NA",
    activeStatus= 0,
    gender= 0,
    dob = "2022-01-05T05:38:34.641Z",
    idCountry = 0,
    idState = 0,
    city = 0,
    address1= "",
    address2= "",
    zipCode = "000000",
    userSource = 0,
    appUserType = 0,
    idOrganisation = 0,
    idOrgBranch = 0,
    orgDBCode = "",
    idGuardAgency = 0,
    location = "",
    policeVerificationDate = "",
    backgroundVerificationDate= "",
    policeVerificationExpDate = "",
    backgroundVerificationExpDate = ""
  }) => {
      let data = {
        idGuard,
        emailId,
        mobileNo,
        guardFullName,
        userImage,
        activeStatus,
        gender,
        dob,
        idCountry,
        idState,
        city,
        address1,
        address2,
        zipCode,
        userSource,
        appUserType,
        idOrganisation,
        idOrgBranch,
        orgDBCode,
        idGuardAgency,
        location,
        policeVerificationDate,
        backgroundVerificationDate,
        policeVerificationExpDate,
        backgroundVerificationExpDate
      }
    const response = await putRequest(configUrl.editMasterGuard + idGuard, data);
    if ( response && response.status === 200) {
        return response.data
    }else{
        console.log("postMasterGuard error ===>");
    }
}


export const deleteGuard = async (idGuard) => {
    const response = await deleteReqest(configUrl.deleteGuard + idGuard);
    if ( response && response.status === 200) {
        return response.data
    }else{
        console.log("Delete api error");
    }
}

export const activeGuard = async (idGuard) => {
    const response = await putRequest(configUrl.activeGuard + idGuard);
    if ( response && response.status === 200) {
        return response.data
    }else{
        console.log("Active api error");
    }

}

