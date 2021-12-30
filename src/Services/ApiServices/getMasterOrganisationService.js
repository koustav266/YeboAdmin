

import { getRequest } from "../baseServiceSetup/serviceMethods";
import { configUrl } from "../configuration";
export const getMasterOrganisation = async () => {
    const response = await getRequest(configUrl.getMasterOrganisation);
    if (response) {
        // console.log("postSendOTPForLoginService", response);
        return response.data
    }
    else {
        console.log("postSendOTPForLoginService errr ===>");
    }

}
