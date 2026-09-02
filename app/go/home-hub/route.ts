import { NextResponse } from "next/server";

// Home Hub uses a personal /i/<token> link per user — the bare domain
// shows a "no access" page. The real destination (including the token)
// lives only in this deployment's environment variables, never in source,
// since this repo is public. Set HOME_HUB_ENTER_URL in Railway's variables
// for the control-room service.
export async function GET() {
  const url = process.env.HOME_HUB_ENTER_URL;

  if (!url) {
    return NextResponse.json(
      { error: "HOME_HUB_ENTER_URL is not configured on this deployment" },
      { status: 500 }
    );
  }

  return NextResponse.redirect(url);
}
