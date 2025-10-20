import HoverComponentPreview from "./components/hover-link-preview-2";
import { ProfileCard } from "./components/profile-card";
export default function Page() {
  return (
    <>
      <div className="max-w-screen bg-backgroud z-50 flex min-h-screen items-center justify-center p-4">
        <div className="flex flex-col gap-12 items-center text-center">
          <div className=" text-neutral-500   gap-1 font-medium text-xl">
            Hey, I am {""}
            <HoverComponentPreview
              href="https://21st/dev/magic"
              previewComponent={<ProfileCard />}
            >
              Michel
            </HoverComponentPreview>
            {""} and i design interface to Ethereum and web3...
          </div>
        </div>
      </div>
    </>
  );
}
