import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals';

/**
 * Reports Core Web Vitals metrics to console and optionally to Google Analytics
 * 
 * Core Web Vitals:
 * - LCP (Largest Contentful Paint): Measures loading performance (Good: <2.5s)
 * - INP (Interaction to Next Paint): Measures interactivity (Good: <200ms)
 * - CLS (Cumulative Layout Shift): Measures visual stability (Good: <0.1)
 * 
 * Other metrics:
 * - FCP (First Contentful Paint): Time to first content render (Good: <1.8s)
 * - TTFB (Time to First Byte): Server response time (Good: <600ms)
 */

function sendToGoogleAnalytics({ name, delta, value, id, rating }: Metric) {
  // Check if gtag is available (Google Analytics is loaded)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Send to Google Analytics as custom event
    (window as any).gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      metric_value: value,
      metric_delta: delta,
      metric_rating: rating,
      non_interaction: true,
    });
  }
}

function logToConsole({ name, delta, value, rating }: Metric) {
  const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
  const color = rating === 'good' ? '#0CCE6B' : rating === 'needs-improvement' ? '#FFA400' : '#FF4E42';
  
  console.log(
    `%c${emoji} ${name}`,
    `color: ${color}; font-weight: bold; font-size: 12px;`,
    `\n  Value: ${Math.round(name === 'CLS' ? value * 1000 : value)}${name === 'CLS' ? '' : 'ms'}`,
    `\n  Delta: ${Math.round(name === 'CLS' ? delta * 1000 : delta)}${name === 'CLS' ? '' : 'ms'}`,
    `\n  Rating: ${rating}`
  );
}

export function reportWebVitals() {
  // Report each metric as it becomes available
  onCLS((metric) => {
    logToConsole(metric);
    sendToGoogleAnalytics(metric);
  });
  
  onINP((metric) => {
    logToConsole(metric);
    sendToGoogleAnalytics(metric);
  });
  
  onFCP((metric) => {
    logToConsole(metric);
    sendToGoogleAnalytics(metric);
  });
  
  onLCP((metric) => {
    logToConsole(metric);
    sendToGoogleAnalytics(metric);
  });
  
  onTTFB((metric) => {
    logToConsole(metric);
    sendToGoogleAnalytics(metric);
  });
}

/**
 * Performance recommendations based on Core Web Vitals:
 * 
 * LCP (Largest Contentful Paint):
 * - Optimize images (use modern formats like WebP, proper sizing)
 * - Implement lazy loading for images
 * - Minimize render-blocking resources
 * - Use CDN for static assets
 * 
 * INP (Interaction to Next Paint):
 * - Reduce JavaScript execution time
 * - Code split and lazy load components
 * - Optimize event handlers
 * - Use web workers for heavy computations
 * 
 * CLS (Cumulative Layout Shift):
 * - Always include size attributes on images and videos
 * - Reserve space for dynamic content
 * - Avoid inserting content above existing content
 * - Use CSS aspect-ratio for responsive media
 * 
 * FCP (First Contentful Paint):
 * - Minimize CSS blocking time
 * - Inline critical CSS
 * - Defer non-critical CSS
 * 
 * TTFB (Time to First Byte):
 * - Optimize server response time
 * - Use edge caching (CDN)
 * - Implement proper caching headers
 */
