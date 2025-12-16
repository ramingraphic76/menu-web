"use client";

import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const qrRef = useRef<HTMLCanvasElement>(null);

  const text = "ارائه شده توسط بایت مسترز";

  const downloadQR = () => {
    const qrCanvas = qrRef.current;
    if (!qrCanvas) return;

    const qrSize = qrCanvas.width;
    const padding = 20;
    const textHeight = 40;

    // canvas نهایی
    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = qrSize;
    finalCanvas.height = qrSize + textHeight + padding;

    const ctx = finalCanvas.getContext("2d");
    if (!ctx) return;

    // بک‌گراند سفید
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

    // رسم QR
    ctx.drawImage(qrCanvas, 0, 0);

    // تنظیم متن
    ctx.fillStyle = "#000000";
    ctx.font = "bold";
    ctx.font = "16px shabnam";
    ctx.textAlign = "center";

    // رسم متن زیر QR
    ctx.fillText(text, finalCanvas.width / 2, qrSize + padding + 20);

    // دانلود PNG
    const link = document.createElement("a");
    link.href = finalCanvas.toDataURL("image/png");
    link.download = "menu-qrcode.png";
    link.click();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="m-8 font-bold text-4xl ">QR Code منو</h2>

      <QRCodeCanvas
        ref={qrRef}
        value={`${baseUrl}/menu`}
        size={256}
        level="H"
        className="m-auto"
      />

      <div className="mt-8" >
        <button
          className="bg-green-400 rounded-2xl shadow-2xl p-4 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
          onClick={downloadQR}
        >
          دانلود QR Code (PNG)
        </button>
      </div>
    </div>
  );
}
