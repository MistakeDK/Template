import {
  Button,
  Checkbox,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@nextui-org/react";
import React from "react";

// @ts-ignore
const logger = getLogger(LoggerNames.Default);

interface ICreateCameraModalProps {
  modalControl: { isOpen: boolean; onOpenChange: (isOpen: boolean) => void };
}

interface ISelectOption {
  label: string;
  value: string | number;
}

enum eInputType {
  TEXT = "text",
  TEXT_AREA = "textarea",
  SELECT = "select",
  PASSWORD = "password",
  CHECKBOX = "checkbox",
  SWiTCH = "switch"
}

interface IInputConfig {
  name: string;
  type:
    | eInputType.TEXT
    | eInputType.TEXT_AREA
    | eInputType.SELECT
    | eInputType.PASSWORD
    | eInputType.CHECKBOX
    | eInputType.SWiTCH;
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  labelPlacement?: "inside" | "outside" | "outside-left";
  isClearable?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  fullWidth?: boolean;
  selectOptions?: ISelectOption[];
}

interface IFormValues {
  cameraName: string;
  description: string;
  deviceType: ISelectOption;
  cameraType: ISelectOption;
  ipDomain: string;
  onvifPort: string;
  rtspPort: string;
  devicePort: string;
  interface: ISelectOption;
  loginAccount: string;
  loginPassword: string;
  ptzSupport: boolean;
  quickShot: boolean;
  rtspStreaming: boolean;
  isActivated: boolean;
}

export const CreateCamera = ({ modalControl }: ICreateCameraModalProps) => {
  const formInputConfig: IInputConfig[] = [
    {
      name: "cameraName",
      type: "text"
    },
    {
      name: "description",
      type: "textarea"
    },
    {
      name: "deviceType",
      type: "select"
    },
    {
      name: "cameraType",
      type: "select"
    },
    {
      name: "ipDomain",
      type: "text"
    },
    {
      name: "onvifPort",
      type: "text"
    },
    {
      name: "rtspPort",
      type: "text"
    },
    {
      name: "devicePort",
      type: "text"
    },
    {
      name: "interface",
      type: "select"
    },
    {
      name: "loginAccount",
      type: "text"
    },
    {
      name: "loginPassword",
      type: "password"
    },
    {
      name: "ptzSupport",
      type: "checkbox"
    },
    {
      name: "quickShot",
      type: "checkbox"
    },
    {
      name: "rtspStreaming",
      type: "checkbox"
    },
    {
      name: "isActivated",
      type: "switch"
    }
  ];

  return (
    <React.Fragment>
      <Modal
        isOpen={modalControl.isOpen}
        placement="top-center"
        onOpenChange={modalControl.onOpenChange}
        backdrop="blur"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Thêm camera</ModalHeader>
              <ModalBody>
                {formInputConfig.map((input, inputIdx) => {
                  if (input.type === eInputType.TEXT) {
                    return (
                      <React.Fragment key={inputIdx}>
                        <Input
                          autoFocus
                          endContent={
                            <IconBuilder
                              name="solar--letter-bold"
                              clsConfig="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0"
                            />
                          }
                          label="Tên camera"
                          placeholder=""
                          variant="bordered"
                        />
                      </React.Fragment>
                    );
                  }
                })}
                <Input
                  endContent={
                    <IconBuilder
                      name="solar--key-bold"
                      clsConfig="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0"
                    />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small"
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};
