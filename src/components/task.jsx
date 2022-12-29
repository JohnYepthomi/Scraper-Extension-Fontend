export default function Task() {
  return (
    <div class="border border-1 border-secondary p-2 rounded d-flex flex-column gap-3">
      <div>
        <h4 class="text-light">Table Preview</h4>
        <div class="table-responsive">
          <table class="table align-middle caption-top table-dark table-striped table-bordered table-hover table-sm">
            <caption>Showing only the first 5 items</caption>
            <thead>
              <tr>
                <th class="text-info" scope="col">
                  <div class="fs-sm">Header 3</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button
        id="start-injection"
        type="button"
        class="btn btn-success align-self-center"
      >
        Select Table
      </button>
    </div>
  );
}
