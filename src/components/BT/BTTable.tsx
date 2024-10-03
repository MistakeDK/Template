import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import React from "react";
import { Icolumn } from "../layout/ILayout";
interface TableProp<T> {
  emptyContent: React.ReactNode;
  column: Icolumn<T>[];
  fetchData: (
    page: number,
    limit: number
  ) => Promise<{ items: T[]; totalItems: number; page: number; pageSize: number }>;
  selection: "none" | "single" | "multiple";
  pagination?: boolean;
}
const TableUiConfig = {
  tableHeader: "border-b text-center",
  table: "",
  base: "justify-between",
  tableCell: "text-center"
};
export const BTTable = <T,>({ pagination, column, emptyContent, fetchData, selection }: TableProp<T>) => {
  const [selectedKeys, setSelectedKeys] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSize] = useState(4);
  const renderCell = <T,>(row: T, columnKey: React.Key, columns: Icolumn<T>[]): React.ReactNode => {
    const cellValue = row[columnKey as keyof T];
    const column = columns.find((col) => col.key === columnKey);
    if (column?.formatter) {
      return column.formatter(cellValue, row);
    }
    return <span>{cellValue as string}</span>;
  };

  const list = useAsyncList({
    async load({ signal }) {
      const data = await fetchData(currentPage, pageSize); //note: Fix default 4
      setTotalItems(data.totalItems);
      return {
        items: data.items
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }
          return cmp;
        })
      };
    }
  });
  return (
    <div className="bg-background w-full h-full pb-1">
      <Table
        selectionMode={selection}
        selectedKeys={selectedKeys}
        sortDescriptor={list.sortDescriptor}
        onSelectionChange={() => setSelectedKeys}
        onSortChange={list.sort}
        classNames={{
          th: `first:rounded-none last:rounded-none ${TableUiConfig["tableHeader"]}`,
          table: `${TableUiConfig["table"]}`,
          base: `${TableUiConfig["base"]}`,
          td: `${TableUiConfig["tableCell"]}`
        }}
        removeWrapper
        bottomContent={pagination || null}
      >
        <TableHeader columns={column}>
          {(column) => {
            if (column.isFixed) {
              return (
                <TableColumn
                  className="sticky left-0 z-10  bg-red-600"
                  key={column.key}
                  allowsSorting={column.allowSorting}
                >
                  {column.label}
                </TableColumn>
              );
            }
            return (
              <TableColumn className="" key={column.key} allowsSorting={column.allowSorting}>
                {column.label}
              </TableColumn>
            );
          }}
        </TableHeader>
        <TableBody emptyContent={emptyContent} items={list.items as T[]}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell className="">{renderCell(item, columnKey, column)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-4">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          defaultValue={1}
          total={Math.ceil(totalItems / pageSize)}
          onChange={(page) => {
            setCurrentPage(page);
            list.loadMore();
          }}
          size="lg"
        />
      </div>
    </div>
  );
};
