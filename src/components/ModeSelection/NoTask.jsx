import { Container } from "react-bootstrap";

export default function NoTask() {
  return (
    <div className="d-flex flex-column align-items-center p-5 mt-5 border border-1 border-secondary p-2 rounded">
      <div>No tasks</div>
      <div>Select a mode above to begin</div>
    </div>
  );
}
