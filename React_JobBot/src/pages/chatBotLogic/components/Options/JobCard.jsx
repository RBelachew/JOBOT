import starImage from '../../../adminArea/star.avif';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';

const JobCard = ({ job, isSelected, onCardClick }) => {
    if (job._id==="Nothing fits"){
      return(
      <div className={`job-card ${isSelected ? "selected" : ""}`}>
      <strong>Nothing Fits</strong>
      </div>
      );
    }
  
    return (
    <div className="job">
      <div className={`job-card ${isSelected ? "selected" : ""}`} onClick={() => onCardClick(job._id)}>
        <h3 className="job-title-font">{job.job}</h3>
        <p>{job.company}</p>
        <p>{job.city}</p>
        {isSelected?"-":"+"}
      </div>
      {isSelected && (
          <div style={{textAlign:"center"}} >
          {job.rating&&<p className="job-rating"><span><img className="star" src={starImage} alt="Star" /></span> {job.rating}</p>}
          {job.date&&<p className="job-date"><AccessTimeIcon color="primary" fontSize=""/>{"  "+job.date}</p>}
          {job.link&&<p className="job-link">
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              <LaunchIcon color="primary"/>
              {"     "+`${job.link.slice(0, 30)}...`}
            </a>
          </p>}
          <p className="job-description" style={{margin: "0 2rem 2rem"}}>{job.description}</p>
          </div>
        )}
    </div>
    );
  };

  export default JobCard;