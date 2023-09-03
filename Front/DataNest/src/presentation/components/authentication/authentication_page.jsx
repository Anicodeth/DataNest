import React from 'react'

const AuthenticationPage = ({ illustration, pageTitle, children }) => {
  return (<>
    <div className='flex flex-row h-screen'>
      <div id={`${pageTitle}-illustration`} className='h-full'>
        <video controls={false} autoPlay loop src={illustration} className='h-full' />
      </div>
      <div id={`${pageTitle}-form`} className='flex-grow h-full'>
        <div className="flex flex-col h-full w-full px-10 justify-center items-center">
          { children }
        </div>
      </div>
    </div>
  </>) 
}

export default AuthenticationPage
