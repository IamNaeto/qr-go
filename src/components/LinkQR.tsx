"use client"
import { useState, useRef } from "react";
import Image from "next/image";
import QRCode from "qrcode";

const LinkQR = () => {
  const [url, setUrl] = useState<string>("");
  const [qrCode, setQrCode] = useState<string | null>(null);
  const qrCodeRef = useRef<HTMLImageElement>(null);

  const generateQRCode = async () => {
    if (url.trim() !== "") {
      try {
        const generatedQRCode = await QRCode.toDataURL(url);
        setQrCode(generatedQRCode);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    }
  };

  const handleGenerateClick = (e: React.FormEvent) => {
    e.preventDefault();
    generateQRCode();
  };

  const downloadAsJPG = () => {
    if (qrCodeRef.current) {
      const link = document.createElement("a");
      link.href = qrCodeRef.current.src;
      link.download = "qrcode.jpg";
      link.click();
    }
  };

  const downloadAsPNG = () => {
    if (qrCodeRef.current) {
      const link = document.createElement("a");
      link.href = qrCodeRef.current.src;
      link.download = "qrcode.png";
      link.click();
    }
  };

  return (
    <main className="relative top-[100px] w-full min-h-screen pt-5 md:pt-10 pb-20 px-[5%] grid grid-cols-1 md:grid-cols-2 items-center md:items-start gap-10 md:gap-52">
      <section className="grid gap-2">
        <h1 className="text-[28px] md:text-[32px] text-dark font-semibold text-center md:text-left">Enter URL</h1>

        <form onSubmit={handleGenerateClick} className="grid gap-4 text[14px] md:text-[16px] text-dark">
          <input
            type="url"
            placeholder="Enter your URL here"
            className="input pl-11"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full text[14px] md:text-[16px] px-3 md:px-5 py-2.5 md:py-3 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150"
          >
            Generate
          </button>
        </form>
      </section>

      <section className="w-full grid place-items-center">
        <div className="w-full md:w-[80%] border-dashed border-[3px] p-8 rounded-xl grid grid-cols-1 items-center justify-center place-items-center gap-4">
          {!qrCode && <h1 className="text-[24px] text-dark text-center font-semibold">Generated QR-Code appears here and ready to download. <br /><br /> Enter your link and click on generate to create your QR-Code. <br /><br /> Enjoy!!!</h1>}

          {qrCode && <Image ref={qrCodeRef} src={qrCode} alt="qrcode" width={200} height={200} />}

          {qrCode && (
            <h1 className="text-[28px] text-dark text-center font-semibold">Download as</h1>
          )}

          {qrCode && (
            <>
              <button onClick={downloadAsJPG} className="w-full text[14px] md:text-[16px] px-3 md:px-5 py-2.5 md:py-3 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150">
                JPG
              </button>

              <button onClick={downloadAsPNG} className="w-full text[14px] md:text-[16px] px-3 md:px-5 py-2.5 md:py-3 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150">
                PNG
              </button>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default LinkQR;
