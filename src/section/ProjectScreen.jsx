import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useT } from "../i18n/useT";


export default function ProjectScreen() {
  const { id } = useParams();
  const { t, l } = useT();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (!project) return;
    function handleKeyDown(e) {
     
      if (e.key !== "Enter" || e.repeat || e.target.closest?.("a, button")) return;
      window.open(project.url, "_blank", "noopener");
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project]);

  if (!project) return <Navigate to="/projetos" replace />;

  const tech = project.tech ?? [];

  return (
    <main className="project">
      <section className="project-content">
        {project.image && (
          <img
            className="project-image"
            src={project.image}
            alt={`Logo do ${project.label}`}
          />
        )}
        <div className="project-text">
          <h1>{project.label}</h1>
          {project.context && <h2>{l(project.context)}</h2>}

          <p>{l(project.description)}</p>

          {project.role && (
            <>
              <h3>{t("project.role")}</h3>
              <p>{l(project.role)}</p>
            </>
          )}

          {tech.length > 0 && (
            <>
              <h3>{t("project.tech")}</h3>
              <ul className="tags">
                {tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </>
          )}

          <a
            className="project-button"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("project.github")} ▶
          </a>
        </div>
      </section>
    </main>
  );
}