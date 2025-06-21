import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between border-b border-white p-4 
        text-xl font-semibold">
        <div>Gallery</div>
  
        <div>
            <SignedOut>
                <div className="cursor-pointer">
                    <SignInButton/>
                </div>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    );
  }