import Table from '../Table';

export default function TableMode() {

    return (
        <div className="border border-1 border-secondary p-2 rounded d-flex flex-column gap-3">
            <div>
                <h6 class="text-light">Table Preview</h6>
                <Table />
            </div>

            <button
                id="start-injection"
                type="button"
                className="btn btn-success align-self-center"
            >
                Find Table
            </button>
        </div>
    );
}
