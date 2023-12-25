const outputExport = process.env.NEXT_PUBLIC_OUTPUT_EXPORT !== "false";

const nextConfigOutput = {
  basePath: "/resume",
  output: "export",
};

const nextConfig = {
  basePath: "/resume",
};

module.exports = outputExport ? nextConfigOutput : nextConfig;
