import React from "react";

const Blog = () => {
  const videoId = "KJ_gXUC0fZA";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Array of blog posts with title, description, and Medium link
  const blogPosts = [
    {
      title: "Part 2: Building the Backbone - Backend APIs and Database Setup",
      description:
        "A guide on setting up backend APIs and databases for projects.",
      link: "https://medium.com/@nevinadacakmak/part-2-building-the-backbone-backend-apis-and-database-setup-5e334c78aa72",
    },
    {
      title:
        "Building Univeats: A Journey in Creating the Student Meal Planner App",
      description:
        "Insights on building a student meal planner app from scratch.",
      link: "https://medium.com/@nevinadacakmak/building-univeats-a-journey-in-creating-the-student-meal-planner-app-0228f829d2f2",
    },
    {
      title: "October Blog: A Month in the Life of a CS Student at UofT",
      description:
        "An overview of a month as a CS student at the University of Toronto.",
      link: "https://medium.com/@nevinadacakmak/october-blog-as-a-cs-student-uoft-2b5adbdd3d20",
    },
  ];

  return (
    <div id="blog">
      <h1>Blog & Braindump</h1>

      {/* Blog Section */}
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
      </div>

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
