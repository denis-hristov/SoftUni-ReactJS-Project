import React, { useState } from 'react';

export default function Order() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    classType: 'choose-class',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тук можеш да добавиш логика за изпращане на данни (например, към сървър)
    console.log('Submitted Form Data:', formData);
  };

  return (
    <div className="order-section">
      <div className="order-info">
          <h2 className="info-title">FORM & TIME SCHEDULE</h2>
          <p className="info-desc">
            At solmen li esser necessi uniform grammatica, pronunciation
          </p>
      </div>
          <div className="order">
            <h2 className="order-title">Make An order</h2>
            <p className="order-desc">
              At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.
            </p>
            <form onSubmit={handleSubmit} className="order-form">
              <div className="row">
                <div className="name-first">
                  <input
                    type="text"
                    className="firstName"
                    placeholder="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="name-last">
                  <input
                    type="text"
                    className="lastName"
                    placeholder="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="date">
                  <input
                    type="date"
                    className="date-box"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="type">
                  <select
                    name="classType"
                    className="type-box"
                    value={formData.classType}
                    onChange={handleChange}
                  >
                    <option value="choose-type">Choose Class</option>
                    <option value="type1">Class 1</option>
                    <option value="type2">Class 2</option>
                    <option value="type3">Class 3</option>
                  </select>
                </div>
                <div className="tel">
                  <input
                    type="tel"
                    className="tel-box"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    size="10"
                    maxLength="10"
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    className="email-box"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="massage">
                  <textarea
                    className="massage-box"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="buton">
                  <button type="submit" className="buton-box">
                    Book An order
                  </button>
                </div>
              </div>
            </form>
          </div>
    </div>
  );
};