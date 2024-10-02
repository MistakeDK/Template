import "@/styles/pages/home/index.scss";
import React from "react";

// @ts-ignore
const logger = getLogger(LoggerNames.Default);

export const Route = createLazyFileRoute("/")({
  component: Index
});

interface ISectionItem {
  name: string;
  iconCls: string;
  url: string;
}

interface IHomeSection {
  sectionTitle: string;
  sectionItems?: ISectionItem[];
}

function Index() {
  const sectionTitleConfig = "text-lg font-semibold text-zinc-300";
  const sectionItemIconConfig = "w-20 h-20 text-zinc-300";
  const sectionItemNameConfig = "text-sm font-normal text-zinc-300";

  const sectionSetting: IHomeSection[] = [
    {
      sectionTitle: "Quản lý và cài đặt camera",
      sectionItems: [
        { name: "Camera", url: "", iconCls: "solar--videocamera-bold" },
        { name: "Cài đặt lưu trữ và ghi hình", url: "", iconCls: "solar--database-bold" }
      ]
    },
    {
      sectionTitle: "Quản lý máy chủ",
      sectionItems: [
        { name: "Máy chủ", url: "", iconCls: "solar--laptop-3-bold" },
        { name: "Máy trạm", url: "", iconCls: "solar--server-minimalistic-bold" }
      ]
    },
    {
      sectionTitle: "Phân quyền",
      sectionItems: [
        { name: "Người dùng", url: "", iconCls: "solar--user-rounded-bold" },
        { name: "Nhóm người dùng", url: "", iconCls: "solar--users-group-rounded-bold-duotone" },
        { name: "Tổ chức", url: "", iconCls: "solar--users-group-two-rounded-bold" }
      ]
    },
    {
      sectionTitle: "Giám sát Camera theo Bản đồ",
      sectionItems: [{ name: "Text", url: "", iconCls: "solar--streets-map-point-bold-duotone" }]
    }
  ];

  return (
    <HomeLayout>
      <div className="flex flex-col w-full px-4 py-2 space-y-5">
        {/*  */}
        {sectionSetting.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            <div className="flex flex-col w-full pb-2">
              <div className="flex flex-col w-full px-1 py-2">
                <p className={`w-full ${sectionTitleConfig}`}>{section.sectionTitle}</p>
              </div>
              <div className="section-items-container w-full px-3">
                {section.sectionItems &&
                  section.sectionItems.map((sectionItem, sectionItemIndex) => (
                    <React.Fragment key={sectionItemIndex}>
                      <motion.div
                        whileHover={{ scale: 1.07 }}
                        className="section-item flex flex-col bg-[rgb(29,56,76)] bg-opacity-35 rounded-2xl overflow-hidden relative cursor-pointer"
                        title={sectionItem.name}
                      >
                        <div className="h-3/4 flex flex-col items-center justify-center">
                          <IconBuilder name={sectionItem.iconCls} clsConfig={sectionItemIconConfig} />
                        </div>
                        <div className="absolute bottom-2 left-0 h-1/4 w-full flex flex-col flex-nowrap px-2 overflow-hidden justify-center items-center">
                          <p className={`text-center line-clamp-2 ${sectionItemNameConfig}`}>{sectionItem.name}</p>
                        </div>
                      </motion.div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </React.Fragment>
        ))}
        {/*  */}
      </div>
    </HomeLayout>
  );
}
