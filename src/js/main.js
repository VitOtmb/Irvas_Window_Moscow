import "./slider";
import modules from "./modules/modules";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
	modules();
	tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
});
