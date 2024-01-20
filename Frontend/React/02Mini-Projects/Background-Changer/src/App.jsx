import { useEffect, useRef, useState } from "react";

function App() {
  const [bgcolor, setColor] = useState('#dddbdb');
  let renderCount = useRef(0);

  useEffect(()=>{
    document.body.style.backgroundColor = bgcolor;
    renderCount.current = renderCount.current +1;
  }, [bgcolor]);


  return (
    <>
      <div id="holeBody">
        <div>
          <p>No. of Re-Renders = {renderCount.current}</p>
        </div>
        <div className="flex justify-between bg-[#dddbdb] p-2 mt-[70%] mx-16 md:mt-96 md:m-24 shadow-gray-500 shadow-sm ">
          <button className="border-solid border-[1px] border-black rounded-sm py-1 px-3 bg-[red] cursor-pointer hover:bg-red-600 hover:text-white min-w-0" onClick={()=>{setColor('red')}}>
            Red
          </button>
          <button className="border-solid border-[1px] border-black rounded-sm py-1 px-3 bg-[#e0ff2d] cursor-pointer hover:bg-yellow-400 hover:text-white min-w-0" onClick={()=>{setColor('#e0ff2d')}}>
            Yellow
          </button>
          <button className="border-solid border-[1px] border-black rounded-sm py-1 px-3 bg-[#646262] cursor-pointer hover:bg-gray-600 hover:text-white min-w-0" onClick={()=>{setColor('#646262')}}>
            Gray
          </button>
          <button className="border-solid border-[1px] border-black rounded-sm py-1 px-3 bg-[#df31fd] cursor-pointer hover:bg-purple-600 hover:text-white min-w-0" onClick={()=>{setColor('#df31fd')}}>
            Purple
          </button>
          <button className="border-solid border-[1px] border-black rounded-sm py-1 px-3 bg-[#33e657] cursor-pointer hover:bg-green-600 hover:text-white min-w-0" onClick={()=>{setColor('#33e657')}}>
            Green
          </button>
          <button className="border-solid border-[1px] border-black rounded-sm py-1 px-3 bg-[#3838f9] cursor-pointer hover:bg-blue-600 hover:text-white min-w-0" onClick={()=>{setColor('#3838f9')}}>
            Blue
          </button>
          <button className="border-solid border-[1px] border-black rounded-sm py-1 px-3 bg-[#dddbdb] cursor-pointer hover:bg-gray-600 hover:text-white min-w-0" onClick={()=>{setColor('#dddbdb')}}>
            Default
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
