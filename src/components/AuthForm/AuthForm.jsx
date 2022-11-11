import { useState } from 'react';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const AuthForm = () => {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    city: '',
    phone: '',
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstStep formData={formData} setFormData={setFormData} />;
    }

    if (page === 1) {
      return <SecondStep formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div>
      <h1>Registration</h1>

      <div>
        {PageDisplay()}

        <button
          disabled={page === 0}
          onClick={() => {
            setPage(prevPage => prevPage - 1);
          }}
        >
          Prev
        </button>

        <button
          type={page === 0 ? 'button' : 'submit'}
          onClick={() => {
            if (page === 1) {
              alert('FORM SUBMITTED');
              console.log(formData);
            } else {
              setPage(prevPage => prevPage + 1);
            }
          }}
        >
          {page === 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
