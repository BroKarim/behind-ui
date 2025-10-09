import UploadMedia from "./components/media-upload";
export default function Page() {
  return (
    <>
      <div className="max-w-screen bg-backgroud z-50 flex min-h-screen items-center justify-center p-4">
        <UploadMedia />
      </div>
    </>
  );
}
