export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between w-full px-3 py-2 border-[#262626] border-b">
      <div className="flex items-center">
        <div>
          <img src="/c4l.svg" className="w-[52px]" />
        </div>
        <div>
          <h1 className="font-semibold text-xl">
            AI-Enhanced AWS Architecture Generator
          </h1>
        </div>
      </div>
      <div className="flex items-center">
        <p>@ Developed by Code4Life</p>
      </div>
    </header>
  );
}
