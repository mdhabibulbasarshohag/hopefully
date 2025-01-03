import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-[50px]">
      <div className="container mx-auto">
        <nav aria-label="Footer Navigation">
          <ul className="flex justify-center gap-[50px] text-gray-500 text-xl">
            <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
            <li><Link to="/contact" className="hover:text-gray-700">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-gray-700">Terms</Link></li>
            <li><Link to="/payment-history" className="hover:text-gray-700">Payment History</Link></li>
            <li><Link to="/presentation" className="hover:text-gray-700">Presentation</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
