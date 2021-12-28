

import { postRequest } from "../baseServiceSetup/serviceMethods";
import { configUrl } from "../configuration/index";
export const postSendOTPForLoginService = async (data) => {
    const response = await postRequest(configUrl.PostSendOTPForLogin, data);
    if (response) {
        return response.data
    }
    else {
        console.log("postSendOTPForLoginService errr ===>");
    }

}
