import { useState } from "react";

export function Inventory() {
   
    const [pens, setPens] = useState(5);
    const [notebooks, setNotebooks] = useState(10);
    const [inkpens, setInkpens] = useState(10);
    const[totals, setTotals] = useState(25);


    return <div>
        {/* <div className="itmes">
            <span>Books:</span>

            <button className="addBook" onClick={() => {    //buuton -> react.createElement
                setBooks(books + 1)
                setTotals(totals + 1)
            }}>+</button>

            <button className="remBook" onClick={() => {
                setBooks(books - 1)
                setTotals(totals - 1)
            }}>-</button>
            <span className="totalBooks">{books}</span>
        </div> */}

        <div className="itmes">
            <span>Pens:</span>
            <button className="addPen" onClick={() => {
                setPens(pens + 1)
                setTotals(totals + 1)
            }}>+</button>
            <button className="remPen" onClick={() => {
                setPens(pens - 1)
                setTotals(totals - 1)
            }}>-</button>
            <span className="totalPens">{pens}</span>
        </div>

        <div className="itmes">
            <span>Notebooks:</span>
            <button className="addNotebook" onClick={() => {
                setNotebooks(notebooks + 1)
                setTotals(totals + 1)
            }}>+</button>
            <button className="remNotebook" onClick={() => {
                setNotebooks(notebooks - 1)
                setTotals(totals - 1)
            }}>-</button>
            <span className="totalNotebooks">{notebooks}</span>
        </div>
        
        <div className="itmes">
            <span>InkPens:</span>
            <button className="addInkpen" onClick={() => {
                setInkpens(inkpens + 1)
                setTotals(totals + 1)
            }}>+</button>
            <button className="remInkpen" onClick={() => {
                setInkpens(inkpens - 1)
                setTotals(totals - 1)
            }}>-</button>
            <span className="totalInkpens">{inkpens}</span>
        </div>
        <div className="total">Total - {totals}</div>
    </div>

}