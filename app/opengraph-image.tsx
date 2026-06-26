import { ImageResponse } from "next/og";

export const alt = "1nFlow — Banking software for Indonesian lenders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#ffffff",
          padding: "84px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10, background: "linear-gradient(100deg,#d4a017,#b8860b,#8a6508)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg,#d4a017,#b8860b,#8a6508)" }} />
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700, color: "#0b1220" }}>1nflow</div>
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, color: "#0b1220", marginTop: 40, letterSpacing: -1, maxWidth: 900 }}>
          Banking software for Indonesian lenders.
        </div>
        <div style={{ fontSize: 28, color: "#51607a", marginTop: 24 }}>
          LOS · Appraisal · Collections · Treasury · CDD — one BPMN/DMN engine.
        </div>
      </div>
    ),
    { ...size },
  );
}
