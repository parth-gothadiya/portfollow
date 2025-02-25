// import React from 'react'

// const Portfolio = () => {
//   return (
//     <article className="portfolio active" data-page="portfolio">

//     <header>
//       <h2 className="h2 article-title">Portfolio</h2>
//     </header>

//     <section className="projects">

//       <ul className="filter-list">

//         <li className="filter-item">
//           <button className="active" data-filter-btn>All</button>
//         </li>

//         <li className="filter-item">
//           <button data-filter-btn>Web design</button>
//         </li>

//         <li className="filter-item">
//           <button data-filter-btn>Applications</button>
//         </li>

//         <li className="filter-item">
//           <button data-filter-btn>Web development</button>
//         </li>

//       </ul>

//       <div className="filter-select-box">

//         <button className="filter-select" data-select>

//           <div className="select-value" data-selecct-value>Select category</div>

//           <div className="select-icon">
//             <ion-icon name="chevron-down"></ion-icon>
//           </div>

//         </button>

//         <ul className="select-list">

//           <li className="select-item">
//             <button data-select-item>All</button>
//           </li>

//           <li className="select-item">
//             <button data-select-item>Web design</button>
//           </li>

//           <li className="select-item">
//             <button data-select-item>Applications</button>
//           </li>

//           <li className="select-item">
//             <button data-select-item>Web development</button>
//           </li>

//         </ul>

//       </div>

//       <ul className="project-list">

//         <li className="project-item  active" data-filter-item data-category="web development">
//           <a href="#">

//             <figure className="project-img">
//               <div className="project-item-icon-box">
//                 <ion-icon name="eye-outline"></ion-icon>
//               </div>

//               <img src="/images/project-1.jpg" alt="finance" loading="lazy" />
//             </figure>

//             <h3 className="project-title">Finance</h3>

//             <p className="project-category">Web development</p>

//           </a>
//         </li>

//         <li className="project-item  active" data-filter-item data-category="web development">
//           <a href="#">

//             <figure className="project-img">
//               <div className="project-item-icon-box">
//                 <ion-icon name="eye-outline"></ion-icon>
//               </div>

//               <img src="/images/project-2.png" alt="orizon" loading="lazy" />
//             </figure>

//             <h3 className="project-title">Orizon</h3>

//             <p className="project-category">Web development</p>

//           </a>
//         </li>

//         <li className="project-item  active" data-filter-item data-category="web design">
//           <a href="#">

//             <figure className="project-img">
//               <div className="project-item-icon-box">
//                 <ion-icon name="eye-outline"></ion-icon>
//               </div>

//               <img src="/images/project-3.jpg" alt="fundo" loading="lazy" />
//             </figure>

//             <h3 className="project-title">Fundo</h3>

//             <p className="project-category">Web design</p>

//           </a>
//         </li>

//         <li className="project-item  active" data-filter-item data-category="applications">
//           <a href="#">

//             <figure className="project-img">
//               <div className="project-item-icon-box">
//                 <ion-icon name="eye-outline"></ion-icon>
//               </div>

//               <img src="/images/project-4.png" alt="brawlhalla" loading="lazy" />
//             </figure>

//             <h3 className="project-title">Brawlhalla</h3>

//             <p className="project-category">Applications</p>

//           </a>
//         </li>

//         <li className="project-item  active" data-filter-item data-category="web design">
//           <a href="#">

//             <figure className="project-img">
//               <div className="project-item-icon-box">
//                 <ion-icon name="eye-outline"></ion-icon>
//               </div>

//               <img src="/images/project-5.png" alt="dsm." loading="lazy" />
//             </figure>

//             <h3 className="project-title">DSM.</h3>

//             <p className="project-category">Web design</p>

//           </a>
//         </li>

//         <li className="project-item  active" data-filter-item data-category="web design">
//           <a href="#">

//             <figure className="project-img">
//               <div className="project-item-icon-box">
//                 <ion-icon name="eye-outline"></ion-icon>
//               </div>

//               <img src="/images/project-6.png" alt="metaspark" loading="lazy" />
//             </figure>

//             <h3 className="project-title">MetaSpark</h3>

//             <p className="project-category">Web design</p>

//           </a>
//         </li>

//         <li className="project-item  active" data-filter-item data-category="web development">
//           <a href="#">

