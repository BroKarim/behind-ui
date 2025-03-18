import { NextResponse } from "next/server";
import { getRegistryComponent, getRegistryItem } from "@/lib/registry-utils";

// Modified API route
export async function POST(req: Request) {
  const { name, style } = await req.json();
  if (!name || !style) return NextResponse.json({ error: "Missing parameters" }, { status: 400 });

  try {
    // Instead of trying to return the component itself, return the path to the component
    const item = await getRegistryItem(name, style);

    if (!item) {
      return NextResponse.json({ error: "Component not found" }, { status: 404 });
    }

    // Return the information needed to load the component
    return NextResponse.json({
      success: true,
      componentInfo: {
        name,
        style,
        files: item.files.map((file) => ({
          path: file.path,
          type: file.type,
        })),
      },
    });
  } catch (error) {
    console.error("Error in getRegistryItem:", error);
    return NextResponse.json({ error: "Failed to fetch component info" }, { status: 500 });
  }
}
