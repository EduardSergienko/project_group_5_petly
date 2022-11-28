import LoginForm from 'components/LoginForm';
import FormSection from 'components/AuthForm/FormSection';
import Container from 'components/Container/Container';

const LoginPage = () => {
  return (
    <main>
      <FormSection>
        <Container>
          <LoginForm />
        </Container>
      </FormSection>
    </main>
  );
};

export default LoginPage;
