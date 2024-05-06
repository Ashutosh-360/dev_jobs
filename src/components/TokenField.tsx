"use client";
import React, { useState } from "react";

interface TokenFieldProps {
  tokenFieldData: string[];
  setTokenFieldData: React.Dispatch<React.SetStateAction<string[]>>;
  keyName: string;
}
const TokenField: React.FC<TokenFieldProps> = ({ tokenFieldData, setTokenFieldData, keyName }) => {
  const [input, setInput] = useState<string>("");

  const changeInputHandler = (e: any) => {
    setInput(e.target.value);
  };
  const onKeyDownHandler = (e: any) => {
    if (!input || tokenFieldData.includes(input)) return;
    if (e.keyCode == 13) {
      setTokenFieldData([...tokenFieldData, input]);
      setInput("");
    }
  };

  const removeDataHandler = (element: string) => {
    let filterData = tokenFieldData.filter((item) => item != element);
    setTokenFieldData([...filterData]);
  };

  return (
    <div className="w-full flex flex-wrap gap-2 border rounded p-3">
      {tokenFieldData?.map((ele: string, idx: number) => {
        return (
          <div key={idx} className="p-1 rounded flex gap-1 items-center border bg-slate-200">
            <div>{ele}</div>
            <div className="cursor-pointer font-semibold" onClick={() => removeDataHandler(ele)}>
              x
            </div>
          </div>
        );
      })}

      <input
        value={input}
        name={keyName}
        placeholder="Enter words here"
        className="outline-none"
        onChange={changeInputHandler}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );
};

export default TokenField;
