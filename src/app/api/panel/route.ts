import { NextResponse } from "next/server";
import { appRouter } from "../trpc/trpc-router";
import SuperJSON from 'superjson';
import { renderTrpcPanel, parseRouterWithOptions } from "trpc-ui";

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not Found", { status: 404 });
  }

  try {
    // fail early with the actual transformer object so errors are clearer
    parseRouterWithOptions(appRouter, { transformer: "superjson" });
  } catch (err) {
    console.error("trpc-panel: failed to parse router", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }

  return new NextResponse(
    renderTrpcPanel(appRouter, {
      meta: { description: "s" },
      url: "http://localhost:3000/api/trpc",
      transformer: "superjson",
    }),
    {
      status: 200,
      headers: [["Content-Type", "text/html"] as [string, string]],
    }
  );
}

// import { NextResponse } from "next/server";
// import { appRouter } from "../trpc/trpc-router";
// import SuperJSON from 'superjson';
// import {renderTrpcPanel,parseRouterWithOptions} from "trpc-ui"

// export async function GET() {
//   if (process.env.NODE_ENV !== "development") {
//     return new NextResponse("Not Found", { status: 404 });
//   }

  
//   return new NextResponse(
//     renderTrpcPanel(appRouter, {
//       meta: {
//         description: "s"
//       },        
//       url: "http://localhost:3000/api/trpc", // Default trpc route in nextjs
//       transformer: "superjson", // Enabled by default with create-t3-app
//     }),
//     {
//       status: 200,
//       headers: [["Content-Type", "text/html"] as [string, string]],
//     }
//   );
// }