//             <figure className="project-img">
//               <div className="project-item-icon-box">
//                 <ion-icon name="eye-outline"></ion-icon>
//               </div>

//               <img src="/images/project-7.png" alt="summary" loading="lazy" />
//             </figure>

//             <h3 className="project-title">Summary</h3>

//             <p className="project-category">Web development</p>

//           </a>
//         </li>

//         <li className="project-item  active" data-filter-item data-category="applications">
//           <a href="#">

//             <figure className="project-img">
//               <div className="project-item-icon-box">
//                 <ion-icon name="eye-outline"></ion-icon>
//               </div>

//               <img src="/images/project-8.jpg" alt="task manager" loading="lazy" />
//             </figure>

//             <h3 className="project-title">Task Manager</h3>

//             <p className="project-category">Applications</p>

//           </a>
//         </li>

//         <li className="project-item  active" data-filter-item data-category="web development">
//           <a href="#">

//             <figure className="project-img">
//               <div className="project-item-icon-box">
//                 <ion-icon name="eye-outline"></ion-icon>
//               </div>

//               <img src="/images/project-9.png" alt="arrival" loading="lazy" />
//             </figure>

//             <h3 className="project-title">Arrival</h3>

//             <p className="project-category">Web development</p>

//           </a>
//         </li>

//       </ul>

//     </section>

//   </article>
//   )
// }

// export default Portfolio

// import React, { useState } from 'react';

// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const projects = [
//     { id: 1, title: 'Finance', category: 'web development', img: '/images/project-1.jpg' },
//     { id: 2, title: 'Orizon', category: 'web development', img: '/images/project-2.png' },
//     { id: 3, title: 'Fundo', category: 'web design', img: '/images/project-3.jpg' },
//     { id: 4, title: 'Brawlhalla', category: 'applications', img: '/images/project-4.png' },
//     { id: 5, title: 'DSM.', category: 'web design', img: '/images/project-5.png' },
//     { id: 6, title: 'MetaSpark', category: 'web design', img: '/images/project-6.png' },
//     { id: 7, title: 'Summary', category: 'web development', img: '/images/project-7.png' },
//     { id: 8, title: 'Task Manager', category: 'applications', img: '/images/project-8.jpg' },
//     { id: 9, title: 'Arrival', category: 'web development', img: '/images/project-9.png' }
//   ];

//   // Filter projects based on active filter
//   const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);

//   return (
//     <article className="portfolio active" data-page="portfolio">
//       <header>
//         <h2 className="h2 article-title">Portfolio</h2>
//       </header>

//       <section className="projects">
//         <ul className="filter-list">
//           {['all', 'web design', 'applications', 'web development'].map(category => (
//             <li className="filter-item" key={category}>
//               <button
//                 className={activeFilter === category ? 'active' : ''}
//                 onClick={() => setActiveFilter(category)}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <ul className="project-list">
//           {filteredProjects.map(({ id, title, category, img }) => (
//             <li key={id} className="project-item active">
//               <a href="#">
//                 <figure className="project-img">
//                   <div className="project-item-icon-box">
//                     <ion-icon name="eye-outline"></ion-icon>
//                   </div>
//                   <img src={img} alt={title} loading="lazy" />
//                 </figure>
//                 <h3 className="project-title">{title}</h3>
//                 <p className="project-category">{category}</p>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </article>
//   );
// };

// export default Portfolio;

// import React, { useState } from "react";

// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [showDropdown, setShowDropdown] = useState(false);

//   const projects = [
//     {
//       id: 1,
//       title: "Finance",
//       category: "web development",
//       img: "/images/project-1.jpg",
//     },
//     {
//       id: 2,
//       title: "Orizon",
//       category: "web development",
//       img: "/images/project-2.png",
//     },
//     {
//       id: 3,
//       title: "Fundo",
//       category: "web design",
//       img: "/images/project-3.jpg",
//     },
//     {
//       id: 4,
//       title: "Brawlhalla",
//       category: "applications",
//       img: "/images/project-4.png",
//     },
//     {
//       id: 5,
//       title: "DSM.",
//       category: "web design",
//       img: "/images/project-5.png",
//     },
//     {
//       id: 6,
//       title: "MetaSpark",
//       category: "web design",
//       img: "/images/project-6.png",
//     },
//     {
//       id: 7,
//       title: "Summary",
//       category: "web development",
//       img: "/images/project-7.png",
//     },
//     {
//       id: 8,
//       title: "Task Manager",
//       category: "applications",
//       img: "/images/project-8.jpg",
//     },
//     {
//       id: 9,
//       title: "Arrival",
//       category: "web development",
//       img: "/images/project-9.png",
//     },
//   ];

