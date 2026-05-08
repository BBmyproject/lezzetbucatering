type TrackParams = Record<string, string | number | boolean>;

type Gtag = (command: string, eventName: string, params?: TrackParams) => void;

function getGtag(): Gtag | null {
  if (typeof window === 'undefined') return null;

  const gtag = (window as Window & { gtag?: Gtag }).gtag;
  return typeof gtag === 'function' ? gtag : null;
}

function trackContactEvent(eventName: string, eventLabel: string) {
  const gtag = getGtag();
  if (!gtag) return;

  gtag('event', eventName, {
    event_category: 'contact',
    event_label: eventLabel,
    send_to: 'AW-18100718519',
    transport_type: 'beacon',
  });
}

export function trackPhoneClick(eventLabel: string) {
  trackContactEvent('click_to_call', eventLabel);
}

export function trackWhatsAppClick(eventLabel: string) {
  trackContactEvent('click_whatsapp', eventLabel);
}
