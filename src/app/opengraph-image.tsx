/**
 * The card that renders when the site is shared on WhatsApp, LinkedIn, X, or
 * Facebook. Generated at build time rather than hand-designed in Figma so it
 * can never fall out of sync with the brand colours.
 *
 * 1200x630 is the aspect every major platform crops cleanly.
 */
import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Cubes — Construction & Real Estate";

export default async function OpengraphImage() {
  // Read off disk rather than fetch(): at build time there is no server to
  // serve /icon.png yet.
  const logo = readFileSync(join(process.cwd(), "public", "icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #07364d 0%, #0a1628 100%)",
          position: "relative",
        }}
      >
        <img src={logoSrc} width={230} height={230} alt="" />
        <div
          style={{
            marginTop: 34,
            fontSize: 68,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          Cubes
        </div>
        <div style={{ marginTop: 12, fontSize: 32, color: "#e8871e" }}>
          Construction &amp; Real Estate
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 12,
            background: "linear-gradient(90deg, #e8871e 0%, #b05e00 100%)",
          }}
        />
      </div>
    ),
    size,
  );
}
