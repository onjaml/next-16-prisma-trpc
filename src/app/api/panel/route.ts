import { NextResponse } from "next/server";
import { appRouter } from "../trpc/trpc-router";
import SuperJSON from 'superjson';
import {renderTrpcPanel} from "trpc-ui"

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not Found", { status: 404 });
  }

  
  return new NextResponse(
    renderTrpcPanel(appRouter, {
      meta: {
        description: "s"
      },        
      url: "http://localhost:3000/api/trpc", // Default trpc route in nextjs
      //transformer: "superjson", // Enabled by default with create-t3-app
    }),
    {
      status: 200,
      headers: [["Content-Type", "text/html"] as [string, string]],
    }
  );
}