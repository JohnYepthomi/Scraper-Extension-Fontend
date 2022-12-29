import Table from '../Table';

export default function LinkMode() {
    return (
        <div className="border border-1 border-secondary p-2 rounded d-flex flex-column gap-3">
            <div>
                <h6 class="text-light">Links Preview</h6>
            </div>

            <button
                id="start-injection"
                type="button"
                className="btn btn-success align-self-center"
            >
                Find Link
            </button>
        </div>
    );
}
