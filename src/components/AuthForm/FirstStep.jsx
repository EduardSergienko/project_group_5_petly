const FirstStep = ({ formData, setFormData }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={event =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Password"
        value={formData.password}
        onChange={event =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={event =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </>
  );
};

export default FirstStep;
