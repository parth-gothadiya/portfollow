// import React, { useState, useEffect } from "react";

// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     // { id: 1, title: "Finance", category: "web development", img: "/images/project-2.png"  },
//     { id: 1, title: "The Long - D", category: "Video Editing",  img:"https://res.cloudinary.com/dg4xzeevq/video/upload/v1745595843/xb1jak4yvcuuh9iwmxzs.mp4"},

//     { id: 2, title: "Mindful Facts", category: "Video Editing", img: "https://res.cloudinary.com/dg4xzeevq/video/upload/v1745595899/t5nhxlsujopyl95cn4zj.mp4" },

//     { id: 3, title: "Mindful Facts", category: "Video Editing", img: "https://res.cloudinary.com/dg4xzeevq/video/upload/v1745595895/vkzmddnz0y42asdvtd9e.mp4" },
//     { id: 4, title: "PPMHPL", category: "applications", img: "https://res.cloudinary.com/dg4xzeevq/video/upload/v1745596577/003_Dr_Priyanka_cancer_z5wnod.mp4" }, 
//     { id: 5, title: "EFX", category: "web design", img: "https://res.cloudinary.com/dg4xzeevq/video/upload/v1745596719/Comp_1_5_2_thm2_prob3_2_bhujoq.mp4" },
//     { id: 6, title: "PPMHPL", category: "web design", img: "https://res.cloudinary.com/dg4xzeevq/video/upload/v1745596469/3%E6%9C%8824%E6%97%A5_2_Dr_Janki_Kakadiya_lipid_rul8gt.mp4" },
//     { id: 7, title: "Logo Animation ", category: "web development", img: "https://res.cloudinary.com/dg4xzeevq/video/upload/v1745597296/Final_Render-_rsuapg.mp4" },
//     { id: 8, title: "Zibrish Rooftop", category: "applications", img: "https://res.cloudinary.com/dg4xzeevq/video/upload/v1745594702/ip6swfan3k7u2ulnartz.mp4" },
//     { id: 9, title: "Harmonify", category: "web development", img: "https://res.cloudinary.com/dg4xzeevq/video/upload/v1745598402/5_6284898796119788538_xopwnd.mp4" },
//   ];

//   const categories = ["all", "web design", "Video Editing", "web development"];
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
//           <button className="custom-filter-select" onClick={() => setShowDropdown(!showDropdown)}>
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
//         </div>
//         <ul className={`custom-select-list ${showDropdown ? "show" : ""}`}>
//           {categories.map((category) => (
//             <li key={category}>
//               <button
//                 className={activeFilter === category ? "active" : ""}
//                 onClick={() => {
//                   setActiveFilter(category);
//                   setShowDropdown(false); // Close dropdown after selection
//                 }}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Filter List */}
//         <ul className="filter-list">
//           {categories.map((category) => (
//             <li className="filter-item" key={category}>
//               <button className={activeFilter === category ? "active" : ""} onClick={() => setActiveFilter(category)}>
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
//                   {project.img.endsWith(".mp4") ? (
//                     <video
//                       src={project.img}
//                       poster={project.poster}
//                       className="project-img"
//                       muted
//                       loop
//                       autoPlay
//                       preload="none"
//                       onClick={(e) => {
//                         e.target.muted = !e.target.muted; // Toggle mute on click
                    
//                     }}
//                     />
//                   ) : (
//                     <img src={project.img} alt={project.title} loading="lazy" />
//                   )}

//                 </figure>
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-category">{project.category}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Video/Image Modal */}
//       {modalOpen && selectedProject && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={closeModal}>✖</button>
//             <h2>{selectedProject.title}</h2>
//             {selectedProject.img.endsWith(".mp4") ? (
//               <video
//                 src={selectedProject.img}
//                 controls
//                 autoPlay
//                 className="modal-video"
//                 style={{ width: "100%", height: "auto", maxHeight: "80vh" }}
//               />
//             ) : (
//               <img src={selectedProject.img} alt={selectedProject.title} className="modal-img" />
//             )}
//           </div>
//         </div>
//       )}
//     </article>
//   );
// };

// export default Portfolio;






