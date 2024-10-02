import { Button, useDisclosure } from "@nextui-org/react";
import { createLazyFileRoute } from "@tanstack/react-router";

// @ts-ignore
const logger = getLogger(LoggerNames.Default);

export const Route = createLazyFileRoute("/test-page")({
  component: TestPage
});

function TestPage() {
  // @ts-ignore
  // const myStore = useMyStore();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <TestPageLayout>
      <div className="flex p-2 space-x-2">
        <Button onPress={onOpen} color="primary">
          Open Modal
        </Button>
        <ModalCreateCamera modalControl={{ isOpen, onOpenChange }} />
      </div>
    </TestPageLayout>
  );
}
