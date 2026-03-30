export default function ProjectCard({ title, category }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{category}</p>
    </div>
  );
}
