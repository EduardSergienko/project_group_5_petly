import AuthForm from 'components/AuthForm';
import FormSection from 'components/AuthForm/FormSection';
import Container from 'components/Container/Container';

const RegisterPage = () => {
  return (
    <main>
      <FormSection>
        <Container> 
          <AuthForm />
        </Container>
       </FormSection>
    </main>
  );
};

export default RegisterPage;
