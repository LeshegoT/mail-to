import React from "react";

export default function Home() {
  const email = "someone@example.com";
  const subject = "Hello from my site";
  const body = "I just wanted to get in touch with you.";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
      color: 'white',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Contact Me</h1>
      <a
        href={mailtoLink}
        style={{
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
    </div>
  );
}
