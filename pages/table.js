import { useMemo } from "react";
import { useTable } from "react-table";
import toArray from "../lib/toArray";

import DumpJson from "../components/DumpJson";

const Table = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ data, columns });

  return (
    <table
      className="table-auto border-collapse bg-gray-800 text-gray-200 w-full"
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            className="border-b border-gray-300"
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <th className="px-4 py-3" {...column.getHeaderProps()}>
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
            <tr
              className="bg-gray-700 border-b border-gray-600"
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => {
                return (
                  <td className="px-4 py-3" {...cell.getCellProps()}>
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

const TablePage = ({ data }) => {
  const result = useMemo(() =>
    data?.mtf?.conceptGrp.map((concept) => {
      return {
        id: concept.concept,
        en: toArray(
          concept.languageGrp.find(
            (language) => language.language._lang === "EN"
          ).termGrp
        )
          .map((term) => term.term)
          .join(", "),
        fr: toArray(
          concept.languageGrp.find(
            (language) => language.language._lang === "FR"
          ).termGrp
        )
          .map((term) => term.term)
          .join(", ")
      };
    })
  );

  const columns = useMemo(() => [
    { Header: "id", accessor: "id" },
    { Header: "English", accessor: "en" },
    { Header: "French", accessor: "fr" }
  ]);

  return (
    <>
      <div className="col-span-2">
        {columns && data ? (
          <Table data={result} columns={columns} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
};

export default TablePage;
