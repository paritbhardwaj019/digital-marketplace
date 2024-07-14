import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <div className="bg-white sticky top-0 inset-x-0 h-16 w-full z-[9999999999999999]">
      <header className="relative bg-white">
        <div className="border-b border-gray-200">
          <MaxWidthWrapper>
            <div className="flex h-16 items-center">
              {/* TODO: Mobile Nav */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Image src="/logo.svg" width="90" height="90" alt="Logo" />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </header>
    </div>
  );
}
