import styled from 'styled-components'
import ReadMoreSrc from 'assets/images/read-more-logo.png'
// features
import { Experience, Skill } from 'features/employer'

export const CandidateProfile = ({ candidate }) => {
  const { first_name, last_name, gender, birth_date, about, experiences, licences, hard_skills, soft_skills, degree } =
    {
      ...candidate,
      experiences: JSON.parse(candidate.experiences),
      hard_skills: JSON.parse(candidate.hard_skills),
      licences: JSON.parse(candidate.licences),
      soft_skills: JSON.parse(candidate.soft_skills),
      degree: JSON.parse(candidate.degree),
    }
  return (
    <StyledDiv>
      <div className="header">
        <span className="tab-link">Candidate Profile</span>{' '}
      </div>
      <div className="personal-details">Personal Details</div>

      <table className="details-table">
        <tbody>
          <tr>
            <td>
              <p>First Name</p>
              <p>{first_name}</p>
            </td>
            <td>
              <p>Last Name</p>
              <p>{last_name}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Gender</p>
              <p>{gender}</p>
            </td>
            <td>
              <p>Date of birth</p>
              <p>{birth_date}</p>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="about-me">
        <h4>About me</h4>
        <p>{about}</p>
      </div>

      <div className="read-more">
        Read More
        <button className="read-logo" />
      </div>

      <div className="experiences-tab">
        <div className="index">
          <h4>Experiences</h4>
        </div>
        {experiences.map((experience, index) => (
          <Experience experience={experience} key={index} />
        ))}
      </div>

      <div className="degree-tab">
        <h4>Degree</h4>
        {degree.map((degree, index) => (
          <Experience experience={degree} key={index} />
        ))}
      </div>

      <div className="licenses-certifications-tab">
        <h4>Licences & Certifications</h4>
        {licences.map((licence, index) => (
          <Experience experience={licence} key={index} />
        ))}
      </div>

      <div className="hard-skills-tab">
        <h4>Hard Skills</h4>
        <table>
          <tbody>
            {hard_skills.map((skill, index) => (
              <Skill skill={skill} key={index} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="soft-skills-tab">
        <h4>Soft Skills</h4>
        <table>
          <tbody>
            {soft_skills.map((skill, index) => (
              <Skill skill={skill} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </StyledDiv>
  )
}

export const StyledDiv = styled.div`
  margin-left: 30px;
  padding: 32px 24px 50px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 4px 0 rgba(62, 73, 84, 0.04);

  .header {
    font-weight: 600;
    font-size: 15px;

    .tab-link {
      border-bottom: 2px solid #4401d4;
      padding-bottom: 0.75rem;
      padding-inline: 0.5rem;
    }
  }

  .personal-details {
    margin-top: 40px;
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 33px;
  }

  .read-more {
    font-weight: 500;
    color: #4501d4;

    .read-logo {
      margin-left: 8px;
      background: url(${ReadMoreSrc});
      width: 18px;
      height: 18px;
      border: none;
    }
  }

  .details-table {
    width: 100%;
    tr {
      display: flex;
      align-items: center;
      justify-content: stretch;
      width: 100%;

      td {
        width: 269px;

        p:first-child {
          color: #727272;
          font-weight: 500;
          font-size: 13px;
          margin-bottom: 0.25rem;
        }

        p:last-child {
          color: #0f0e0e;
          font-weight: 600;
          font-size: 15px;
        }
      }
    }

    td {
      /* :first-child {
        color: #727272;
        font-weight: 500;
        font-size: 13px;

        :last-child {
          color: #0f0e0e;
          font-weight: 500;
          font-size: 15px;
        }
      } */
    }
  }

  .about-me {
    margin-top: 24px;

    h4 {
      margin-bottom: 8px;
    }

    p {
      font-weight: 400;
      font-size: 15px;
    }
  }

  h4 {
    margin-bottom: 16px;
  }

  .experiences-tab {
    margin-top: 72px;

    h4 {
      margin-bottom: 16px;
    }
  }

  .degree-tab {
    margin-top: 40px;
  }

  .licenses-certifications-tab {
    margin-top: 45px;
  }

  .hard-skills-tab {
    margin-top: 40px;

    h4 {
      margin-bottom: 18px;
    }
  }

  .soft-skills-tab {
    margin-top: 40px;

    h4 {
      margin-bottom: 18px;
    }
  }
`
