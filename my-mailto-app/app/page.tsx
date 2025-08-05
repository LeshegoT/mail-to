'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [formVisible, setFormVisible] = useState(false);
  const [state, handleSubmit] = useForm("mblkzyra");

  const email = "someone@example.com";
  const subject = "Hello from my site";
  const body = "I just wanted to get in touch with you.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Me</h1>

      {/* Mailto Button */}
      <a
        href={mailtoLink}
        style={{
          marginBottom: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '1rem'
        }}
      >
        Send Email
      </a>

      {/* Toggle Form Button */}
      <button
        onClick={() => setFormVisible(!formVisible)}
        style={{
          marginBottom: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#555',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        {formVisible ? 'Hide Form' : 'Open Contact Form'}
      </button>

      {/* Formspree Form */}
      {formVisible && (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%' }}>
          {state.succeeded && <p>Thanks for reaching out!</p>}

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
