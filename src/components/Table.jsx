import CloseButton from "react-bootstrap/CloseButton";
import { Stack } from "react-bootstrap";

export default function Table({ data, setColumnData }) {
  return (
    <div className="table-responsive">
      <table
        style={{ fontSize: "0.65rem" }}
        className="table align-middle caption-top table-dark table-striped table-bordered table-hover table-sm"
      >
        {/* <caption>Showing only the first 5 items</caption> */}
        <thead>
          <tr>
            {data.length > 0 &&
              data.map((_k, index) => (
                <th className="text-info fw-bold" scope="col">
                  <Stack
                    direction="horizontal"
                    className="justify-content-between p-1"
                  >
                    <span>Header {index}</span>
                    <CloseButton
                      variant="white"
                      onClick={function (e) {
                        console.log("removeColumn() called at index: ", index);
                        setColumnData((state) => {
                          let copy = { ...state };
                          delete copy[Object.keys(copy)[index]];
                          return copy;
                        });
                      }}
                    />
                  </Stack>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data?.map((_data, index) => {
              return (
                <tr>
                  {data?.map((col) => {
                    console.log("col: ", col);
                    return (
                      <td className="text-nowrap">
                        {col[index] ? col[index] : "NA"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

// export default function Table({ data, setColumnData }) {
//     return (
//         <div className="table-responsive">
//             <table style={ { fontSize: '0.65rem' } } className="table align-middle caption-top table-dark table-striped table-bordered table-hover table-sm">
//                 {/* <caption>Showing only the first 5 items</caption> */ }
//                 <thead>
//                     <tr>
//                         {
//                             Object.keys(data).length > 0 && Object.keys(data).map((_k, index) =>
//                                 <th className="text-info fw-bold" scope="col">
//                                     <Stack direction="horizontal" className="justify-content-between p-1">
//                                         <span>Header { index }</span>
//                                         <CloseButton variant="white" onClick={ function (e) {
//                                             console.log('removeColumn() called at index: ', index);
//                                             setColumnData(state => {
//                                                 let copy = { ...state };
//                                                 delete copy[Object.keys(copy)[index]];
//                                                 return copy;
//                                             });
//                                         } }
//                                         />
//                                     </Stack>
//                                 </th>
//                             )
//                         }
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         Object.values(data).length > 0 &&
//                         Object.values(data)[0]?.map((_data, index) => {
//                             return (
//                                 <tr>
//                                     {
//                                         Object.values(data)?.map(col => {
//                                             console.log('col: ', col);
//                                             return <td className="text-nowrap">{ col[index] ? col[index] : 'NA' }</td>
//                                         })
//                                     }
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// }
