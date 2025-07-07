'use client';

import { useEffect } from 'react';
import { UAParser } from 'ua-parser-js';

export default function VisitorLogger() {
  useEffect(() => {
    const parser = new UAParser();
    const browser = parser.getBrowser();
    const os = parser.getOS();
    const device = parser.getDevice();
    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const language = navigator.language;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const referrer = document.referrer;
    const platform = navigator.platform;
    const cookiesEnabled = navigator.cookieEnabled;
    const doNotTrack = navigator.doNotTrack;

    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(({ ip }) => {
        fetch('/api/log-visitor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            browser: `${browser.name} ${browser.version}`,
            os: `${os.name} ${os.version}`,
            device: device.type || 'desktop',
            userAgent,
            screen: `${screen.width}x${screen.height}`,
            language,
            timezone,
            referrer,
            platform,
            cookiesEnabled,
            doNotTrack,
            clientIp: ip,
          }),
        });
      });
  }, []);

  return null;
}
