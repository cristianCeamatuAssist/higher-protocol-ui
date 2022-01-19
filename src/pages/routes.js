export const routes = {
  dashboard: {
    path: '/dashboard',
    label: 'Dashboard',
    exact: true,
  },

  candidates: {
    path: '/candidates',
    label: 'Candidates',
    exact: true,
  },

  candidate: {
    path: '/candidates/:id',
    label: 'Candidates',
    exact: true,
  },

  jobs: {
    path: '/jobs',
    label: 'Jobs',
    exact: true,
  },

  jobsCreate: {
    path: '/jobs/create',
    label: 'Add new job',
    exact: true,
  },

  job: {
    path: '/jobs/:id',
    label: 'Jobs',
    exact: true,
  },
}
