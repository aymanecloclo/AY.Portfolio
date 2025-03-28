import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef(
  ({ className, children, viewportClassName, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        "relative z-20 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport className={viewportClassName} />
    </NavigationMenuPrimitive.Root>
  )
);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center gap-2",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-100/50 dark:data-[state=open]:bg-gray-800/50",
  {
    variants: {
      variant: {
        default: "bg-transparent text-gray-900 dark:text-gray-100",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const NavigationMenuTrigger = React.forwardRef(
  ({ className, children, showChevron = true, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}
      {showChevron && (
        <ChevronDown
          className="relative top-[1px] ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      )}
    </NavigationMenuPrimitive.Trigger>
  )
);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
        className
      )}
      {...props}
    />
  )
);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = React.forwardRef(
  ({ className, active, ...props }, ref) => (
    <NavigationMenuPrimitive.Link
      ref={ref}
      className={cn(
        navigationMenuTriggerStyle(),
        active && "bg-gray-100 dark:bg-gray-800",
        className
      )}
      {...props}
    />
  )
);
NavigationMenuLink.displayName = "NavigationMenuLink";

const NavigationMenuViewport = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div className={cn("absolute left-0 top-full flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "origin-top-center relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
);
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn(
        "top-full z-[1] flex h-2 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-gray-200 dark:bg-gray-800 shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
);
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

// New component for dropdown items
const NavigationMenuDropdownItem = React.forwardRef(
  ({ className, icon, title, description, ...props }, ref) => (
    <li>
      <NavigationMenuLink
        ref={ref}
        className={cn(
          "grid grid-cols-[24px_1fr] gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg",
          className
        )}
        {...props}
      >
        {icon && <div className="flex items-center">{icon}</div>}
        <div>
          <div className="text-sm font-medium leading-none">{title}</div>
          {description && (
            <p className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      </NavigationMenuLink>
    </li>
  )
);
NavigationMenuDropdownItem.displayName = "NavigationMenuDropdownItem";

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationMenuDropdownItem,
};
