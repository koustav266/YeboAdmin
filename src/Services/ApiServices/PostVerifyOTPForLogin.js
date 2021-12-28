
import { postRequest } from "../baseServiceSetup/serviceMethods";
import { configUrl } from "../configuration";
export const PostVerifyOTPForLoginService = async (data) => {
    console.log("PostVerifyOTPForLoginService data", data);
    const response = await postRequest(configUrl.PostVerifyOTPForLogin, data)
    if (response) {
        // console.log("PostVerifyOTPForLoginService", response);
        return response.data
    }
    else {
        console.log("PostVerifyOTPForLoginService errr ===>");
    }

}