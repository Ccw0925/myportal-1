import React from 'react';
import { useTable } from "react-table";

const CostingTable: React.FC = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "001",
        col2: "Labour",
        col3: "RM800,000",
        col4: "RM500,000",
        col5: "RM300,000",
      },
      {
        col1: "002",
        col2: "Sub-contractors",
        col3: "RM1,000,000",
        col4: "RM2,000,000",
        col5: "RM1,000,000",
      },
      {
        col1: "003",
        col2: "Consultants",
        col3: "RM1,000,000",
        col4: "RM500,000",
        col5: "RM500,000",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Costs Code",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Description",
        accessor: "col2",
      },
      {
        Header: "Budget",
        accessor: "col3",
      },
      {
        Header: "Costs Incured",
        accessor: "col4",
      },
      {
        Header: "Difference",
        accessor: "col5",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: "#E8E8E8",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      borderBottom: "solid 1px lightgrey",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CostingTable;
