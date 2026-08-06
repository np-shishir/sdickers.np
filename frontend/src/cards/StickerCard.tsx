import React from "react";

export default function StickerCard({
  stickerImage,
  stickerName,
  collectionType,
  stickerPrice,
}) {
  return (
    <div className="flex flex-col w-full rounded-2xl overflow-hidden border-2 border-[#2e2e2e] bg-[#181818] hover:shadow-[0_0_12px_rgba(0,255,102,0.9)] hover:border-transparent hover:scale-105 duration-300">
      {/* Image */}
      <div className="bg-white p-6 flex items-center justify-center h-64">
        <img
          src={stickerImage}
          alt={stickerName}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <span
            className="text-white font-semibold text-lg flex-1 truncate"
            title={stickerName}
          >
            {stickerName}
          </span>

          <span className="text-[#00ff66] font-bold text-base flex-shrink-0">
            Rs. {stickerPrice}
          </span>
        </div>

        <span className="text-xs text-[#8a8a8a] uppercase tracking-wide">
          Collection: {collectionType}
        </span>
      </div>
    </div>
  );
}
