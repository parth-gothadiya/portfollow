// 



import React, { useState } from "react";

const Sidebar = () => {
  const [isViewMore, setIsViewMore] = useState(false);

  const toggleViewMore = () => {
    setIsViewMore(!isViewMore);
  };

  return (
    <aside className={`sidebar ${isViewMore ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        {/* Avatar with background blur */}
        <figure className="avatar-box">
          <img src="/images/my-avatar.png" alt={window.config.sidebar.name} width="80" />
          <div className="avatar-bg-blur"></div>
        </figure>

        <div className="info-content">
          <h1 className="name" title={window.config.sidebar.name}>
            {window.config.sidebar.name}
          </h1>
          <p className="title">{window.config.sidebar.designation}</p>
        </div>

        <button onClick={toggleViewMore} className="info_more-btn" data-sidebar-btn>
          <span>{isViewMore ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon name={isViewMore ? "chevron-up" : "chevron-down"}></ion-icon>
        </button>
      </div>

      <div className={`sidebar-info_more ${isViewMore ? "visible" : "hidden"}`}>
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${window.config.sidebar.email}`} className="contact-link">
                {window.config.sidebar.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${window.config.sidebar.phone}`} className="contact-link">
                {window.config.sidebar.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime={window.config.sidebar.dob}>{window.config.sidebar.dob}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{window.config.sidebar.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {window.config.sidebar.socialMedia.map((social, index) => (
            <li key={index} className="social-item">
              <a
                href={social.link}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
              <ion-icon name={social.icon}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
