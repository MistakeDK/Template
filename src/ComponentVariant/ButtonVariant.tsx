import { Button, extendVariants } from "@nextui-org/react";

export const ButtonVariant = extendVariants(Button, {
  variants: {
    focus: {
      true: "outline-none shadow-none"
    },
    color: {
      primary: "bg-cyan-300"
    },
    isDisabled: {
      true: "opacity-60"
    },
    size: {
      xss: "min-w-2 min-h-2 text-tiny",
      xs: "min-w-6 text-tiny gap-0.5 rounded-small",
      md: "min-w-10 min-h-5 text-small gap-1 rounded-small"
    },
    isIconOnly: {
      true: "bg-transparent"
    }
  }
});
