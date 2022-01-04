import { getRequest } from "../baseServiceSetup/serviceMethods";
import { configUrl } from "../configuration";

export const getMasterGuards = async () => {
    const response = await getRequest(configUrl.getMasterGuards);
    if ( response && response.status === 200) {
        return response.data
    }else{
        console.log("postSendOTPForLoginService errr ===>");
    }
}