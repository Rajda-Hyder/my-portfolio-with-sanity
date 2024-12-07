import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-primary-foreground hover:bg-green-500",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  Icon?: React.ElementType; // Add Icon prop
  iconPlacement?: "left" | "right"; // Specify icon placement
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, asChild, Icon, iconPlacement, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={classNames(buttonVariants({ variant, className }))} ref={ref} {...props}>
      {Icon && iconPlacement === "left" && <Icon className="mr-2" />}
      {children}
      {Icon && iconPlacement === "right" && <Icon className="ml-2" />}
    </Comp>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };