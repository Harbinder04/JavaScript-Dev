import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAlloud, setNumber] = useState(false);
  const [useChar, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstwxyz";
    if (numAlloud) {
      str += "1234567890";
    }
    if (useChar) {
      str += "{}[]^&%#$";
    }
    for (let i = 1; i <= length; i++) {
      let cahr = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(cahr);
    }
    setPassword(pass);
  }, [length, numAlloud, useChar, password]);

  useEffect(() => {
    passGenerator();
  }, [length, numAlloud, useChar, setPassword]);

  //ref Hook
  const passRef = useRef(null);
  const copyPassToClipboard = useCallback(() => {
    passRef.current?.select(); // ? mark is there to check optionaly because if the value is 0.
    // passRef.current?.setSelectionRange(0, 50);  // Uses to select strictively.
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div>
      <h1 className="text-4xl text-center bg-[#374151] text-white my-5">Password Generator</h1>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg p-5 my-8 text-[#000000] bg-[#9E77F3] text-xl">
        <div className="flex-row mb-5">
          Text:
          <input
            type="text"
            placeholder="Password"
            value={password}
            className="mt-6 ml-4 w-2/3 rounded-l-sm py-1 px-1 outline-none"
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPassToClipboard}
            className="bg-[#CCF377] m-0 py-1 px-2 rounded-r-lg hover:bg-[#F8B83A] hover:font-semibold hover:text-white">
            Copy
          </button>
        </div>

        <div className="flex gap-x-3 m-3 text-base justify-center">
          <div className="flex items-center gap-x-2 mb-4 border-none">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="border-none w-24">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            {/* fliping the true & false value with the help of onChange */}
            <input
              type="checkbox" className=" h-5 w-5 "
              defaultChecked={numAlloud}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>

            {/* fliping the true & false value with the help of onChange */}
            <input
              type="checkbox" className="h-5 w-5 "
              defaultChecked={numAlloud}
              id="numberInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
