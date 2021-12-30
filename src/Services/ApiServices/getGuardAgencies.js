import { getRequest } from "../baseServiceSetup/serviceMethods";
import { configUrl } from "../configuration";

export const getGuardAgencies = async () => {
    const response = await getRequest(configUrl.getGuardAgencies);
    if ( response && response.status === 200) {
        return response.data
    }else{
        console.log("postSendOTPForLoginService errr ===>");
    }

}