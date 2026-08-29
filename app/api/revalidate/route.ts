import { revalidate } from "@/lib/shopify";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return revalidate(request);
}
