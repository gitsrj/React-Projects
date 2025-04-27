import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*(){}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {     // useCallback - memorizes function as much as possible
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, 
  [password])      // For optimization purpose, stores execution in cache.

  useEffect(() => {          // Jab bhi page load hota hai to first time pe ye (useEffect) call hota hai.
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])  // agar provided list(Dependency array) me se kisime 
                                                                    //  change aaye to call the function(reRun)

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center'>
        <h1 className='text-white text-center my-3'>Password generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 text-center bg-white m-3 rounded-lg text-black'
            placeholder='password'
            readOnly
            ref = {passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            
            className='bg-blue-700 text-white outline-none px-2 m-2.5 rounded-md'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {characterAllowed}
            id='characterInput'
            onChange={()=>{
              setCharacterAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
