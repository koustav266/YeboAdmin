import { deleteReqest } from "../baseServiceSetup/serviceMethods";
import { configUrl } from "../configuration";

export const getUsers = async ({
    
}) => {
    const response = await deleteReqest(configUrl.getUsers);
    if ( response && response.status === 200) {
        return response.data
    }else{
        console.log("postSendOTPForLoginService errr ===>");
    }

}