export default function Navbar() {
  const bottomScrollPosition: ScrollToOptions = {
    top: 100,
    left: 0,
    behavior: "smooth",
  };

  const goToBottom = () => {
    console.log("contact us button clicked!");
    window.scrollTo(bottomScrollPosition);
  };

  return (
    <div className="max-w-[1550px] w-full mx-auto">
      <div className="p-5 max-w-[1550px] w-full fixed bg-gray-50 flex justify-between">
        <h2 className="font-montserrat font-bold text-sm">Projects hub</h2>
        <button
          className="relative font-montserrat font-bold text-sm before:content-[''] before:h-1 before:absolute before:top-full before:left-0 before:w-0 
          before:-z-10 before:transition-all before:bg-gray-500 before:rounded hover:before:w-full"
          onClick={goToBottom}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
