export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bottom-0 z-50 bg-black bg-opacity-60">
      <i className="fa-solid fa-spinner animate-spin text-4xl text-white"></i>
    </div>
  );
}
