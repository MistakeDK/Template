import { Button, extendVariants } from "@nextui-org/react";

export const ButtonVariant = extendVariants(Button, {
  variants: {
    isSelected: {
      true: " bg-transparent text-[#ededed]",
      false: "shadow-none bg-transparent text-[#94949c]"
    },
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
      md: "min-w-10 min-h-5 text-small gap-1 rounded-small",
      xl: ""
    },
    isIconOnly: {
      true: "bg-transparent"
    }
  }
});
