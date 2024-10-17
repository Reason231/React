import * as Yup from "yup"
import HttpService from "../../services/http.service";

class AuthService extends HttpService {
    registerUserDto =() =>{
        const registrationDTO=Yup.object({
            name: Yup.string().matches(/^[a-zA-Z]+$/, "Name can contain only alpabets and space").min(2).max(50).required(),
            email:Yup.string().email().required(),
            password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password should contain the letters,number and special characters").required(),
                
            confirmPassword:Yup.string().oneOf([Yup.ref('password')]).required(),
        
            address:Yup.string().nullable().optional(),                                  // it doesn't matter if we won't write cause optional
            phone:Yup.string().min(10).max(20).matches(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Inavlid phone number"),
            image:Yup.mixed(),
            role:Yup.string().matches(/^(admin|seller|customer)$/,"Role should be admin or seller or customer").required(),
        })
        return registrationDTO
    }
}

const authSvc= new AuthService()
export default authSvc