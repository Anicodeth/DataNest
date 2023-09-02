import React from 'react'

const Button = ({ isLoading, type, children }) => {
  return <button
    type={type}
    disabled={isLoading}
    class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-6 py-3 rounded-full w-full text-white cursor-pointer"> 
    <p className="font-bold">
      { children }
    </p>
  </button>
}

export default Button
