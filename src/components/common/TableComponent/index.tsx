import Image from "next/image";
import * as React from "react";
import { BsFillPencilFill } from "react-icons/bs";

interface RowData {
  [key: string]: any;
}

export interface ITableProps {
  rows: RowData[];
  columns: string[];
  fieldMapping: { [key: string]: string };
  onClick: (data: RowData) => void;
}

export default function Table({
  rows,
  columns,
  fieldMapping,
  onClick,
}: ITableProps) {
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            {columns.map((column, index) => (
              <th
                scope="col"
                className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                key={index}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800">
          {rows.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {(fieldMapping[column] === "thumb" && (
                    <Image
                      src={rowData[fieldMapping[column]]}
                      alt="Hình ảnh"
                      width={100}
                      height={100}
                    />
                  )) ||
                    (fieldMapping[column] === "url" && (
                      <a
                        href={rowData[fieldMapping[column]]}
                        title={fieldMapping[column]}
                      >
                        link
                      </a>
                    )) ||
                    (fieldMapping[column] === "status" && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                        {rowData[fieldMapping[column]]}
                      </span>
                    )) ||
                    (fieldMapping[column] === "edit" && (
                      <button
                        onClick={() => {
                          onClick(rowData);
                        }}
                      >
                        <BsFillPencilFill className="cursor-pointer" />
                      </button>
                    )) ||
                    (column === "STT" && rowIndex + 1) ||
                    rowData[fieldMapping[column]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
