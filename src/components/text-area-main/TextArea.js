const TextAreaPrime = (props) => (
  <div className="edit-input">
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows="5"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </div>
)

export default TextAreaPrime
