import React, { useState } from 'react';
import axios from 'axios'; 
import './SignUp.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('What is your favorite color?');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [enteredCaptcha, setEnteredCaptcha] = useState('');
  const [errors, setErrors] = useState({});

  const securityQuestions = [
    'What is your favorite color?',
    'What is the name of your first pet?',
    'In what city were you born?'
  ];

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captcha);
  };

  useState(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm() && enteredCaptcha === captcha) {
      try {
        const response = await axios.post('http://localhost:5082/api/user', {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          city,
          age,
          country,
          securityQuestion,
          securityAnswer
        });
        console.log('Form submitted successfully:', response.data);
        // Clear form fields after successful submission
        clearFormFields();
        generateCaptcha();
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error, display error message, etc.
      }
    } else {
      generateCaptcha();
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!city.trim()) {
      errors.city = 'City is required';
      isValid = false;
    }

    if (!age.trim()) {
      errors.age = 'Age is required';
      isValid = false;
    }

    if (!country.trim()) {
      errors.country = 'Country is required';
      isValid = false;
    }

    if (!securityAnswer.trim()) {
      errors.securityAnswer = 'Security answer is required';
      isValid = false;
    }

    if (!enteredCaptcha.trim()) {
      errors.captcha = 'Captcha is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const clearFormFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setCity('');
    setAge('');
    setCountry('');
    setSecurityAnswer('');
    setEnteredCaptcha('');
    setErrors({});
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="securityQuestion">Security Question:</label>
          <select
            id="securityQuestion"
            value={securityQuestion}
            onChange={(e) => setSecurityQuestion(e.target.value)}
            required
          >
            {securityQuestions.map((question, index) => (
              <option key={index} value={question}>{question}</option>
            ))}
          </select>
          {errors.securityQuestion && <span className="error">{errors.securityQuestion}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="securityAnswer">Security Answer:</label>
          <input
            type="text"
            id="securityAnswer"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
            required
          />
          {errors.securityAnswer && <span className="error">{errors.securityAnswer}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="captcha">Captcha:</label>
          <input
            type="text"
            id="captcha"
            value={enteredCaptcha}
            onChange={(e) => setEnteredCaptcha(e.target.value)}
            required
          />
          <span className="captcha">{captcha}</span>
          {errors.captcha && <span className="error">{errors.captcha}</span>}
        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
