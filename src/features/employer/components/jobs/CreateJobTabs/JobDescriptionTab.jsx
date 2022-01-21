import React, { Component } from 'react'
import EditPrime from 'components/edit-main/Edit'
import { Form } from 'react-bootstrap'
import TextAreaPrime from 'components/text-area-main/TextArea'
import ReactStars from 'react-rating-stars-component'
// components
import { Dropdown, Button } from 'components'

export class JobDescriptionTab extends Component {
  location = ['Bucharest', 'Suceava']
  remote = ['Yes', 'No']
  level = ['Junior', 'Middle', 'Senior']
  experience = ['0-1 year', '1-3 years', '3-5 years', '5-8 years', '8-* years']
  score = [100, 95, 90, 80, 70, 60, 50, 40]

  starDesc = {
    size: 22,
    value: 2.5,
    color: '#727272',
    activeColor: '#4401D4',
    a11y: true,
    isHalf: true,

    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`)
    },
  }

  constructor(props) {
    super(props)
    this.state = { activeTab: 0, expireDate: new Date(), postingDate: new Date() }
  }

  setDate(date) {
    this.setState({ expireDate: date })
  }

  render() {
    return (
      <div className="container bigger-space">
        <div className="row margin-tb-sm">
          <span className="big_label">Job Description</span>
        </div>

        <div className="row margin-tb-sm">
          <div className="col-sm-6">
            <EditPrime placeholder="Android Developer" type="email" title="Job title" />
          </div>
          <div className="col-sm-3">
            <Form.Group className="date-form">
              <Form.Label>Posting Date</Form.Label>
              <Form.Control
                type="date"
                name="date_of_birth"
                value={this.state.postingDate}
                onChange={(e) => this.setDate(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-sm-3">
            <Form.Group controlId="dob" className="date-form">
              <Form.Label>Expire Date</Form.Label>
              <Form.Control
                type="date"
                name="date_of_birth"
                value={this.state.expireDate}
                onChange={(e) => this.setDate(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>

        <div className="row margin-tb-sm">
          <div className="col-sm-3">
            <Dropdown placeholder="Location" values={this.location} />
          </div>
          <div className="col-sm-3">
            <Dropdown placeholder="Remote" values={this.remote} />
          </div>
          <div className="col-sm-3">
            <Dropdown placeholder="Level" values={this.level} />
          </div>
          <div className="col-sm-3">
            <Dropdown placeholder="Experience" values={this.experience} />
          </div>
        </div>

        <div className="row margin-tb-sm">
          <div className="col-sm">
            <TextAreaPrime placeholder="Job brief" />
          </div>
          <div className="col-sm">
            <TextAreaPrime placeholder="Responsibilities" />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="row margin-tb-sm ">
              <span className="big_label">Matching candidate</span>
            </div>

            <div className="row margin-tb-sm w-100">
              <div className="col-sm-6">
                <span className="subtitle">Hard Skills</span>
                <div className="row-candidate">
                  <span>New+</span> <ReactStars {...this.starDesc} />
                </div>
              </div>

              <div className="col-sm-6">
                <span className="subtitle">Soft Skills</span>
                <div className="row-candidate">
                  <span>New+</span> <ReactStars {...this.starDesc} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="row my-3">
              <span className="big_label">Candidate score</span>
            </div>

            <div className="row">
              <Dropdown placeholder="Matching score" values={this.score} />
            </div>
          </div>
        </div>

        <div className="button-add">
          <Button color="primary">Add job</Button>
        </div>
      </div>
    )
  }
}
