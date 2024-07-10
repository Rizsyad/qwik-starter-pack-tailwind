import { component$, PropsOf, Slot } from '@builder.io/qwik';
import { cn } from '@qwik-ui/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// export const buttonVariants = cva(
//   'inline-flex items-center justify-center rounded text-sm font-medium transition-all duration-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
//   {
//     variants: {
//       look: {
//         primary:
//           'border-base bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:shadow-base active:press',
//         secondary:
//           'border-base bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 active:shadow-base active:press',
//         alert:
//           'border-base bg-alert text-alert-foreground shadow-sm hover:bg-alert/90 active:shadow-base active:press',
//         outline:
//           'border bg-background text-foreground shadow-sm hover:bg-accent active:shadow-base active:press',
//         ghost: 'text-accent-foreground hover:bg-accent',
//         link: 'text-foreground hover:bg-transparent hover:text-foreground/80 hover:underline hover:underline-offset-2',
//       },
//       size: {
//         sm: 'h-8 px-2 py-1.5 text-sm',
//         md: 'h-12 px-4 py-3 text-base',
//         lg: ' h-16 px-8 py-4 text-lg',
//         icon: 'h-10 w-10',
//       },
//     },
//     defaultVariants: {
//       look: 'primary',
//       size: 'md',
//     },
//   },
// );

type ButtonProps = PropsOf<'button'> & VariantProps<typeof buttonVariants>;

export const Button = component$<ButtonProps>(({ size, variant, ...props }) => {
  return (
    <button {...props} class={cn(buttonVariants({ size, variant }), props.class)}>
      <Slot />
    </button>
  );
});
