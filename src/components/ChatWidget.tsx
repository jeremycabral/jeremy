import { useEffect } from 'react';

const GHL_WIDGET_ID = '69772364a1bfa26236ef4fd9';
const GHL_SCRIPT_SRC = 'https://widgets.leadconnectorhq.com/loader.js';
const GHL_RESOURCES_URL = 'https://widgets.leadconnectorhq.com/chat-widget/loader.js';

export function ChatWidget() {
  useEffect(() => {
    if (document.querySelector(`script[data-widget-id="${GHL_WIDGET_ID}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = GHL_SCRIPT_SRC;
    script.async = true;
    script.setAttribute('data-resources-url', GHL_RESOURCES_URL);
    script.setAttribute('data-widget-id', GHL_WIDGET_ID);

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
