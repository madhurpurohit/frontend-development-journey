import { useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { fetchConvertedCurrency } from "../API/currencyAPI";

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState(undefined);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState(undefined);

  const currencyConvertor = async () => {
    setIsLoading(true);
    try {
      const res = await fetchConvertedCurrency(
        fromCurrency,
        toCurrency,
        amount
      );
      const data = res.data;
      setConvertedCurrency(data.conversion_result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.msg);
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    currencyConvertor();
  };

  return (
    <div className="flex min-h-screen max-w-screen items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 tracking-wider text-neutral-300 selection:bg-neutral-500">
      <div className="w-[550px] bg-neutral-700 px-12 py-15 flex flex-col space-y-5 tracking-[0.12rem] rounded-3xl">
        <h1 className="text-4xl text-[#22d3ee] font-bold text-center ">
          Currency Converter
        </h1>
        <i className="w-full h-0.5 bg-neutral-900 "></i>

        <form className="flex flex-col space-y-8" onSubmit={handleFormSubmit}>
          <label
            htmlFor="amount"
            className="text-[22px] flex gap-4 items-center"
          >
            Amount:
            <input
              type="text"
              name="amount"
              id="amount"
              pattern="\d{1,10}"
              title="Please enter only digits not characters"
              inputMode="numeric"
              placeholder="0"
              className="focus:outline-0 border border-[#67e8f9] px-8 py-2.5 rounded-3xl flex-1 w-full"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setConvertedCurrency(undefined);
              }}
              required
              autoComplete="off"
            />
          </label>
          <div className="flex justify-between items-center">
            <label
              htmlFor="from-option"
              className="text-xl flex gap-2 items-center"
            >
              From:
              <select
                name="currency-from"
                id="from-option"
                className="focus:outline-0 border border-transparent focus:border-[#6ee7b7] text-lg px-3 py-1.5 rounded-2xl bg-neutral-700"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
            <label
              htmlFor="to-option"
              className="text-xl flex gap-2 items-center"
            >
              To:
              <select
                name="currency-to"
                id="to-option"
                className="focus:outline-0 border border-transparent focus:border-[#6ee7b7] text-lg px-3 py-1.5 rounded-2xl bg-neutral-700"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="py-2 rounded-4xl text-xl font-semibold hover:bg-[#10b981] hover:shadow-[0px_0px_24px_-4px_#10b981] bg-[#34d399] focus:outline-0 text-neutral-900"
            disabled={amount <= 0 || isLoading}
          >
            {isLoading ? (
              <ThreeDot variant="bounce" color="#525252" size="medium" />
            ) : (
              "Convert"
            )}
          </button>
        </form>

        {convertedCurrency && (
          <>
            <i className="w-full h-0.5 bg-neutral-900 "></i>
            <div className="text-center text-2xl font-semibold">
              {amount} {fromCurrency} = {convertedCurrency.toFixed(2)}{" "}
              {toCurrency}
            </div>
          </>
        )}

        {error && (
          <>
            <i className="w-full h-0.5 bg-neutral-900 "></i>
            <div className="text-center text-2xl font-semibold">{error}</div>
          </>
        )}
      </div>
    </div>
  );
};
