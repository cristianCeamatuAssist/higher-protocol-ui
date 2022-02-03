import styled, { css } from 'styled-components'

const EditPrime = (props) => (
  <Div className="edit-input" hasLabel={!props.hideLabel}>
    <span>
      {!props.hideLabel && (
        <label htmlFor="login" className="helper-text">
          {props.title}
        </label>
      )}
      <input
        type={props.type}
        className="form-control shadow-none"
        id="login"
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
    </span>
  </Div>
)

export default EditPrime

const Div = styled.div`
  input {
    border: 1px solid #c1bbbb;
    font-size: 18px;

    &:focus {
      border-left: 4px solid #0c31f1;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
  }

  ${(hasLabel) =>
    hasLabel === true &&
    css`
      span {
        position: relative;
        display: block;

        label {
          position: absolute;
          z-index: 1;
          margin-left: 27px;
          margin-top: 12px;
        }

        input {
          padding-top: 39px;
          padding-left: 27px;
        }
      }
    `}
`
