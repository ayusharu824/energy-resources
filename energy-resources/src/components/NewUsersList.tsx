import projectList from "../data/consumerProjectList.json";

export default function NewUsersList() {
  return (
    <div>
      {projectList.projects.map((project) => (
        <div key={project.id} style={{ marginBottom: "1.5rem", padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}>
          <strong>{project.name}</strong>
          <div>Location: {project.location}</div>
          <div>Capacity: {project.capacity}</div>
          <div>Status: {project.status}</div>
          <div>Energy Type: {project.energyType}</div>
          <div>Usage Remaining: {project.usageRemaining}</div>
          <div>Phase 1 Close: {project.closingWindowPhase1}</div>
          <div>Phase 2 Close: {project.closingWindowPhase2}</div>
          <div>Avg Unit Price: ₹{project.avgUnitPrice}/kWh</div>
        </div>
      ))}
    </div>
  );
}

