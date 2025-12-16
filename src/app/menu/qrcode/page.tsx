"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QRPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div>
      <h2>QR Code منو</h2>

      <QRCodeSVG value={`${baseUrl}/menu`} size={256} />
    </div>
  );
}
