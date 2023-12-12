import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(timer);
        navigate("/");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, navigate]);
  return (
    <div className="px-4 py-5  text-center">
      <h1 className="display-5 fw-bold ">HackerX</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          🚨 Uh-oh! You&apos;ve stumbled upon a digital black hole! Our code
          magicians couldn&apos;t conjure the page you&apos;re after. 🧙‍♂️ No
          worries, though! 🔮 Ready to teleport back to the digital haven? Hit
          the enchanted button below for an instant journey home! 🏠✨
          Alternatively, embrace the suspense and let the cosmic countdown of 10
          seconds guide you to the next coding constellation. ⏳🚀 Your
          adventure awaits! 🌌💻
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4 text-light"
            onClick={() => navigate("/")}
          >
            Home in {countdown}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
