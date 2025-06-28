// Simple unique ID generator for mock data
let counter = 1;
export function generateId(prefix: string) {
  return `${prefix}-${counter++}`;
}
