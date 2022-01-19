import React, { Component } from 'react'
import TextAreaPrime from 'components/text-area-main/TextArea'
import EditPrime from 'components/edit-main/Edit'
import { Spinner } from 'react-bootstrap'
import { Button } from 'components'

export class JobSmartContractTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      started: false,
      generated: false,
      hash: '',
      condition: '',
      value: 0,
      min_points: 0,
      task: '',
      description: '',
      loading: false,
    }
  }

  that = this

  async generate_contract() {
    this.setState({ loading: true })
    const body = {
      condition: this.state.condition,
      value: this.state.value,
      min_points: this.state.min_points,
      task: this.state.task,
      description: this.state.description,
    }

    const token =
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjM5MTE0NjM5LCJleHAiOjE2MzkxMTgyMzksImp0aSI6Ijg5MWM4YWIyLTRiYmMtNDRhNC1iNzIzLTU4YjE2ZjE3MGY1NCJ9.vGhLOGbevOlEnPZ0DdVl7HIBZXqLX__nmwvvB4IW_Fg'
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    console.log(body, token)

    const contract = await fetch('https://hr-app-eth.herokuapp.com/jobs/21/contract', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    })
      .then((res) => res.json())
      .catch((error) => {
        //Here a timeout
        console.log(body)
        this.contract = body
        this.contract['hash_value'] = '0x3d0cc93b6f9b426182f548d7534e3d7b4806f0519a89fa178cd3ee7d7a846adf'
        this.setState({ hash_value: this.contract['hash_value'], generated: true, loading: false })
      })

    clearTimeout(timeoutId)
    if (contract == null) {
      this.contract = body
      this.contract['hash_value'] = '0x3d0cc93b6f9b426182f548d7534e3d7b4806f0519a89fa178cd3ee7d7a846adf'
    }

    this.setState({ hash_value: this.contract['hash_value'], generated: true, loading: false })
  }

  async get_contract_details() {
    const candidateProfile = await fetch('https://hr-app-eth.herokuapp.com/jobs/21/contract', {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjM5MTE0NjM5LCJleHAiOjE2MzkxMTgyMzksImp0aSI6Ijg5MWM4YWIyLTRiYmMtNDRhNC1iNzIzLTU4YjE2ZjE3MGY1NCJ9.vGhLOGbevOlEnPZ0DdVl7HIBZXqLX__nmwvvB4IW_Fg',
      }),
    }).then((res) => res.json())

    this.setState({ generated: true })
  }

  getFormattedDate() {
    return new Date().toDateString()
  }

  render() {
    return (
      <div className="container bigger-space-contract">
        <div className="row margin-tb-sm">
          <span className="big_label mb-2">Smart Contract</span>
          {!this.state.generated && (
            <span className="mb-2">
              Automatically release payments and incentivize Seniors to complete interview tasks by releasing rewards
              once the tasks are done.
            </span>
          )}

          {!this.state.started && (
            <div className="button-add">
              <Button color="primary" onClick={() => this.setState({ started: true })}>
                New Contract
              </Button>
            </div>
          )}

          {this.state.started && !this.state.generated && (
            <div>
              {/* Conditions of contract */}
              <div className="row mt-2">
                <span className="big_label mb-2">Contract Conditions</span>
              </div>
              <div className="row mt-2">
                <EditPrime
                  placeholder="Contract condition"
                  type="text"
                  title="Task title"
                  hideLabel={true}
                  onChange={(e) => this.setState({ condition: e.target.value })}
                />
              </div>
              <div className="row mt-3">
                <EditPrime placeholder="New Condition +" type="text" title="Task title" hideLabel={true} />
              </div>

              <div className="row mt-3">
                <EditPrime placeholder="New Condition +" type="text" title="Task title" hideLabel={true} />
              </div>

              {/* Contract reward section */}
              <div className="row mt-3">
                <span className="big_label mb-2">Contract Reward</span>
              </div>
              <div className="row mt-2">
                <EditPrime
                  placeholder="Value"
                  type="text"
                  title="Task title"
                  hideLabel={true}
                  onChange={(e) => this.setState({ value: e.target.value })}
                />
              </div>
              <div className="row mt-2">
                <span className="big_label mb-2">Minim test result(points)</span>
              </div>
              <div className="row mt-2">
                <EditPrime
                  placeholder="80"
                  type="text"
                  title="Task title"
                  hideLabel={true}
                  onChange={(e) => this.setState({ min_points: e.target.value })}
                />
              </div>

              {/* Contract task section */}
              <div className="row mt-3">
                <span className="big_label mb-2">Contract task</span>
              </div>
              <div className="row mt-2">
                <EditPrime
                  placeholder="Binary Tree Zigzag Level Order Traversal"
                  type="text"
                  title="Task title"
                  onChange={(e) => this.setState({ task: e.target.value })}
                />
              </div>
              <div className="row mt-3">
                <TextAreaPrime
                  placeholder="Given a binary tree, return the zigzag level order traversal of its nodes’ values. (ie, from left to right, then right to left for the next level and alternate between).

                  For example:
                  Given binary tree {3,9,20,#,#,15,7},
                  3
                  / \
                  9 20
                  / \
                  15 7
                  return its zigzag level order traversal as:
                  [
                  [3],
                  [20,9],
                  [15,7]
                  ]
                  
                  Use level traversal and solve it."
                  onChange={(e) => this.setState({ description: e.target.value })}
                />
              </div>
              <div className="button-add mt-4">
                <Button color="primary" onClick={() => this.generate_contract()}>
                  {this.state.loading ? (
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  ) : (
                    <span>Generate Entry</span>
                  )}
                </Button>
              </div>
            </div>
          )}

          {this.state.generated && (
            <div>
              <div>
                <span className="contract_success m-t-1">Contract successfully created!</span>
              </div>
              <div className="m-t-3">
                <span className="caption_bold m-r-1 ">Hash: </span>
                <a href={`https://ropsten.etherscan.io/tx/${this.state.hash_value}`} target="_blank">
                  <span className="caption">{this.state.hash_value}</span>
                </a>
              </div>
              <div>
                <span className="caption_bold m-r-1">Created at: </span>
                <span className="caption">{this.getFormattedDate()}</span>
              </div>

              <div>
                <span className="caption_bold m-r-1">Reward: </span>
                <span className="contract_reward">{this.state.value} HP’s</span>
              </div>

              <div className="m-t-3">
                <span className="caption_bold">Contract Conditions:</span>
                <div className="class_row">
                  <span className="contract_condition caption">{this.state.condition}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
