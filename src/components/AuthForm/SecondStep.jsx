const SecondStep = ({ formData, setFormData }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={event =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="City, region"
        value={formData.city}
        onChange={event =>
          setFormData({ ...formData, city: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Mobile phone"
        value={formData.phone}
        onChange={event =>
          setFormData({ ...formData, phone: event.target.value })
        }
      />
    </>
  );
};

export default SecondStep;
