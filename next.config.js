const outputExport = process.env.NEXT_PUBLIC_OUTPUT_EXPORT !== "false";

const nextConfigOutput = {
  basePath: "/resume",
  output: "export",
};

const nextConfig = {
  basePath: "/resume",
};

if (outputExport) {
  console.log("nextConfigOutput", outputExport);
  module.exports = nextConfigOutput;
} else {
  console.log("outputExport", outputExport);
  module.exports = nextConfig;
}
