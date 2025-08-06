"use client";

import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function TopNav() {
    const router = useRouter();

    return (
      <nav className="flex w-full items-center justify-between border-b border-white p-4 text-xl font-semibold">
        <Link href="/" className="text-3xl duration-400 hover:text-teal-100 cursor-pointer">
          Gallery
        </Link>
  
        <div className="flex flex-row">
            <SignedOut>
                <div className="cursor-pointer">
                    <SignInButton/>
                </div>
            </SignedOut>
            <SignedIn>
                <UploadButton 
                    endpoint="imageUploader"
                    onClientUploadComplete={() => {
                        router.refresh();
                    }}
                />
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    );
  }