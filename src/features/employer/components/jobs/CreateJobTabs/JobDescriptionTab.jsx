import { useState } from 'react'
import { Form } from 'react-bootstrap'
import TextAreaPrime from 'components/text-area-main/TextArea'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
// components
import { Dropdown, Button, LoadingAnimation } from 'components'
import { formatDateForInput, apiRequestWithStatesHandler } from 'utils'
import { createJob, setJob } from 'features/employer'

export const JobDescriptionTab = () => {
  const { job } = useSelector((state) => state.employer)

  const dispatch = useDispatch()
  const locationOptions = ['Bucharest', 'Suceava']
  const remoteOptions = ['Yes', 'No']
  const levelOptions = ['Junior', 'Middle', 'Senior']
  const experienceOptions = ['0-1 year', '1-3 years', '3-5 years', '5-8 years', '8-* years']
  const scoreOptions = [100, 95, 90, 80, 70, 60, 50, 40]

  const starSettings = {
    size: 22,
    value: 0,
    color: '#727272',
    activeColor: '#4401D4',
    a11y: true,
    isHalf: true,
    edit: false,
  }

  const [data, setData] = useState({
    job_name: 'React Magician',
    expire_date: formatDateForInput(new Date().toISOString()),
    post_date: formatDateForInput(new Date().toISOString()),
    location: 'Bucharest',
    remote: 'Yes',
    level: 'Senior',
    experience: '3-5 years',
    brief: 'We want to see magic.',
    responsibilities: 'Must do magic in React',
    candidate_score: '90',
    hard_skills: { kotlin: 2.5, android: 4 },
    soft_skills: { communication: 4.5, teamwork: 4.5 },
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [inputsChanged, setInputsChanged] = useState(true)

  // handlers
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((state) => ({ ...state, [name]: value }))
    if (!inputsChanged) setInputsChanged(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      job_name: data.job_name,
      post_date: data.post_date,
      expire_date: data.expire_date,
      location: data.location,
      description: JSON.stringify({
        level: data.level,
        experience: data.experience,
        brief: data.brief,
        responsibilities: data.responsibilities,
        candidate_score: data.candidate_score,
        hard_skills: data.hard_skills,
        soft_skills: data.soft_skills,
      }),
    }
    const { data: job } = await apiRequestWithStatesHandler(() => createJob(body), setIsLoading, setError)
    if (job) {
      dispatch(setJob(job))
      setInputsChanged(false)
    }
  }

  const changeSkillHandler = (type, skill, value) => {
    setData((state) => ({ ...state, [type]: { ...state[type], [skill]: value } }))
  }

  // variables
  const {
    job_name,
    expire_date,
    post_date,
    location,
    remote,
    level,
    experience,
    brief,
    responsibilities,
    candidate_score,
    hard_skills,
    soft_skills,
  } = data
  
  return (
    <div className="container bigger-space">
      <div className="row margin-tb-sm">
        <span className="big_label">Job Description</span>
      </div>

      <div className="row margin-tb-sm">
        <div className="col-sm-6">
          <Form.Group className="date-form">
            <Form.Label>Job title</Form.Label>
            <Form.Control
              placeholder="Android Developer"
              type="text"
              name="job_name"
              value={job_name}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <div className="col-sm-3">
          <Form.Group className="date-form">
            <Form.Label>Posting Date</Form.Label>
            <Form.Control type="date" name="post_date" value={post_date} onChange={handleChange} />
          </Form.Group>
        </div>
        <div className="col-sm-3">
          <Form.Group controlId="dob" className="date-form">
            <Form.Label>Expire Date</Form.Label>
            <Form.Control type="date" name="expire_date" value={expire_date} onChange={handleChange} />
          </Form.Group>
        </div>
      </div>

      <div className="row margin-tb-sm">
        <div className="col-sm-3">
          <Dropdown
            placeholder="Location"
            values={locationOptions}
            value={location}
            onChange={handleChange}
            name="location"
          />
        </div>
        <div className="col-sm-3">
          <Dropdown placeholder="Remote" values={remoteOptions} value={remote} onChange={handleChange} name="remote" />
        </div>
        <div className="col-sm-3">
          <Dropdown placeholder="Level" values={levelOptions} value={level} onChange={handleChange} name="level" />
        </div>
        <div className="col-sm-3">
          <Dropdown
            placeholder="Experience"
            values={experienceOptions}
            value={experience}
            onChange={handleChange}
            name="experience"
          />
        </div>
      </div>

      <div className="row margin-tb-sm">
        <div className="col-sm">
          <TextAreaPrime placeholder="Job brief" name="brief" value={brief} onChange={handleChange} />
        </div>
        <div className="col-sm">
          <TextAreaPrime
            placeholder="Responsibilities"
            name="responsibilities"
            value={responsibilities}
            onChange={handleChange}
          />
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
                <span>Kotlin</span>{' '}
                <ReactStars
                  {...starSettings}
                  edit={true}
                  value={hard_skills.kotlin}
                  onChange={(value) => changeSkillHandler('hard_skills', 'kotlin', value)}
                />
              </div>
              <div className="row-candidate">
                <span>Android</span>{' '}
                <ReactStars
                  {...starSettings}
                  edit={true}
                  value={hard_skills.android}
                  onChange={(value) => changeSkillHandler('hard_skills', 'android', value)}
                />
              </div>
              <div className="row-candidate">
                <span>New+</span> <ReactStars {...starSettings} />
              </div>
            </div>

            <div className="col-sm-6">
              <span className="subtitle">Soft Skills</span>
              <div className="row-candidate">
                <span>Communication</span>{' '}
                <ReactStars
                  {...starSettings}
                  edit={true}
                  value={soft_skills.communication}
                  onChange={(value) => changeSkillHandler('soft_skills', 'communication', value)}
                />
              </div>
              <div className="row-candidate">
                <span>Teamwork</span>{' '}
                <ReactStars
                  {...starSettings}
                  edit={true}
                  value={soft_skills.teamwork}
                  onChange={(value) => changeSkillHandler('soft_skills', 'teamwork', value)}
                />
              </div>
              <div className="row-candidate">
                <span>New+</span> <ReactStars {...starSettings} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="row my-3">
            <span className="big_label">Candidate score</span>
          </div>

          <div className="row">
            <Dropdown
              placeholder="Matching score"
              values={scoreOptions}
              value={candidate_score}
              name="candidate_score"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="button-add">
        <Button color="primary" onClick={handleSubmit} disabled={job}>
          {/* <Button color="primary" onClick={handleSubmit} disabled={!inputsChanged}> */}
          {job ? 'Update' : 'Create job'}
          {isLoading && <LoadingAnimation />}
        </Button>
      </div>
    </div>
  )
}
