/* Connection of frontend and backend using Sanity client */

import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "pi733n6j",
    dataset: "production",
    apiVersion: "2023-11-03",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_KEY
});

/* Url builder takes client to generate image url */

const builder = ImageUrlBuilder(client);

const urlFor = (source) => {
    return builder.image(source);
}

export { client, urlFor };

