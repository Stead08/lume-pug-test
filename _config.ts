import lume from "lume/mod.ts";
import pug from "lume/plugins/pug.ts";
import sass from "lume/plugins/sass.ts";

const site = lume();

site.use(pug());
site.use(sass());

export default site;
