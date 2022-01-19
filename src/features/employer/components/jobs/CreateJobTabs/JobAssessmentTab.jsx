import React, { Component } from 'react'

export class JobAssessmentTab extends Component {
  constructor(props) {
    super(props)
    this.state = { started: false, generated: false }
  }

  render() {
    return (
      <div className="container bigger-space">
        <span>Assessments</span>
      </div>
    )
  }
}
