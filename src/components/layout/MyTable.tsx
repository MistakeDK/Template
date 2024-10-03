import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

export const MyTable = () => {
  return (
    <>
      <div className=" p-1 overflow-x-auto">
        <Table
          classNames={{
            wrapper: " p-0 rounded-none ",
            th: "last:rounded-none "
          }}
          isStriped
          aria-label="Example table with fixed column"
          className="w-full"
        >
          <TableHeader>
            <TableColumn className="sticky left-0 top-0 z-10  !rounded-none w-24">Fixed Column</TableColumn>
            <TableColumn className="">Column 2</TableColumn>
            <TableColumn className="">Column 3</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn>Column 4</TableColumn>
            <TableColumn className="sticky right-0 z-10">Column 4</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className=" sticky left-0 z-10 after:border-2  after:absolute after:h-full after:top-0 after:right-0">
                Row 1 - Fixed
              </TableCell>
              <TableCell>Row 1 - Data 2</TableCell>
              <TableCell>Row 1 - Data 3</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell>Row 1 - Data 4</TableCell>
              <TableCell className="sticky right-0 w-fit z-10 ">Row 1 - Data 5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};
