import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeComponent = () => {
  const websiteURL = "https://emilmammadovv.github.io/myportfolio/";

  return (
    <div className="absolute top-16 left-6">
      <QRCodeCanvas value={websiteURL} size={60} />
    </div>
  );
};

export default QRCodeComponent;

