import ClientNav from "../../components/ClientNav";
import Footer from "../../components/Footer";
import ForgotPasswordEmailInput from "../../components/ForgotPasswordEmailInput";
import ForgotPasswordCodeInput from "../../components/ForgotPasswordCodeInput";

const ForgotPassword = () => {
    return(
        <>
            <ClientNav></ClientNav>
            {localStorage.getItem('forgot-password-queue') === null ?
                <ForgotPasswordEmailInput></ForgotPasswordEmailInput>
                :
                <ForgotPasswordCodeInput></ForgotPasswordCodeInput>
            }
            
            <Footer></Footer>
        </>
    );
}

export default ForgotPassword;