import { parseLifecycle } from "./lifecycle-parser";export function parseLifetimes(e, r) {
  if (!e) {
    return;
  }parseLifecycle(e, r);
}
