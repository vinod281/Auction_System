import React, { useState } from 'react';
import './Register.css'; // Make sure the path is correct

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    title: '',
    address1: '',
    address2: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({}); // State for form validation errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone) => {
    return phone.length === 10 && /^0\d{9}$/.test(phone); // Validate for exactly 10 digits, starting with 0
  };

  const validatePassword = (password) => {
    // Check for at least one uppercase, one lowercase, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validate = () => {
    let newErrors = {};

    // Check for empty fields and add error messages
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!validatePassword(formData.password)) newErrors.password = 'Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.stateProvince) newErrors.stateProvince = 'State/Province is required';
    if (!formData.postalCode) newErrors.postalCode = 'Postal Code is required';
    if (!formData.address1) newErrors.address1 = 'Address 1 is required';

    // Validate phone (must be exactly 10 digits, starting with 0)
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Phone number must start with 0 and consist of 10 digits.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // Only submit if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Registration successful!');
    }
  };

  const handleCancel = () => {
    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      title: '',
      address1: '',
      address2: '',
      city: '',
      stateProvince: '',
      postalCode: '',
      country: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setErrors({});
  };

  const handlePhoneChange = (e) => {
    const phoneInput = e.target.value.replace(/\D/g, ''); // Allow only digits
    if (phoneInput.length <= 10) { // Limit input to 10 digits
      setFormData({ ...formData, phone: phoneInput });
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6"> {/* Bootstrap column for larger screens */}
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
            className="form-control" // Bootstrap form control
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
            className="form-control" // Bootstrap form control
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}

          <input 
            type="text" 
            name="title" 
            placeholder="Username" 
            value={formData.title} 
            onChange={handleChange} 
            className="form-control" // Bootstrap form control
          />

          <input 
            type="text" 
            name="companyName" 
            placeholder="Company Name" 
            value={formData.companyName} 
            onChange={handleChange} 
            className="form-control" // Bootstrap form control
          />

          {/* Phone number field */}
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone} // Store only the phone number
            onChange={handlePhoneChange}
            maxLength={10} // Phone number should be 10 digits
            required
            className="form-control" // Bootstrap form control
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="form-control" // Bootstrap form control
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            className="form-control" // Bootstrap form control
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
            className="form-control" // Bootstrap form control
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <div className="col-md-6"> {/* Bootstrap column for larger screens */}
          <select name="stateProvince" value={formData.stateProvince} onChange={handleChange} required className="form-control"> {/* Bootstrap form control */}
            <option value="">Select State/Province</option>
            <option value="Northern">Northern</option>
            <option value="North Western">North Western</option>
            <option value="North Central">North Central</option>
            <option value="Central">Central</option>
            <option value="Southern">Southern</option>
            <option value="Western">Western</option>
            <option value="Sabaragamuwa">Sabaragamuwa</option>
            <option value="Eastern">Eastern</option>
            <option value="Uva">Uva</option>
          </select>
          {errors.stateProvince && <p className="error">{errors.stateProvince}</p>}

          <select name="city" value={formData.city} onChange={handleChange} required className="form-control"> {/* Bootstrap form control */}
            <option value="">Select City</option>
            <option value="Galle">Galle</option>
            <option value="Matara">Matara</option>
            <option value="Hambantota">Hambantota</option>
            <option value="Colombo">Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kalutara">Kalutara</option>
            <option value="Kandy">Kandy</option>
            <option value="Matale">Matale</option>
            <option value="Nuwara Eliya">Nuwara Eliya</option>
            <option value="Kegalle">Kegalle</option>
            <option value="Rathnapura">Rathnapura</option>
            <option value="Ampara">Ampara</option>
            <option value="Batticaloa">Batticaloa</option>
            <option value="Trincomalee">Trincomalee</option>
            <option value="Badulla">Badulla</option>
            <option value="Monaragala">Monaragala</option>
            <option value="Kurunegala">Kurunegala</option>
            <option value="Puttalam">Puttalam</option>
            <option value="Anuradhapura">Anuradhapura</option>
            <option value="Polonnaruwa">Polonnaruwa</option>
            <option value="Jaffna">Jaffna</option>
            <option value="Kilinochchi">Kilinochchi</option>
            <option value="Mullaitivua">Mullaitivu</option>
            <option value="Vavuniya">Vavuniya</option>
            <option value="Mannar">Mannar</option>
          </select>
          {errors.city && <p className="error">{errors.city}</p>}

          <input 
            type="text" 
            name="postalCode" 
            placeholder="Postal Code" 
            value={formData.postalCode} 
            onChange={handleChange} 
            required 
            className="form-control" // Bootstrap form control
          />
          {errors.postalCode && <p className="error">{errors.postalCode}</p>}

          <input 
            type="text" 
            name="address1" 
            placeholder="Address 1" 
            value={formData.address1} 
            onChange={handleChange} 
            required 
            className="form-control" // Bootstrap form control
          />
          {errors.address1 && <p className="error">{errors.address1}</p>}

          <input 
            type="text" 
            name="address2" 
            placeholder="Address 2" 
            value={formData.address2} 
            onChange={handleChange} 
            className="form-control" // Bootstrap form control
          />
        </div>
      </div>

      <div className="form-buttons mt-3">
        <button 
        type="submit" 
        className="btn btn-danger"
        style={{ backgroundColor: 'red', /* Adjusted to match your color */
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '50%',
          marginRight: '20px' }}
        >Register to start</button>
        <button 
        type="button" 
        className="btn btn-secondary" 
        onClick={handleCancel}
        style={ {
          backgroundColor: 'grey', /* Adjusted to match your color */
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '50%'
      }}
        >Cancel my registration</button>
      </div>
    </form>
  );
}

export default Register;













