import { Button } from "@nextui-org/react";
import React from "react";

interface IButtonNav {
  name: string;
  iconCls: string;
  path: string;
  onClick?: (url: string) => void;
}

export const LeftNav = () => {
  // @ts-ignore
  const navigate = useNavigate();

  const iconConfig = "w-5 h-5 text-zinc-200";
  const ButtonNavConfig: IButtonNav[] = [
    {
      name: "TestPage",
      iconCls: "solar--wheel-angle-bold-duotone",
      path: "/test-page",
      onClick: (url) => {
        navigate({ to: url });
      }
    },
    {
      name: "Trang chủ",
      iconCls: "solar--home-2-bold",
      path: "/",
      onClick: (url) => {
        navigate({ to: url });
      }
    },
    {
      name: "Trang chủ",
      iconCls: "solar--pulse-bold",
      path: "/live-view",
      onClick: (url) => {
        navigate({ to: url });
      }
    },
    {
      name: "Trang chủ",
      iconCls: "solar--cloud-storage-bold",
      path: "/",
      onClick: (url) => {
        navigate({ to: url });
      }
    },
    {
      name: "Trang chủ",
      iconCls: "solar--settings-bold",
      path: "/",
      onClick: (url) => {
        navigate({ to: url });
      }
    },
    {
      name: "Trang chủ",
      iconCls: "solar--user-circle-bold",
      path: "/",
      onClick: (url) => {
        navigate({ to: url });
      }
    }
  ];

  return (
    <React.Fragment>
      <div className="flex flex-col h-full px-1 py-1 pb-2 flex-none">
        <div className="flex flex-col h-full px-1 py-2 rounded-md space-y-3">
          <Button
            isIconOnly
            color="default"
            variant="flat"
            onClick={(evt) => {
              if (btnNav.onClick) btnNav.onClick(btnNav.path);
            }}
            className="bg-[rgb(29,56,76)] bg-opacity-35"
          >
            {/* <IconBuilder name={btnNav.iconCls} clsConfig={iconConfig} /> */}
            <IconBuilder name={`solar--hamburger-menu-linear`} clsConfig={iconConfig} />
          </Button>
          {ButtonNavConfig.map((btnNav, index) => {
            if (!import.meta.env.DEV && btnNav.path === "/test-page") {
              return null;
            }
            return (
              <React.Fragment key={index}>
                <Button
                  isIconOnly
                  color="default"
                  variant="flat"
                  aria-label={btnNav.name}
                  title={btnNav.name}
                  onClick={(evt) => {
                    if (btnNav.onClick) btnNav.onClick(btnNav.path);
                  }}
                  className="bg-[rgb(29,56,76)] bg-opacity-35"
                >
                  <IconBuilder name={btnNav.iconCls} clsConfig={iconConfig} />
                </Button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
