import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">VMS</div>
            <p className="text-sm">
              © {new Date().getFullYear()} VMS. All Rights Reserved.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-sky-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-sky-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-sky-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-sky-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="hover:text-sky-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="/help-center" className="hover:text-sky-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-sky-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-6 text-2xl">
              <a href="https://facebook.com" className="hover:text-sky-400">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com" className="hover:text-sky-400">
                <TwitterIcon />
              </a>
              <a href="https://linkedin.com" className="hover:text-sky-400">
                <LinkedinIcon />
              </a>
              <a href="https://instagram.com" className="hover:text-sky-400">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
