import { Alpine } from "alpinejs";
import type HTMX from "htmx.org";

declare global {
	interface Window {
		htmx: HTMX;
		Alpine: Alpine;
	}
}
