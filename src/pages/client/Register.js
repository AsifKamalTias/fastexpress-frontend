import ClientNav from '../../components/ClientNav';
import RegisterForm from '../../components/RegisterForm';
import ClientRegisterConfirm from '../../components/ClientRegisterConfirm';

import Footer from '../../components/Footer';
const Register = () => {
    return (
        <div>
            <ClientNav />
            {localStorage.getItem('registrationQueue') === null? <RegisterForm/> : <ClientRegisterConfirm email={localStorage.getItem('registrationQueue')}/>}
            <Footer></Footer>
        </div> 
    );
}

export default Register;