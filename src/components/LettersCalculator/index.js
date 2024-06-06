// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  lengthvalue = event => {
    const val = event.target.value.length
    this.setState({count: val})
  }
  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div>
          <h1>
            Calculate the Letters you enter
          </h1>
          <label for="enter">Enter The Phrase</label>
          <br />
          <input
            type="text"
            id="enter"
            placehold="Enter The Phrase"
            onChange={this.lengthvalue}
          />
          <div className="result">
            <p>No.of letters: {count}</p>
          </div>
        </div>

        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
