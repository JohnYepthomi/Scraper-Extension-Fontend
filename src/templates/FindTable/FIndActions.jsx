import { Stack, Button } from "react-bootstrap";

export default function FindActions({
  searching,
  hasData,
  handleFindTable,
  handleFilterTable,
}) {
  return (
    <div
      style={hasData ? {} : { height: "250px" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Stack
        direction="horizontal"
        gap="2"
        className="justify-content-center align-items-center"
      >
        <Button
          id="start-injection"
          type="button"
          size="sm"
          className="btn btn-success align-self-end"
          onClick={handleFindTable}
        >
          {searching ? "searching..." : "Find Table"}
        </Button>

        {hasData && (
          <Button
            type="button"
            size="sm"
            className="btn btn-warning align-self-end"
            onClick={handleFilterTable}
          >
            Filter Table
          </Button>
        )}
      </Stack>
    </div>
  );
}
