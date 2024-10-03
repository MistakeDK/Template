import { CameraIcon } from "../assets/CameraIcon";
import { categoryItemState } from "../components/layout/ILayout";
const editOnClick = (evt: React.MouseEvent<HTMLButtonElement>, info: object) => {
  console.log("btn click info", info);
};
const arrCategoryItem: Array<categoryItemState> = [
  {
    titleItem: "camera",
    btnGroupItem: [
      {
        btnName: "edit",
        icon: <CameraIcon filled={"cyan"} />,
        onClick: editOnClick,
        info: { test: "abc" }
      },
      {
        btnName: "New",
        icon: <CameraIcon filled={"cyan"} />,
        onClick: editOnClick,
        info: { test: "abd" }
      }
    ]
  },
  {
    titleItem: "camera",
    btnGroupItem: [
      {
        btnName: "edit",
        icon: <CameraIcon filled={"cyan"} />,
        onClick: editOnClick,
        info: { test: "abc" }
      },
      {
        btnName: "New",
        icon: <CameraIcon filled={"cyan"} />,
        onClick: editOnClick,
        info: { test: "abd" }
      }
    ]
  }
];
export const fetchFakeArrCategoryItem = (): Promise<categoryItemState[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrCategoryItem);
    }, 1000);
  });
};
export interface row {
  key: string;
  STT: string;
  Camera: string;
  IPAddress: string;
  Gate: string;
  Type: string;
  Username: string;
  Password: string;
  Support: string;
  Status: string;
  action?: string;
}
interface responsePagination<T> {
  page: number;
  pageSize: number;
  totalItems: number;
  items: T[];
}
const rows: row[] = [
  {
    key: "1",
    STT: "1",
    Camera: "Dahua",
    IPAddress: "192.168.12.1.1.1.1",
    Gate: "192.168.12.1.1.1.1",
    Type: "ONVIF",
    Username: "admin",
    Password: "12345678",
    Support: "Yes",
    Status: "V"
  },
  {
    key: "2",
    STT: "2",
    Camera: "Dahua",
    IPAddress: "192.168.12.1.1.1.1",
    Gate: "192.168.12.1.1.1.1",
    Type: "ONVIF",
    Username: "admin",
    Password: "12345678",
    Support: "Yes",
    Status: "V"
  },
  {
    key: "3",
    STT: "3",
    Camera: "Dahua",
    IPAddress: "192.168.12.1.1.1.1",
    Gate: "192.168.12.1.1.1.1",
    Type: "ONVIF",
    Username: "admin",
    Password: "12345678",
    Support: "NO",
    Status: "V"
  },
  {
    key: "4",
    STT: "4",
    Camera: "Dahua",
    IPAddress: "192.168.12.1.1.1.1",
    Gate: "192.168.12.1.1.1.1",
    Type: "ONVIF",
    Username: "admin",
    Password: "12345678",
    Support: "Yes",
    Status: "V",
    action: ""
  },
  {
    key: "5",
    STT: "5",
    Camera: "Dahua",
    IPAddress: "192.168.12.1.1.1.1",
    Gate: "192.168.12.1.1.1.1",
    Type: "ONVIF",
    Username: "admin",
    Password: "12345678",
    Support: "Yes",
    Status: "V",
    action: ""
  },
  {
    key: "6",
    STT: "6",
    Camera: "Dahua",
    IPAddress: "192.168.12.1.1.1.1",
    Gate: "192.168.12.1.1.1.1",
    Type: "ONVIF",
    Username: "admin",
    Password: "12345678",
    Support: "Yes",
    Status: "V",
    action: ""
  },
  {
    key: "7",
    STT: "7",
    Camera: "Dahua",
    IPAddress: "192.168.12.1.1.1.1",
    Gate: "192.168.12.1.1.1.1",
    Type: "ONVIF",
    Username: "admin",
    Password: "12345678",
    Support: "Yes",
    Status: "V",
    action: ""
  },
  {
    key: "8",
    STT: "8",
    Camera: "Dahua",
    IPAddress: "192.168.12.1.1.1.1",
    Gate: "192.168.12.1.1.1.1",
    Type: "ONVIF",
    Username: "admin",
    Password: "12345678",
    Support: "Yes",
    Status: "V",
    action: ""
  },
  {
    key: "9",
    STT: "9",
    Camera: "Dahua",
    IPAddress: "192.168.12.1.1.1.1",
    Gate: "192.168.12.1.1.1.1",
    Type: "ONVIF",
    Username: "admin",
    Password: "12345678",
    Support: "Yes",
    Status: "V",
    action: ""
  },
  {
    key: "10",
    STT: "10",
    Camera: "Dahua",
    IPAddress: "192.168.12.1.1.1.1",
    Gate: "192.168.12.1.1.1.1",
    Type: "ONVIF",
    Username: "admin",
    Password: "12345678",
    Support: "Yes",
    Status: "V",
    action: ""
  }
];

export const fetchFakeRow = (page, pageSize): Promise<responsePagination<row>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        items: rows.slice(page - 1, pageSize),
        pageSize: pageSize,
        page: page,
        totalItems: rows.length
      });
    }, 1000);
  });
};
