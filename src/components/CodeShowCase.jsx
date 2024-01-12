import React from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';

function CodeShowCase({code}) {
    const [codeShit, setCode] = useState(code)

  
   
  return (
    
    <div>
    <CodeEditor
      value={codeShit}
      language="jsx"
      placeholder="Please enter JS code."
      padding={15}
      style={{
        fontSize: 14,
        backgroundColor: "black",
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
      }}
    />
  </div>
);
}

export default CodeShowCase