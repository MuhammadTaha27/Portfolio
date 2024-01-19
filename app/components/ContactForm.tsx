"use client";

import React from "react";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
 
  return ( <form action={async (formData) => {
    await sendEmail(formData);
    }
  } className="max-w-md mx-auto p-4 bg-gray-200 mt-8 rounded-xl ">
  <div className="mb-4">
    <label htmlFor="name" className="block text-sm font-bold mb-2">
      Name:
    </label>
    <input
      type="text"
      id="name"
      name="name"
     
      className="w-full p-2 border rounded"
      required
    />
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-bold mb-2">
      Email:
    </label>
    <input
      type="email"
      id="email"
      name="email"
     
      className="w-full p-2 border rounded"
      required
    />
  </div>

  <div className="mb-4">
    <label htmlFor="message" className="block text-sm font-bold mb-2">
      Message:
    </label>
    <textarea
      id="message"
      name="message"
   
      className="w-full p-2 border rounded"
      rows={4}
      required
    />
  </div>

  <button type="submit" className="bg-blue-800 text-white p-2 rounded-xl" onClick={() => alert("Request Sent!")}> 
    Submit
  </button>
</form>
  )
}


