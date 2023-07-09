import JobotLogoPNG from "../JOBOT.png";

function About() {

  return (
    <div className="container-fluid h-100">
  <div className="row h-100 justify-content-center align-items-center">
    <div className="col-md-6">
      <div >
        <h2 className="d-flex justify-content-center align-items-center m-2">About Us</h2>
        <h5>In Short</h5>
        <p>JOBOT was born out of a desire to create and define a job search platform.
          A way that will try to "score" as close to the "taste" of the job seekers
          and find them a job that will meet most of their requirements. JOBOT is a web application
          through which you can conduct a chat with a bot. During the chat, we will receive data
          from the user including the education and experience he has gained in the field
          where he is interested in working and the system is looking for the jobs they can
          match the data the user has provided. The goal is to find jobs
          more accurate without unnecessary flooding of jobs.
        </p>
        <h5>Site Description</h5>
        <p>The job database of JOBOT is based on the jobs on glassdoor website.<br/>
        JOBOT currently focuses on 6 fields of jobs: Engineering, Marketing, Human Resources, Healthcare, Arts & Design, Finance & Accounting.
        <br/>
        In JOBOT chat we have chosen to present some prominent job titles' that exist in our system, but of course there is reference to other job titles' as well.
        <br/>
        In addition to the chat bot, the website also offers an independent job search.
        You can search according to desired job, company and city filters.
        </p>
        <p>What details can you get about a job?
        <br/>
        <li>job title</li>
        <li>company</li>
        <li>city</li>
        <li>job description</li>
        <li>rating - general rating about the job</li>
        <li>days - the number of days that have passed since the job was updated on the website</li>
        <li>link - link for apply on employer site </li>
        </p>
        <br/>
        <h5 className="d-flex justify-content-right align-items-right" style={{color:"blue"}}>We come to improve your job search experience, so let's start...</h5>
        <img src={JobotLogoPNG} style={{width:"20%"}}/>
      </div>
    </div>
  </div>
</div>

  );
}

export default About;
