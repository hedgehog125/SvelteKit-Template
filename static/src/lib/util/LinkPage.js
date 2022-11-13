import { base } from "$app/paths";

const linkPage = href => {
    if (href.endsWith("/")) href = href.slice(0, -1);

    return base + "/" + href;
};
export default linkPage;