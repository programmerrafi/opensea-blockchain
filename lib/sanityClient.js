import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "cagmk9r9",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk9UUvDKv6w6tHdKYBYgbkRVmA34Ocm3rVCGpZ4Vj9iYSWN2GXlXEsT9GUDF6016CdLm74iwSRJQSCaKUpCzNlfGqRqXOEopO1NgSf6JJQj954TwYWA74ojPg3BZLje55i9AI5ZfkTa11yJ4JAFqaRQoP0ulIBI7Q7V30Q9Iwrg0EhjzehKe",
  useCdn: false,
});
