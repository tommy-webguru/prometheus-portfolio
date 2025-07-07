import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0] ||
    req.ip ||
    req.headers.get('x-real-ip') ||
    'unknown';

  // Add IP and timestamp to the data
  const logData = {
    ...data,
    ip,
    timestamp: new Date().toISOString(),
  };

  // Log or store as needed
  console.log(logData);

  return NextResponse.json({ success: true });
}
