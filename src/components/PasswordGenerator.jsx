const PasswordGenerator = ({
  password,
  setCharacterAllowed,
  setLeng,
  setNumberAllowed,
  numberAllowed,
  characterAllowed,
  leng,
  copied,
  setCopied,
  onGenPass,
  onCopy,
}) => {
  const word = numberAllowed
    ? "special characters"
    : characterAllowed
      ? "numbers"
      : "numbers or special characters";

  const message = `Include ${word} to increase your password strength.`;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Password Generator
      </h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Generated Password
            </label>
            <div className="flex">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Your password will appear here"
                value={password}
                readOnly
              />
              <button
                className="bg-green-500 hover:bg-green-600 ml-1
               text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={onCopy}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
          {(!numberAllowed || !characterAllowed) && (
            <p className="text-gray-400 mb-1">{message}</p>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="leng"
            >
              Password Length: {leng}
            </label>
            <input
              className="w-full"
              id="leng"
              type="range"
              min="6"
              max="20"
              value={leng}
              onChange={(e) => setLeng(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(!numberAllowed)}
              />
              <span className="ml-2">Include Numbers</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed(!characterAllowed)}
              />
              <span className="ml-2">Include Special Characters</span>
            </label>
          </div>
          <button
            className="bg-blue-500 active:bg-blue-800 hover:bg-blue-700
           text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onGenPass}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
