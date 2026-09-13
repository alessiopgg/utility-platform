export type AnalyticsEvent =
  | 'page_view' | 'tool_started' | 'tool_completed' | 'tool_error_code'
  | 'download' | 'copy_result' | 'related_tool_clicked' | 'locale_changed';

export function track(event: AnalyticsEvent, metadata: Record<string, string | number | boolean> = {}): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('utility:analytics', { detail: { event, metadata } }));
}
