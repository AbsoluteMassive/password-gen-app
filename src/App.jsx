import { useCallback, useState, useRef } from "react";

import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator";
function App() {
  const [leng, setLeng] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const passasRef = useRef(null);
  // useCallback reuses the function until dependencies change.
  const passwordGenerator = useCallback(() => {
    let newPassword = "";
    let strdata = "ABCDEFGHJKLMNPQRSTUVXYZabcdefghjkmnpqrstuvwxyz";
    if (numberAllowed) {
      strdata += "023456789";
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
  }, [leng, characterAllowed, numberAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    if (!password) return;
    passasRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
  }, [password]);
  /* const copyPasswordToClipboard = async () => {
    if (!password) {
      return;
    }
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy password:", error);
    }
  }; */

  return (
    <>
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
        onCopy={copyPasswordToClipboard}
        passasRef={passasRef}
      />
    </>
  );
}

export default App;
