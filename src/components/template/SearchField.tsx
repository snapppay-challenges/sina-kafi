import { useState, useCallback } from "react";
import useDebounceEffect from "../../hooks/useDebounceEffect";
import { useSearchParams } from "react-router-dom";

export default function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("search");
  const parsedSearchTerm = searchTerm ? JSON.parse(searchTerm) : {};

  const [inputValue, setInputValue] = useState<Record<string, string>>({
    name: parsedSearchTerm.name || "",
    lastName: parsedSearchTerm.lastName || "",
    phone: parsedSearchTerm.phone || "",
  });

  const handleSearch = useCallback(() => {
    const { name, lastName, phone } = inputValue;
    const newParams = new URLSearchParams(searchParams);

    if (name || lastName || phone) {
      newParams.delete("page");
      newParams.set("search", JSON.stringify(inputValue));
    } else {
      newParams.delete("search");
    }

    setSearchParams(newParams);
  }, [inputValue, searchParams, setSearchParams]);

  const handleInputChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const removeSearch = (key: string) => {
    setInputValue((prev) => ({ ...prev, [key]: "" }));
    handleSearch();
  };

  useDebounceEffect(handleSearch, [inputValue], 500);

  const renderInputField = (
    key: string,
    placeholder: string,
    type = "text"
  ) => (
    <div className="relative w-full">
      <input
        type={type}
        onChange={handleInputChange(key)}
        name={key}
        value={inputValue[key]}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full border border-gray-300 rounded-lg p-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
      />
      {inputValue[key] && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            removeSearch(key);
          }}
          aria-label={`Clear ${key}`}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-900 rounded-full text-2xl w-6 h-6 flex items-center justify-center hover:bg-gray-200 transition duration-200 ease-in-out"
        >
          &times;
        </button>
      )}
    </div>
  );

  return (
    <form
      className="flex flex-col md:flex-row mb-8 md:justify-evenly gap-4 w-full justify-center items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      {renderInputField("name", "Search names...")}
      {renderInputField("lastName", "Search last names...")}
      {renderInputField("phone", "Search phone...", "number")}
    </form>
  );
}
