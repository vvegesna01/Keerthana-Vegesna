'use client';
import Footer from "@/components/footer/footer";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";


const Contact: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
  
    setIsClient(true);
  }, []);

  return (
    <div className="space-y-6 p-24">
      <p className="text-localhost_text leading-8 text-lg py-3 animate-fadeIn">You can find me on <Link href="https://github.com/vvegesna01" className="text-github_color font-semibold underline transition duration-300 hover:text-blue-500">Github</Link>{""}, <Link href="https://www.linkedin.com/in/keerthana-vegesna/" className="text-linkedin_color font-semibold underline transition duration-300 hover:text-blue-500" >LinkedIn</Link>{" "} and also view my resume here! </p>
      
      {/* Conditionally render PDF preview only on the client */}
      {isClient && (
        <div className="pdf-preview">
          <iframe
            src="/files/resume_2024.pdf#toolbar=0"
            width="100%"
            height="1000px"
            className="border"
          >
            This browser does not support PDFs. Please download the PDF to view it:{" "}
            <a href="/files/resume_2024.pdf">Download PDF</a>.
          </iframe>
        </div>
      )}

      {/* PDF Download Link */}
      <div className="pt-6">
        <a
          href="/files/resume_2024.pdf"
          download
          className="text-blue-500 underline hover:text-blue-700 font-semibold"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Contact;
