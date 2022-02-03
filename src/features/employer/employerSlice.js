import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // job: {
  //   id: '11',
  //   job_name: 'React Magician',
  //   post_date: '2022-02-03T00:00:00.000Z',
  //   expire_date: '2022-03-03T00:00:00.000Z',
  //   location: 'Bucharest',
  //   description:
  //     '{"level":"Senior","experience":"5-8 years","brief":"","responsibilities":"","candidate_score":"100","hard_skills":{"android":4,"kotlin":5},"soft_skills":{"communication":5,"teamwork":5}}',
  //   category: null,
  //   block_hash: null,
  //   reward: null,
  //   contract_conditions: null,
  // },
  job: null,
  smartContract: null,
}

const employerSlice = createSlice({
  name: 'employer',
  initialState,
  reducers: {
    setJob(state, action) {
      state.job = action.payload
    },
    setProp(state, action) {
      const { prop, value } = action.payload
      state[prop] = value
    },
  },
  extraReducers: () => {},
})

export const { setJob, setProp } = employerSlice.actions

export const { reducer: employerReducer } = employerSlice
