// import React from "react";

// const Resume = () => {
//   return (
//     <article className="resume active" data-page="resume">
//       <header>
//         <h2 className="h2 article-title">Resume</h2>
//       </header>

//       {Object.keys(window.config.resume.timeline).map((key) => {
//         const timelineItem = window.config.resume.timeline[key];

//         return (
//           <section key={key} className="timeline">
//             <div className="title-wrapper">
//               <div className="icon-box">
//                 {/* <ion-icon name="book-outline"></ion-icon> */}
//                 <ion-icon name="ribbon"></ion-icon>


//               </div>
//               <h3 className="h3">{key}</h3>
             
//             </div>

//             <ol className="timeline-list">
           


//               {timelineItem.map((item, index) => {
//                 return (
                  
//                   <li key={index} className="timeline-item">
                    
//                     <h4 className="h4 timeline-item-title">
//                       {item.institution}
//                       { item.position}
//                     </h4>

//                     <span>{item.years}</span>

//                     <p className="timeline-text">{item.description}</p>
//                   </li>
//                 );
//               })}
//             </ol>
            
//           </section>
//         );
//       })}

//       <section className="skill">
//         <h3 className="h3 skills-title">My skills</h3>

//         <ul className="skills-list content-card">
//           {window.config.resume.skills.map((skill, index) => {
//             return (
//               <li key={index} className="skills-item">
//                 <div className="title-wrapper">
//                   <h5 className="h5">{skill.name}</h5>
//                   <data value={skill.percentage}>{skill.percentage}%</data>
                  
//                 </div>

//                 <div className="skill-progress-bg"> 
//                   <div
//                     className="skill-progress-fill"
//                     style={{ width: `${skill.percentage}%` }}
//                   ></div>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     </article>
//   );
// };

// export default Resume;






import React from "react";

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {Object.keys(window.config.resume.timeline).map((key) => {
        const timelineItem = window.config.resume.timeline[key];
        const isExperience = key.toLowerCase().includes("experience");

        return (
          <section key={key} className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                {isExperience ? (
                  <ion-icon name="briefcase"></ion-icon>
                ) : (
                  <ion-icon name="school"></ion-icon>
                )}
              </div>
              <h3 className="h3">{key}</h3>
            </div>

            <ol className="timeline-list">
              {timelineItem.map((item, index) => {
                return (
                  <li key={index} className="timeline-item">
                    <h4 className="h4 timeline-item-title">
                      {item.institution}  {item.position}
                    </h4>

                    <span>{item.years}</span>

                    <p className="timeline-text">{item.description}</p>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {window.config.resume.skills.map((skill, index) => {
            return (
              <li key={index} className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">{skill.name}</h5>
                  <data value={skill.percentage}>{skill.percentage}%</data>
                </div>

                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default Resume;

