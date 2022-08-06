import ClientNav from '../../components/ClientNav';
import RegisterForm from '../../components/RegisterForm';
import ClientRegisterConfirm from '../../components/ClientRegisterConfirm';
const Register = () => {
    return (
        <div>
            <ClientNav />
            {localStorage.getItem('registrationQueue') === null? <RegisterForm/> : <ClientRegisterConfirm email={localStorage.getItem('registrationQueue')}/>}
        </div> 
    );
}

export default Register;