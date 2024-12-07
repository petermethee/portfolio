import { TProject } from "@/models/TProject";
import { Button } from "@mui/material";
import styles from "./Details.module.css";

export default function Details({ project }: { project: TProject }) {
  return (
    <div
      className={`flex flex-1 flex-col gap-4 rounded-md bg-primary_dark/20 p-6 font-josefin shadow-md ${styles.table}`}
    >
      <div>
        <span className={`font-merienda text-lg text-secondary`}>
          Détails du projet
        </span>
        <span className="flex w-full justify-evenly gap-4">
          <Button
            size="small"
            disabled={!project.url}
            onClick={() => window.open(project.url, "_blank")}
          >
            Demo
          </Button>
          <Button
            size="small"
            disabled={!project.github}
            onClick={() => window.open(project.github, "_blank")}
          >
            GIT
          </Button>
        </span>
      </div>
      <div>
        <span>Date</span>
        <span>{project.date}</span>
      </div>
      <div>
        <span>Durée</span>
        <span>{project.duration}</span>
      </div>
      {project.client && (
        <div>
          <span>Client</span>
          <span>{project.client}</span>
        </div>
      )}
      {project.team && (
        <div>
          <span>Équipe</span>
          <span>{project.team}</span>
        </div>
      )}
      <div>
        <span>Contexte</span>
        <span>{project.context}</span>
      </div>
      <div>
        <span>Description</span>
        <span>{project.description}</span>
      </div>
      {project.tasks && (
        <div>
          <span>Tâches</span>
          <ul className="list-disc pl-5">
            {project.tasks.map((task) => task && <li>{task}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
