import React from "react";

const Blog = () => {
  const videoId = "KJ_gXUC0fZA";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Array of blog posts with title, description, and Medium link
  const blogPosts = [
    {
      title: "October Blog: A Month in the Life of a CS Student at UofT",
      description:
        "An overview of a month as a CS student at the University of Toronto.",
      link: "https://medium.com/@nevinadacakmak/october-blog-as-a-cs-student-uoft-2b5adbdd3d20",
    },
    {
      title:
        "My Journey with Tech@RBC Women’s Advisory Program: From Application to the End",
      description:
        "My experience with RBC Tech’s Women’s Advisory Program, in a nutshell.",
      link: "https://medium.com/@nevinadacakmak/my-journey-with-tech-rbc-womens-advisory-program-from-application-to-the-end-01369a83edc7",
    },
  ];

  return (
    <div id="blog">
      <h1>Blog & Content</h1>
      <div className="blog-section">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Read More
            </a>
          </div>
        ))}
        <div className="content-item" style={{ marginTop: "32px" }}>
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
