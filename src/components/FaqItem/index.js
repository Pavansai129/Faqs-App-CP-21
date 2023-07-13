import {Component} from 'react'
import './index.css'
// Write your code here.
class FaqItem extends Component {
  state = {showAnswer: false}

  toggleAnswer = () => {
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))
  }

  render() {
    const {showAnswer} = this.state
    const {eachFaq} = this.props
    const {id, questionText, answerText} = eachFaq
    const imgUrl = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altTextForImg = showAnswer ? 'minus' : 'plus'
    return (
      <li className="faq-item">
        <h1>{questionText}</h1>
        <img src={imgUrl} alt={altTextForImg} onClick={this.toggleAnswer} />
        {showAnswer && <p>{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
