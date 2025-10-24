"use client"

// import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  // const { theme = "system" } = useTheme()

  return (
    <Sonner
      // theme={theme as ToasterProps["theme"]}
      theme="dark"
      className="toaster group"
      // style={
      //   {
      //     "--normal-bg": "var(--popover)",
      //     "--normal-text": "var(--popover-foreground)",
      //     "--normal-border": "var(--border)",
      //   } as React.CSSProperties
      // }
      toastOptions={{
        classNames: {
          toast: "bg-black text-white border-white/10",
          title: "text-white",
          description: "text-zinc-300",
          closeButton: "text-zinc-400 hover:text-white",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
