import { Button, extendVariants } from "@nextui-org/react";

export const ButtonVariant = extendVariants(Button, {
  variants: {
    color: {
      primary: "bg-cyan-300"
    },
    isDisabled: {
      true: "opacity-60"
    },
    size: {
      xss: "p-0 min-w-2 min-h-2 text-tiny",
      xs: "p-1 min-w-6 min-h-3 text-tiny gap-0.5 rounded-small",
      md: "p-2 min-w-10 min-h-5 text-small gap-1 rounded-small",
      xl: "p-4 min-w-14 min-h-7 text-large gap-2 rounded-medium"
    },
    isIconOnly: {
      true: "bg-transparent"
    }
  }
});
