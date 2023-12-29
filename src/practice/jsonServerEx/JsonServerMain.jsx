import React from 'react'

function JsonServerMain() {
  return (
    
   <div className='w-full h-full bg-gray-400'>

   <h1 className='main-heder'>How to create a JSON server</h1>
<h2 className='side-heder'> Step 1</h2>
<span className='text-gray-700 font-medium'>Open the JSON file in the src folder (this JSON file is where the data is stored).</span>
<h2 className='side-heder'>Step 2</h2>
<span className='text-gray-700 font-medium'>Type this command into the batch terminal: <code>npm install -g json-server</code></span>
<h2 className='side-heder'>Step 3</h2>
<span  className='text-gray-700 font-medium'>To start the JSON server: <code>json-server --watch jsonServer.json</code></span>
<h2 className='side-heder'>Step 4</h2>
<span className='text-gray-700 font-medium'>Copy the first URL and use it to send requests (GET/POST).</span>
<div></div>
<span className='text-red-700 font-medium'>*** An example of the use is in Axios API in the POST option.</span>

</div>

    
    
    
    
  )
}

export default JsonServerMain