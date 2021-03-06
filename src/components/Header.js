import React from "react";

export default function Nav() {
  return (
    <nav
      className="main-header-menu"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 40,
      }}
    >
      <section style={{ display: "flex" }}>
        <h1
          style={{
            fontSize: "4rem",
          }}
        >
          Zach Raab{"  "}
          <span style={{ fontSize: "2rem" }}>Full-Stack Web Developer</span>
        </h1>
      </section>
      <section
        style={{
          display: "flex",
          fontSize: "2rem",
        }}
      >
        {/* <div>
          <a href="https://www.linkedin.com/in/zachary-raab-61578248/">
            LinkedIn
          </a>
        </div>
        <div>
          <a href="https://github.com/zachraab">GitHub</a>
        </div> */}
      </section>
    </nav>
  );
}
