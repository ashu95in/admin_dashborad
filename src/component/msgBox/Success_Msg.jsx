import React, { useEffect, useState } from "react";

const Success_Msg = ({ msg = "Message not found", isShow, hideFunc }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isShow) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => hideFunc(false), 300); // Extra delay for animation
      }, 2000); // Message stays visible for 2 seconds
    }
  }, [isShow, hideFunc]);

  return (
    <div style={{ 
      ...styles.alertBox, 
      opacity: visible ? 1 : 0, 
      transform: visible ? "translateY(0)" : "translateY(-20px)",
      transition: "opacity 0.3s ease, transform 0.3s ease"
    }}>
      {msg}
    </div>
  );
};

const styles = {
  alertBox: {
    
    
    padding: "10px",
    backgroundColor: "#81c784",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    // margin: "10px 0",
    position: "fixed",
    top: "10px",
    left: "43%",
    transform: "translateX(-50%)",
    minWidth: "200px",
    zIndex: 1000,
  },
};

export default Success_Msg;
