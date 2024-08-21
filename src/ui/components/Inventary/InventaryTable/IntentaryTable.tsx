import { FC } from "react";
import { IInventaryTableProps } from "./types";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { columns } from "./columnsDefinition";

export const InvetaryTable: FC<IInventaryTableProps> = ({
    data
}) => {
    const table = useReactTable({
        data: data,
        columns: columns,
        getCoreRowModel: getCoreRowModel()

    })
    return (
        <div
            className={`
                w-full h-min-screen h-full
                pl-2 pr-1
                flex flex-col
                gap-3
            `}
        >
            <table className="w-full">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="text-center px-2">
                                    {flexRender(header.column.columnDef.header && header.column.columnDef.header.toString(), header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => {
                                return (
                                    <td key={cell.id} className="relative text-center">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}