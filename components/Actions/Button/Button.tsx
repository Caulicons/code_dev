import { cva, type VariantProps } from "cva";

type buttonProps = {} & React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof style>;

const style = cva("p-4 rounded-lg active:border active:border-4 leading-6 cursor-pointer", {
  variants: {
    variant: {
      filled: [
        "text-darkBlue bg-tertiary",
        "hover:bg-secondary",
        "active:border-tertiary",
        "focus:bg-primary",
      ],
      outline: [
        "text-white bg-tertiary/5",
        "hover:bg-tertiary/10",
        "active:border-tertiary/5",
        "focus:bg-tertiary/20",
      ]
    },
  },
  
  defaultVariants: {
    variant: "filled",
  },
});

const Button = ({ variant, children, className, ...props }: buttonProps) => {
  return (
    <button className={`${style({ variant })} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
