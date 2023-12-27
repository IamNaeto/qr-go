"use client"
import { useState } from "react";
import Image from "next/image";
import { useDropzone, FileRejection } from "react-dropzone";
import QRCode from "qrcode";
import { BarLoader } from "react-spinners";

const FileQR = () => {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [uniqueIdentifier, setUniqueIdentifier] = useState<string | null>(null);

  const generateUniqueIdentifier = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpg", ".jpeg", ".png", ".gif"] },
    onDrop: async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        setBackgroundColor("rgba(204, 228, 243, 0.2)");
        setUploadProgress(0);
        setUploadedFileName(null);
        setUniqueIdentifier(null);

        reader.onload = () => {
          setUniqueIdentifier(generateUniqueIdentifier());
        };

        reader.readAsDataURL(file);

        const uploadInterval = setInterval(() => {
          setUploadProgress((prevProgress) => {
            const newProgress = prevProgress + 10;
            return newProgress >= 100 ? 100 : newProgress;
          });
        }, 500);

        // Simulating an asynchronous file upload
        setTimeout(() => {
          setUploadProgress(100);
          setUploadedFileName(file.name);
          clearInterval(uploadInterval);
        }, 5000);
      }
    },
  });

  const generateQRCode = async () => {
    if (uploadedFileName && uniqueIdentifier) {
      try {
        const qrCodeData = `YourBaseURL/${uniqueIdentifier}`;
        const generatedQRCode = await QRCode.toDataURL(qrCodeData);
        setQrCode(generatedQRCode);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    }
  };

  const downloadAsJPG = () => {
    if (qrCode) {
      const link = document.createElement("a");
      link.href = qrCode;
      link.download = `qrcode_${uniqueIdentifier}.jpg`;
      link.click();
    }
  };

  const downloadAsPNG = () => {
    if (qrCode) {
      const link = document.createElement("a");
      link.href = qrCode;
      link.download = `qrcode_${uniqueIdentifier}.png`;
      link.click();
    }
  };

  return (
    <main className="relative top-[100px] w-full min-h-[70vh] pt-5 md:pt-10 pb-20 px-[5%] grid grid-cols-1 md:grid-cols-2 items-center md:items-start gap-10 md:gap-52">
      <section className="grid gap-2">
        <h1 className="text-[28px] md:text-[32px] text-dark font-semibold text-center md:text-left">Upload File</h1>

        <div
          {...getRootProps()}
          style={{ backgroundColor: backgroundColor }}
          className="grid items-center justify-center place-items-center gap-4 text[14px] md:text-[16px] text-dark border-dashed border-[3px] rounded-xl p-8"
        >
          <input {...getInputProps()} />
          <Image src="/img/upload-img.png" width={100} height={100} alt="upload-img" />
          {uploadProgress < 100 ? (
            <>
              <p className="text-[16px] text-dark text-center">
                {uploadProgress === 0 ? "Drag and drop file to create QR code" : `Uploading: ${uploadProgress}%`}
              </p>
              {uploadProgress > 0 && <BarLoader color="#3498db" loading={true} height={4} />}
            </>
          ) : (
            <p className="text-[16px] text-dark text-center">
              {uploadedFileName ? `Uploaded File: ${uploadedFileName}` : ""}
            </p>
          )}
          <button className="w-full text[14px] md:text-[16px] px-3 md:px-5 py-2.5 md:py-3 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150">
            Browse File
          </button>
        </div>

        <button
          onClick={() => {
            if (uploadProgress === 100) {
              generateQRCode();
            }
          }}
          className="w-full text[14px] md:text-[16px] px-3 md:px-5 py-2.5 md:py-3 bg-blue text-white font-semibold rounded-md hover:shadow-lg transition-all delay-150"
        >
          Generate
        </button>
      </section>

      <section className="w-full grid place-items-center">
        <div className="w-full md:w-[80%] border-dashed border-[3px] p-8 rounded-xl grid grid-cols-1 items-center justify-center place-items-center gap-4">
          {!qrCode && (
            <h1 className="text-[24px] text-dark text-center font-semibold">
              Generated QR-Code appears here and ready to download. <br /><br /> Drag and drop a file or browse to create your QR-Code.
              <br /><br /> Enjoy!!!
            </h1>
          )}

          {qrCode && <Image src={qrCode} alt="qrcode" width={200} height={200} />}

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

export default FileQR;