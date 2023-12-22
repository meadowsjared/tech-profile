const outputExport = process.env.NEXT_PUBLIC_OUTPUT_EXPORT !== "false";

const nextConfig = {
  basePath: "/resume",
  ...(outputExport ? { output: "export" } : {}),
};

module.exports = nextConfig;
