import React from "react";

const Blog = () => {
  const videoId = "KJ_gXUC0fZA";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div id="blog">
      <h1>Blog & Braindump</h1>

      {/* Blog Section */}
      <p>Content coming soon...</p>

      {/* Interviews & Talks Section */}
      <div className="content-section">
        <h2>Interviews & Talks</h2>
        <div className="content-item">
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={thumbnailUrl}
              alt="Interview with Ada Çakmak Thumbnail"
              className="thumbnail"
              style={{ width: "100%", maxWidth: "600px", height: "auto" }}
            />
          </a>
          <div>
            <h3>
              Interview With Ada Çakmak - A Student From The University Of
              Toronto
            </h3>
            <p>
              Interviewed with Today The 50th. Talked about my high school
              experiences, the admissions process, being a student at the
              University of Toronto in Canada, and overall advice to high school
              students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
