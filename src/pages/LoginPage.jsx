import LoginForm from 'components/LoginForm';
import AdaptiveImage from 'components/AdaptiveImage';
import Container from 'components/Container/Container';

const LoginPage = () => {
  return (
    <main>
      <Container>
        <LoginForm />
      </Container>
      <AdaptiveImage />
    </main>
  );
};

export default LoginPage;
