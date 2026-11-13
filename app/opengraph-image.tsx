import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 86,
        background:
          "radial-gradient(circle at 78% 45%, #e6e4ff 0, transparent 34%), linear-gradient(120deg,#fff 35%,#f7f6ff 100%)",
        color: "#11152f",
      }}
    >
      <div
        style={{
          display: "flex",
          color: "#6442f5",
          fontSize: 24,
          letterSpacing: 8,
          fontWeight: 700,
        }}
      >
        SEEABLE HUB
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 38,
          fontSize: 76,
          lineHeight: 1.05,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        built to be seen.
      </div>
      <div style={{ display: "flex", marginTop: 24, color: "#535a76", fontSize: 27 }}>
        Software Solutions &amp; Digital Innovation
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 46,
          width: 170,
          height: 7,
          borderRadius: 8,
          background: "linear-gradient(90deg,#5042f5,#9e43f8)",
        }}
      />
    </div>,
    size,
  );
}
