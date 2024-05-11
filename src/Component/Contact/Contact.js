import React from 'react';
import { ContactForm } from 'react-contact-form';

function Contact() {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <ContactForm
            onSubmitContact={(e) => console.log(e)}
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            buttonClassName="bg-red-500 text-white py-2 px-4 rounded-md mt-4"
            inputClassName="border-gray-300 border-solid border py-2 px-4 rounded-md w-full"
            textareaClassName="border-gray-300 border-solid border py-2 px-4 rounded-md w-full h-32 resize-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
