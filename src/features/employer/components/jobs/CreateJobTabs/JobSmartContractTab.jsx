import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TextAreaPrime from 'components/text-area-main/TextArea'
import EditPrime from 'components/edit-main/Edit'
import { Button, LoadingAnimation } from 'components'
import { apiRequestWithStatesHandler } from 'utils'
import { createContract, setProp } from 'features/employer'

export const JobSmartContractTab = () => {
  const { job, smartContract } = useSelector((state) => state.employer)

  const dispatch = useDispatch()

  const [data, setData] = useState({
    condition: ['This is the first condition', 'This is the second condition', 'This is the third condition'],
    value: 10,
    min_points: 50,
    task: 'Zigzag of a binary tree',
    description:
      'Given a binary tree, return the zigzag level order traversal of its nodes values. (ie, from left to right, then right to left for the next level and alternate between.',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [error, setError] = useState(null)

  const handleGenerateContract = async (e) => {
    e.preventDefault()
    const body = { ...data, condition: JSON.stringify(data.condition) }
    const { data: smartContract } = await apiRequestWithStatesHandler(
      () => createContract({ id: job?.id, body }),
      setIsLoading,
      setError,
    )

    if (smartContract) {
      dispatch(setProp({ prop: 'smartContract', value: smartContract }))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((state) => ({ ...state, [name]: value }))
  }

  const handleConditionChange = (e) => {
    const { name, value } = e.target
    setData((state) => ({ ...state, condition: state.condition.map((cur, i) => (i === +name ? value : cur)) }))
  }

  const getFormattedDate = () => {
    return new Date().toDateString()
  }
  // variables
  const { condition, value, min_points, task, description } = data

  return (
    <div className="container bigger-space-contract">
      <div className="row margin-tb-sm">
        <span className="big_label mb-2">Smart Contract</span>
        {!smartContract && (
          <span className="mb-2">
            Automatically release payments and incentivize Seniors to complete interview tasks by releasing rewards once
            the tasks are done.
          </span>
        )}

        {!show && (
          <div className="button-add">
            <Button color="primary" onClick={() => setShow(true)}>
              New Contract
            </Button>
          </div>
        )}

        {show && !smartContract && (
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
                name="0"
                value={condition[0]}
                onChange={handleConditionChange}
              />
            </div>
            <div className="row mt-3">
              <EditPrime
                placeholder="New Condition +"
                type="text"
                title="Task title"
                hideLabel={true}
                name="1"
                value={condition[1]}
                onChange={handleConditionChange}
              />
            </div>

            <div className="row mt-3">
              <EditPrime
                placeholder="New Condition +"
                type="text"
                title="Task title"
                hideLabel={true}
                name="2"
                value={condition[2]}
                onChange={handleConditionChange}
              />
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
                name="value"
                value={value}
                onChange={handleChange}
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
                name="min_points"
                value={min_points}
                onChange={handleChange}
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
                name="task"
                value={task}
                onChange={handleChange}
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
                value={description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="button-add mt-4">
              <Button color="primary" onClick={handleGenerateContract}>
                Generate Entry
                {isLoading && <LoadingAnimation />}
              </Button>
            </div>
          </div>
        )}
        {smartContract && (
          <div>
            <div>
              <span className="contract_success m-t-1">Contract successfully created!</span>
            </div>
            <div className="m-t-3">
              <span className="caption_bold m-r-1 ">Hash: </span>
              {/* <a href={`https://ropsten.etherscan.io/tx/${smartContract.hash_value}`} target="_blank"> */}
              <span className="caption">{smartContract.hash_value}</span>
              {/* </a> */}
            </div>
            <div>
              <span className="caption_bold m-r-1">Created: </span>
              <span className="caption">{getFormattedDate()}</span>
            </div>

            <div>
              <span className="caption_bold m-r-1">Reward: </span>
              <span className="contract_reward">{smartContract.value} HP’s</span>
            </div>

            <div className="m-t-3">
              <div className="class_row">
                <div className="contract_condition caption">
                  <span className="caption_bold">Contract Conditions:</span>
                  <ul>
                    {JSON.parse(smartContract.condition).map((cond, i) => (
                      <li key={i}>{cond}</li>
                    ))}
                  </ul>
                  <span className="caption_bold">Task:</span>
                  <div>{smartContract.description}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
