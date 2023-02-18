import React , { Component } from "react"
import { toast } from "react-toastify";
import { addTransaction } from "../util/transaction";

class AddExpense extends Component {
    constructor(props){
        super(props);
        this.state = {
            txt:"",
            amount: 0
        }
    }

    clearForm(){
        this.setState({
            txt:"",
           amount:0 
        })
    }
 
     submitHandler(e) {
        e.preventDefault();
        try {
             const data = {          // to the show the data in console which we enter
                txt: this.state.txt,
                amount: this.state.amount
             };

             console.log('expsense = ', data)
             addTransaction(data);
             this.clearForm()
            toast.warning("Expense add successfully")
            window.location.href ="/"
        } catch(err) {
            toast.error(err.message)
        }
     }

    render() {
        return(
            <div>
                <form  onSubmit={this.submitHandler.bind(this)}>
                    <fieldset>
                        <legend className="minus">Add Expense </legend>
                        <div className="form-control">
                            <label htmlFor="txt">Text </label>
                            <input type="text" name="txt" value={this.state.txt} onChange={(e) => this.setState({txt: e.target.value})} id="txt" className="form-input" placeholder="Enter Text.." required />
                        </div>

                        <div className="form-control">
                            <label htmlFor="amount">-Amount </label>
                            <input type="number" name="amount" value={this.state.amount } onChange={e => this.setState({amount: e.target.value})} className="form-input" id="amount" placeholder="Enter Amount.." required />
                        </div>

                        <div className="form-control">
                            <input type="submit" value="Add Expense" className="btn btn-expense" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddExpense