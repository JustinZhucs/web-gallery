'use client'

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { cn } from "~/lib/utils"

type Props = {
  className?: string
}

export function BackToGalleryButton({ className }: Props) {
  const router = useRouter()

  return (
    <Button
      type="button"
      variant="secondary"
      className={cn("w-full cursor-pointer text-base", className)}
      onClick={() => {
        const dialog = document.querySelector('dialog')
        if (dialog?.open) dialog.close()
        router.push('/')
      }}
    >
      Back to Gallery
    </Button>
  )
}
