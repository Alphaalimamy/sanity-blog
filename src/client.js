import client from "@sanity/client"

export default client({
    projectId: "qit7ockg",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-11-08"
}) 