export default function Table() {
    return (
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
    );
}