const PasswordGenerator = ({
  password,
  setCharacterAllowed,
  setLeng,
  setNumberAllowed,
  numberAllowed,
  characterAllowed,
  leng,
  copied,
  onGenPass,
  passasRef,
  onCopy,
}) => {
  const str = Math.min(
    5,
    1 +
      (leng >= 10 ? 1 : 0) +
      (leng >= 14 ? 1 : 0) +
      (numberAllowed ? 1 : 0) +
      (characterAllowed ? 1 : 0),
  );
  const strS = {
    t: str <= 2 ? "bg-red-500" : str <= 3 ? "bg-yellow-500" : "bg-green-500",
    s: str * 20,
  };

  const message =
    !numberAllowed && !characterAllowed
      ? "Include numbers or special characters to increase your password strength."
      : !numberAllowed
        ? "Include numbers to increase your password strength."
        : !characterAllowed
          ? "Include special characters to increase your password strength."
          : leng < 10
            ? "At least 10 password length to increase your password strength."
            : "";

  return (
    <div className="container pb-8 mx-auto mt-8 ">
      <h1 className="text-4xl dark:text-white font-bold text-center mb-8 ">
        Password Generator
      </h1>
      <div className="max-w-md mx-auto  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8 dark:bg-gray-900">
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Generated Password
            </label>
            <div className="flex flex-col gap-1 sm:flex-row">
              <input
                className="shadow flex-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Your password will appear here"
                value={password}
                readOnly
                ref={passasRef}
              />
              <button
                className="bg-green-500 hover:bg-green-600 shrink-0 active:bg-green-700 mx-auto
               text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={onCopy}
              >
                {copied ? "Copied!" : "Copy to Clipboard"}
              </button>
            </div>
            <div className="w-full mt-1">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h6 className="font-semibold text-blue-gray-700 dark:text-white">
                  Password Strength
                </h6>
                <h6 className="font-semibold dark:text-white text-blue-gray-700">
                  {str * 20}%
                </h6>
              </div>

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${strS.t}`}
                  style={{ width: `${strS.s}%` }}
                />
              </div>
            </div>
          </div>
          {(!numberAllowed || !characterAllowed || leng < 10) && (
            <p className="text-gray-400 mb-1">{message}</p>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
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
              <span className="ml-2 dark:text-white">Include Numbers</span>
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
              <span className="ml-2 dark:text-white">
                Include Special Characters
              </span>
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
