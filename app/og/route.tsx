import { ImageResponse } from "next/og";

export const runtime = "edge";

const inter600 = fetch(new URL(`../../assets/fonts/Inter-SemiBold.ttf`, import.meta.url)).then((res) => res.arrayBuffer());

const inter700 = fetch(new URL(`../../assets/fonts/Inter-Bold.ttf`, import.meta.url)).then((res) => res.arrayBuffer());

const image = fetch(new URL("../../assets/images/beui-logo.png", import.meta.url)).then((res) => res.arrayBuffer());

const logo = fetch(new URL("../../app/icon.png", import.meta.url)).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  const imageData = await image;
  const logoData = await logo;

  const { searchParams } = new URL(req.url);

  // Get title from search params or use default
  const title = searchParams.get("title") ?? "Stunning UI components for Design Engineers.";
  const subtitle = searchParams.get("subtitle") ?? "Enhance your projects with sleek, professionally designed elements that capture attention and elevate user experience. Built by design engineers, for design engineers.";
  const siteName = searchParams.get("siteName") ?? "BehindUI";

  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "80px",
            background: "linear-gradient(135deg, white 0%, #f3f4f6 100%)",
          }}
        >
          {/* Site name/logo */}
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: "-0.05em", width: "100%", alignItems: "center", gap: "2xp" }}>
            <img src={imageData} tw="h-10 w-10 " alt="behindui" />
            {siteName}
          </div>

          {/* Main title */}
          <div
            style={{
              marginTop: "60px",
              display: "flex",
              fontSize: 80,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 1.1,
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.4,
              maxWidth: "800px",
              color: "#374151",
            }}
          >
            {subtitle}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter 600",
            data: await inter600,
          },
          {
            name: "Inter 700",
            data: await inter700,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

function font(fontFamily: string) {
  return { fontFamily };
}
