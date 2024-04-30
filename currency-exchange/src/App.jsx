import { useState } from 'react'
import{InputBox} from "./component"
import useCurrencyInfo from "./hook/useCurrencyInfo"


function App() {
 const [amount, setAmount] = useState()
 const [from, setForm] = useState("usd")
 const [to, setTo] = useState("inr")
 const [convertedAmount, setConvertedAmount] = useState()


 const currencyInfo = useCurrencyInfo(from)

 const options = Object.keys(currencyInfo)

const swap= ()=>{
    setForm(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

}

const convertValue = ()=>{
    setConvertedAmount(amount* currencyInfo[to] ) 
}

return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convertValue()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount= {amount}
                            currencyOptions= {options}
                            onAmountChange={(amount)=>setAmount(amount)}
                            onCurrencyChange = {(currency) =>setAmount(amount)}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                             label="to"
                             amount= {convertedAmount}
                             currencyOptions= {options}
                             onCurrencyChange = {(currency) => setTo((currency))}
                             selectCurrency={to}
                             amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    
);
}

export default App
