import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-localhost_text text-2xl font-semibold">CONTACT</h1>

      <div className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <form>
          <div className="mb-4">
            <label className="text-lg text-gray-700">Name:</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="text-lg text-gray-700">Email:</label>
            <input type="email" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="text-lg text-gray-700">Message:</label>
            <textarea className="w-full border border-gray-300 rounded-md p-2" rows={6}></textarea>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white rounded-full py-2 px-4 border border-blue-500 hover:bg-transparent hover:text-blue-500 hover:border-blue-500 transition duration-300">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
