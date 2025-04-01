import React from "react";


const ContactForm = () =>{
    return(
        <>
      <div className="300 pb-8 bg-gray-300">
<form class="max-w-sm mx-auto">
<label for="name" class="block mb-2 text-sm font-semibold text-white-900 pt-4 dark:text-black">Name</label>
      <input type="text" id="name" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

  
      <label for="email" class="block mb-2 text-sm font-semibold text-white-900 pt-4 dark:text-black">Email</label>
      <input type="email" id="email" class="block w-full p-2 text-white-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

  <label for="message" class="block mb-2 text-sm font-semibold text-white-900 pt-4 dark:text-black">Your message</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
  
</form>
</div>

</>
    )
}
export default ContactForm