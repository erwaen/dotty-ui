import React from 'react';

interface SecondaryButtonProps {
  label: string;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ label, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: '#f8f9fa',
        color: '#333',
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
