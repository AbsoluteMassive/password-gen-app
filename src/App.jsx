import { useCallback, useState } from "react";

import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";
function App() {
  const [leng, setLeng] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let newPassword = "";
    let strdata = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      strdata += "0123456789";
    }
    if (characterAllowed) {
      strdata += "!@#$%^&*()_-+=";
    }
    for (let index = 0; index < leng; index++) {
      let positionNum = Math.floor(Math.random() * strdata.length);
      newPassword += strdata.charAt(positionNum);
    }
    if (!/[A-Z]/.test(newPassword)) {
      return passwordGenerator();
    }
    if (numberAllowed && !/[0-9]/.test(newPassword)) {
      return passwordGenerator();
    }
    if (characterAllowed && !/[^a-zA-Z0-9]/.test(newPassword)) {
      return passwordGenerator();
    }
    setPassword(newPassword);
    setCopied(false);
  }, [leng, characterAllowed, numberAllowed, setPassword]);

  const copyPassword = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <PasswordGenerator
      numberAllowed={numberAllowed}
      characterAllowed={characterAllowed}
      leng={leng}
      setNumberAllowed={setNumberAllowed}
      setLeng={setLeng}
      setCharacterAllowed={setCharacterAllowed}
      password={password}
      onGenPass={passwordGenerator}
      copied={copied}
      setCopied={setCopied}
      onCopy={copyPassword}
    />
  );
}

export default App;
