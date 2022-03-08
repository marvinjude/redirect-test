import path from "path"

export async function createPages({ actions }) {
  const { createPage, createRedirect } = actions

  createPage({
    path: "/using-dsg",
    component: path.resolve("./src/templates/using-dsg.js"),
    context: {},
  })

  for (let i = 0; i < 10_000; i++) {
    createRedirect({
      fromPath: `/using-dsg-${i}`,
      toPath: "/using-dsg",
      isPermanent: true,
      redirectInBrowser: true,
    })
  }

  createRedirect({
    fromPath: `/using-dsg-${Date.now()}`,
    toPath: "/using-dsg",
    isPermanent: true,
    redirectInBrowser: true,
  })
}
