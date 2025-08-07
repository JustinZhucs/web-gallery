"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "~/app/_components/simple-upload-button";

export function TopNav() {
    const router = useRouter();

    return (
      <nav className="flex w-full items-center justify-between border-b border-white p-4 text-xl font-semibold overflow-hidden">
        <button 
          onClick={() => router.push("/")} 
          className="text-3xl duration-400 hover:text-teal-100 cursor-pointer"
        >
          Gallery
        </button>
  
        <div className="flex flex-row items-center gap-4 dark">
            <SignedOut>
                <div className="cursor-pointer">
                    <SignInButton/>
                </div>
            </SignedOut>
            <SignedIn>
                {/* <UploadButton 
                    endpoint="imageUploader"
                    onClientUploadComplete={() => {
                        router.refresh();
                    }}
                /> */}
                <SimpleUploadButton/>
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    );
  }