/**
 * Generates a unique ID with a timestamp and random string
 * @returns A unique string ID
 */
export function generateUniqueId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}