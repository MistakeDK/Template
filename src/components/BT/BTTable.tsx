import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React from "react";
import { PlusIcon } from "../../assets/PlusIcon";
import { row } from "../../hooks/ApiFake";

const columns = [
  {
    key: "STT",
    label: "STT"
  },
  {
    key: "Camera",
    label: "Camera"
  },
  {
    key: "IPAddress",
    label: "Địa Chỉ IP"
  },
  {
    key: "Gate",
    label: "Cổng ONVIF"
  },
  {
    key: "Type",
    label: "Loại Thiết Bị"
  },
  {
    key: "Username",
    label: "Tài Khoản"
  },
  {
    key: "Password",
    label: "Mật Khẩu"
  },
  {
    key: "Support",
    label: "Hỗ Trợ PTZ"
  },
  {
    key: "Status",
    label: "Trạng thái Camera"
  }
];

export const BTTable = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["2"]));
  const [data, setData] = useState<row[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const renderCell = (row: row, columnKey: React.Key) => {
    const cellValue = row[columnKey as keyof row];
    switch (columnKey) {
      case "Password":
        return <>******</>;
      case "Status":
        return (
          <div className="flex justify-center">
            <div>
              <PlusIcon color="red" />
            </div>
          </div>
        );
      default:
        return <span>{cellValue}</span>;
    }
  };
  useEffect(() => {
    fetchFakeRow().then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="bg-background">
      <Table
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        classNames={{
          th: "first:rounded-none last:rounded-none border-b border-t-0 text-center",
          table: "border-separate  border-spacing-y-2 ",
          base: "-mt-2",
          td: "text-center"
        }}
        removeWrapper
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn className="min-w-20" key={column.key}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No rows to display."} isLoading={isLoading} items={data} className="border-spacing-4">
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell className="min-w-20 text-center">{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
