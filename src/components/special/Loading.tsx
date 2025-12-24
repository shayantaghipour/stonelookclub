import { useEffect, useState } from "react";

interface LoadingScreenProps {
  duration?: number;
}

const LoadingScreen = ({ duration = 5000 }: LoadingScreenProps) => {
  const [visible, setVisible] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // متن ظاهر شود
    const showTimer = setTimeout(() => setVisible(true), 800);

    // خروج لودینگ
    const exitTimer = setTimeout(() => setExit(true), duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(exitTimer);
    };
  }, [duration]);

  return (
    <div className={`loading-screen ${exit ? "slide-up" : ""}`}>
      {visible && (
        <div className="loading-content">
          <h1 className="welcome-text">Welcome</h1>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
