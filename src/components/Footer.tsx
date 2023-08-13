export default function Footer() {
  return (
    <footer className="hidden md:block md:h-[10%] max-w-[1550px] mx-auto bg-primary-500 text-sm text-black">
      <div className="flex flex-row items-stretch w-full h-full justify-stretch">
        <div className="flex flex-col items-center justify-start gap-2 p-2 basis-1/2">
          <h2 className="text-center border-b-2 border-black">Contact Us</h2>
          <div className="flex items-center justify-center">
            <img src="icons/whatsapp.png" alt="wp" className="h-5" />
            <p>: +91 9999999999</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-2 p-2 basis-1/2">
          <h2 className="text-center border-b-2 border-black">About Us</h2>
          <div>
            <p>
              We are students of SRM-KTR college and wanted to make a cool
              project as a side hustle
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
