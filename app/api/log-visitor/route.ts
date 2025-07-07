import { NextRequest, NextResponse } from 'next/server';
import { appendFile } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    req.headers.get('x-vercel-forwarded-for') ||
    req.ip ||
    'unknown';

  // Add IP and timestamp to the data
  const logData = {
    ...data,
    ip,
    timestamp: new Date().toISOString(),
  };

  // Log to console
  console.log(logData);

  // Log to file
  const logFilePath = path.join(process.cwd(), 'visitor-logs.jsonl');
  await appendFile(logFilePath, JSON.stringify(logData) + '\n');

  return NextResponse.json({ success: true });
}
