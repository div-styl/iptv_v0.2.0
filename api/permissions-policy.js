// permissions-policy.js

module.exports = (req, res) => {
    res.setHeader('Permissions-Policy', `
      accelerometer=(self), 
      ambient-light-sensor=(self), 
      autoplay=(self), 
      battery=(self), 
      camera=(self), 
      cross-origin-isolated=(self), 
      display-capture=(self), 
      document-domain=(self), 
      encrypted-media=(self), 
      execution-while-not-rendered=(self), 
      execution-while-out-of-viewport=(self), 
      fullscreen=(self), 
      geolocation=(self), 
      gyroscope=(self), 
      keyboard-map=(self), 
      magnetometer=(self), 
      microphone=(self), 
      midi=(self), 
      navigation-override=(self), 
      payment=(self), 
      picture-in-picture=(self), 
      publickey-credentials-get=(self), 
      screen-wake-lock=(self), 
      sync-xhr=(self), 
      usb=(self), 
      web-share=(self), 
      xr-spatial-tracking=(self), 
      clipboard-read=(self), 
      clipboard-write=(self), 
      gamepad=(self), 
      speaker-selection=(self), 
      conversion-measurement=(self), 
      focus-without-user-activation=(self), 
      hid=(self), 
      idle-detection=(self), 
      interest-cohort=(self), 
      serial=(self), 
      sync-script=(self), 
      trust-token-redemption=(self), 
      unload=(self), 
      window-placement=(self), 
      vertical-scroll=(self)
    `);
  
    res.setHeader('Content-Security-Policy', `
      default-src 'self';
      script-src 'self' 'nonce-randomstring';  <!-- Use a real nonce value instead of 'randomstring' -->
      style-src 'self' 'unsafe-inline';
      img-src 'self';
      connect-src 'self';
      font-src 'self';
    `);
  
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('X-Frame-Options', 'DENY');
  
    res.status(200).end();
  };
  