import { Spinner } from "@nextui-org/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { CameraIcon } from "../assets/CameraIcon";
import { BTTable } from "../components/BT/BTTable";
import { Icolumn } from "../components/layout/ILayout";
import { ButtonVariant } from "../ComponentVariant/ButtonVariant";
import { row } from "../hooks/ApiFake";

export const Route = createLazyFileRoute("/test")({
  component: test
});
function test() {
  const emptyContent = () => {
    return <Spinner color="danger" size="lg"></Spinner>;
  };
  const columns: Icolumn<row>[] = [
    { key: "STT", label: "STT", allowSorting: true },
    { key: "Camera", label: "Camera" },
    { key: "IPAddress", label: "IP Address" },
    {
      key: "Status",
      label: "Status",
      formatter: (value: string) => <span>{value}</span>
    },
    { key: "Password", label: "Password", formatter: (value: string) => <>{value.replace(value, "****")}</> },
    {
      key: "Action",
      label: "Hanh dong",
      formatter: (value, row: row) => (
        <ButtonVariant
          onClick={() => {
            alert(row["STT"]);
          }}
          isIconOnly
          size="xss"
        >
          <CameraIcon />
        </ButtonVariant>
      )
    }
  ];
  return (
    <div className="bg-red-300 w-screen h-screen flex justify-center items-center">
      <div className="w-1/2">
        <BTTable
          fetchData={fetchFakeRow}
          column={columns}
          emptyContent={emptyContent()}
          selection="none"
          pagination={true}
        />
      </div>
    </div>
  );
}
