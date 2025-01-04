import { ImageResponse } from "next/og";

import { capitalize } from "@/lib/utils";

export const runtime = "edge";

const inter600 = fetch(new URL(`../../assets/fonts/Inter-SemiBold.ttf`, import.meta.url)).then((res) => res.arrayBuffer());

const inter700 = fetch(new URL(`../../assets/fonts/Inter-Bold.ttf`, import.meta.url)).then((res) => res.arrayBuffer());

const logo = fetch(new URL("../../assets/images/beui-logo.png", import.meta.url)).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  const logoData = await logo;

  const url = new URL(req.url);
  const params = Object.fromEntries(url.searchParams);
  const title = capitalize((params.title || "Stunning UI components for Design Engineers.").replace(/-/g, " ").split(" ").slice(0, 3).join(" ").substring(0, 20));

  try {
    return new ImageResponse(
      (
        <div tw="flex justify-center flex-col relative w-full h-full  bg-white p-[80px]">
          <h1 style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: "-0.05em", width: "100%", alignItems: "center", gap: "2xp" }}>
            <img
              tw="h-10 w-10"
              alt={title}
              // @ts-ignore
              src={logoData}
            />
            <span tw="ml-3">Behind UI</span>
          </h1>

          {title && (
            <p
              style={{
                marginTop: "60px",
                display: "flex",
                fontSize: 80,
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 1.1,
                maxWidth: "1000px",
                ...font("Inter 600"),
              }}
            >
              {title}
            </p>
          )}

          {/* Subtitle */}
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.4,
              maxWidth: "800px",
              color: "#374151",
              ...font("Inter 700"),
            }}
          >
            Enhance your projects with sleek, professionally designed elements that capture attention and elevate user experience. Built by design engineers, for design engineers.
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
