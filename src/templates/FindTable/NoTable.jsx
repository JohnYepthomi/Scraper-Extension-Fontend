export default function NoTable({ message }) {
    return (
        <div style={ { height: "250px" } } className="d-flex flex-column justify-content-center align-items-center">
            <div>{ message }</div>
        </div>
    );
}