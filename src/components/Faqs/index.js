import './index.css'
import FaqItem from '../FaqItem'

// Write your code here.
const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1>FAQs</h1>
        <div>
          <ul className="faqs-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} eachFaq={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Faqs