//   const categories = ["all", "web design", "applications", "web development"];

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((p) => p.category === activeFilter);

//   return (
//     <article className="portfolio active" data-page="portfolio">
//       <header>
//         <h2 className="h2 article-title">Portfolio</h2>
//       </header>

//       <section className="projects">
//       <div className="custom-filter-box">
//       <button
//         className="custom-filter-select"
//         onClick={() => setShowDropdown((prev) => !prev)}
//       >
//         <span>{activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}</span>
//         <ion-icon name={showDropdown ? "chevron-up" : "chevron-down"}></ion-icon>
//       </button>

//       <ul className={`custom-select-list ${showDropdown ? "show" : ""}`}>
//         {categories.map((category) => (
//           <li key={category}>
//             <button
//               className={activeFilter === category ? "active" : ""}
//               onClick={() => {
//                 setActiveFilter(category);
//                 setShowDropdown(false); // Close dropdown after selection
//               }}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>

//         <ul className="filter-list">
//           {categories.map((category) => (
//             <li className="filter-item" key={category}>
//               <button
//                 className={activeFilter === category ? "active" : ""}
//                 onClick={() => setActiveFilter(category)}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <ul className="project-list">
//           {filteredProjects.map(({ id, title, category, img }) => (
//             <li key={id} className="project-item active">
//               <a href="#">
//                 <figure className="project-img">
//                   <div className="project-item-icon-box">
//                     <ion-icon name="eye-outline"></ion-icon>
//                   </div>
//                   <img src={img} alt={title} loading="lazy" />
//                 </figure>
//                 <h3 className="project-title">{title}</h3>
//                 <p className="project-category">{category}</p>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </article>
//   );
// };

// export default Portfolio;




// import React, { useState, useEffect } from "react";

// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     { id: 1, title: "Finance", category: "web development", img: "/public/videos/Doctor.mp4" },
//     { id: 2, title: "Orizon", category: "web development", img: "/images/project-2.png" },
//     { id: 3, title: "Fundo", category: "web design", img: "/images/project-3.jpg" },
//     { id: 4, title: "Brawlhalla", category: "applications", img: "/images/project-4.png" },
//     { id: 5, title: "DSM.", category: "web design", img: "/images/project-5.png" },
//     { id: 6, title: "MetaSpark", category: "web design", img: "/images/project-6.png" },
//     { id: 7, title: "Summary", category: "web development", img: "/images/project-7.png" },
//     { id: 8, title: "Task Manager", category: "applications", img: "/images/project-8.jpg" },
//     { id: 9, title: "Arrival", category: "web development", img: "/images/project-9.png" },
//   ];

//   const categories = ["all", "web design", "applications", "web development"];
//   const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

//   useEffect(() => {
//     if (modalOpen) {
//       document.body.classList.add("modal-open");
//     } else {
//       document.body.classList.remove("modal-open");
//     }
//   }, [modalOpen]);

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedProject(null);
//   };

//   return (
//     <article className="portfolio active" data-page="portfolio">
//       <header>
//         <h2 className="h2 article-title">Portfolio</h2>
//       </header>

//       <section className="projects">
//         {/* Custom Filter Dropdown */}
//         <div className="custom-filter-box">
//           <button
//             className="custom-filter-select"
//             onClick={() => setShowDropdown(!showDropdown)}
//           >
//             <span>{activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}</span>
//             <ion-icon name={showDropdown ? "chevron-up" : "chevron-down"}></ion-icon>
//           </button>

//           {showDropdown && (
//             <ul className="custom-select-list">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <button
//                     className={activeFilter === category ? "active" : ""}
//                     onClick={() => {
//                       setActiveFilter(category);
//                       setShowDropdown(false);
//                     }}
//                   >
//                     {category.charAt(0).toUpperCase() + category.slice(1)}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}

