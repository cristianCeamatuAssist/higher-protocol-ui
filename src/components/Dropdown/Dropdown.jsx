import styled from 'styled-components'
import { Form } from 'react-bootstrap'

export const Dropdown = (props) => (
  <Div className="edit-input">
    <Form.Select required defaultValue="default">
      <option disabled value="default" hidden className="gray-text">
        {props.placeholder}
      </option>
      {props.values &&
        props.values.map((value, index) => (
          <option value={value} key={index}>
            {value}
          </option>
        ))}
    </Form.Select>
  </Div>
)

const Div = styled.div`
  .form-select {
    padding: 1rem 4rem 1rem 0.75rem;
    border-radius: 0;
  }

  select:required:invalid {
    color: gray;
  }
`
