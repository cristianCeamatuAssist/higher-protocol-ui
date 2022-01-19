import { CyberSecurityIcon, PythonTableIcon, ReactTableIcon, UiUxIcon } from 'assets/icons/jobs'

export const avatarsArray = [
  'https://i.pravatar.cc/150?u=1',
  'https://i.pravatar.cc/150?u=2',
  'https://i.pravatar.cc/150?u=3',
  'https://i.pravatar.cc/150?u=4',
]

export const cards = [
  {
    backgroundColor: '#48A9F8',
    title: 'Applications Received',
    value: 75,
    logo: 'applications-logo',
  },
  {
    backgroundColor: '#4E36E2',
    title: 'Interviews Schedule',
    value: 75,
    logo: 'schedule-logo',
  },
  {
    backgroundColor: '#1BD084',
    title: 'Profiles Viewed',
    value: 75,
    logo: 'profiles-logo',
  },
  {
    backgroundColor: '#8BC740',
    title: 'Unread messages',
    value: 75,
    logo: 'messages-logo',
  },
]

export const getRandomNumber = (until) => Math.floor(Math.random() * until) + 1

export const jobsIconsArray = [<CyberSecurityIcon />, <PythonTableIcon />, <ReactTableIcon />, <UiUxIcon />]
