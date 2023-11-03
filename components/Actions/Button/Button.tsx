

import cn from "@/utils/cn";
import { cva, type VariantProps } from "cva";

type buttonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants>;

const variants = cva(
  "p-4 rounded-lg active:border-4 leading-6 cursor-pointer",
  {
    variants: {
      variant: {
        filled: [
          "text-darkBlue bg-tertiary",
          "hover:bg-secondary",
          "active:bg-secondary active:border-tertiary",
          "focus:bg-primary",
        ],
        outline: [
          "text-white bg-tertiary/5",
          "hover:bg-tertiary/10",
          "active:border-tertiary/5",
          "focus:bg-tertiary/20",
        ],
      },
    },

    defaultVariants: {
      variant: "filled",
    },
  },
);

const Button = ({ variant, children, className, ...props }: buttonProps) => {
  return (
    <button className={cn(variants({ variant }), className)} {...props}>
      {children ?? "Button"}
    </button>
  );
};

export default Button;
