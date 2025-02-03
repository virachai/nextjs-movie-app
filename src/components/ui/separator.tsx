// "use client";

// import * as SeparatorPrimitive from "@radix-ui/react-separator";
// import * as React from "react";

// import { cn } from "@/lib/utils";

// const Separator = React.forwardRef<
//   React.ElementRef<typeof SeparatorPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
// >(
//   (
//     { className, orientation = "horizontal", decorative = true, ...props },
//     ref,
//   ) => (
//     <SeparatorPrimitive.Root
//       ref={ref}
//       decorative={decorative}
//       orientation={orientation}
//       className={cn(
//         "shrink-0 bg-border",
//         orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
//         className,
//       )}
//       {...props}
//     />
//   ),
// );
// Separator.displayName = SeparatorPrimitive.Root.displayName;

// export { Separator };

"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";
import { cn } from "@/lib/utils"; // Ensure cn utility is working properly

// Using ComponentRef instead of ElementRef
const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>, // Updated to ComponentRef
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border", // Default styling
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", // Conditional styles for horizontal/vertical
        className // Allow additional classNames to be passed via props
      )}
      {...props}
    />
  )
);

Separator.displayName = "Separator"; // Updated display name for clarity

export { Separator };
