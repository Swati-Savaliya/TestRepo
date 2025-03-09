
export const Button = ({ label, onClick, color }) => {
    return (
      <button 
        style={{color}}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  