// <ul className={`custom-select-list ${showDropdown ? "show" : ""}`}>
//          {categories.map((category) => (
//           <li key={category}>
//             <button
//               className={activeFilter === category ? "active" : ""}
//               onClick={() => {
//                 setActiveFilter(category);
//                 setShowDropdown(false); // Close dropdown after selection
//               }}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           </li>
//         ))}
//       </ul>

//         </div>

//         {/* Filter List */}
//         <ul className="filter-list">
//           {categories.map((category) => (
//             <li className="filter-item" key={category}>
//               <button
//                 className={activeFilter === category ? "active" : ""}
//                 onClick={() => setActiveFilter(category)}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Project List */}
//         <ul className="project-list">
//           {filteredProjects.map((project) => (
//             <li key={project.id} className="project-item active">
//               <div className="project-content" onClick={() => openModal(project)} style={{ cursor: "pointer" }}>
//                 <figure className="project-img">
//                   <div className="project-item-icon-box">
//                     <ion-icon name="eye-outline"></ion-icon>
//                   </div>
//                   <img src={project.img} alt={project.title} loading="lazy" />
//                 </figure>
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-category">{project.category}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Image Preview Modal */}
//       {modalOpen && selectedProject && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={closeModal}>✖</button>
//             <h2>{selectedProject.title}</h2>
//             <img src={selectedProject.img} alt={selectedProject.title} className="modal-img" />
//           </div>
//         </div>
//       )}
//     </article>
//   );
// };

// export default Portfolio;



import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: "Finance", category: "web development", img: "/videos/Doctor.mp4", poster: "videos/Doctor.mp4" },
    { id: 2, title: "Orizon", category: "web development", img: "/images/project-2.png" },
    { id: 3, title: "Fundo", category: "web design", img: "/images/project-3.jpg" },
    { id: 4, title: "Brawlhalla", category: "applications", img: "/images/project-4.png" },
    { id: 5, title: "DSM.", category: "web design", img: "/images/project-5.png" },
    { id: 6, title: "MetaSpark", category: "web design", img: "/images/project-6.png" },
    { id: 7, title: "Summary", category: "web development", img: "/images/project-7.png" },
    { id: 8, title: "Task Manager", category: "applications", img: "/images/project-8.jpg" },
    { id: 9, title: "Arrival", category: "web development", img: "/images/project-9.png" },
  ];

  const categories = ["all", "web design", "applications", "web development"];
  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalOpen]);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Custom Filter Dropdown */}
        <div className="custom-filter-box">
          <button className="custom-filter-select" onClick={() => setShowDropdown(!showDropdown)}>
            <span>{activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}</span>
            <ion-icon name={showDropdown ? "chevron-up" : "chevron-down"}></ion-icon>
          </button>

          {showDropdown && (
            <ul className="custom-select-list">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={activeFilter === category ? "active" : ""}
                    onClick={() => {
                      setActiveFilter(category);
                      setShowDropdown(false);
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className={`custom-select-list ${showDropdown ? "show" : ""}`}>
          {categories.map((category) => (
            <li key={category}>
              <button
                className={activeFilter === category ? "active" : ""}
                onClick={() => {
                  setActiveFilter(category);
                  setShowDropdown(false); // Close dropdown after selection
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Filter List */}
        <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button className={activeFilter === category ? "active" : ""} onClick={() => setActiveFilter(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>


        {/* Project List */}
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li key={project.id} className="project-item active">
              <div className="project-content" onClick={() => openModal(project)} style={{ cursor: "pointer" }}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  {project.img.endsWith(".mp4") ? (
                    <video
                      src={project.img}
                      poster={project.poster}
                      className="project-video"
                      muted
                      loop
                      preload="none"
                      onClick={(e) => {
                        e.target.muted = !e.target.muted; // Toggle mute on click
                      }}
                    />
                  ) : (
                    <img src={project.img} alt={project.title} loading="lazy" />
                  )}

                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Video/Image Modal */}
      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✖</button>
            <h2>{selectedProject.title}</h2>
            {selectedProject.img.endsWith(".mp4") ? (
              <video
                src={selectedProject.img}
                controls
                autoPlay
                className="modal-video"
                style={{ width: "100%", height: "auto", maxHeight: "80vh" }}
              />
            ) : (
              <img src={selectedProject.img} alt={selectedProject.title} className="modal-img" />
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default Portfolio;
