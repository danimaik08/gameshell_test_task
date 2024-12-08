export const calculateUseBundleAnalyzerFlag = (): boolean => {
  const envUseBundleAnalyzer = process.env.USE_BUNDLE_ANALYZER ?? '';

  try {
    return !!process.env.USE_BUNDLE_ANALYZER
      ? JSON.parse(process.env.USE_BUNDLE_ANALYZER)
      : false;
  } catch {
    throw new Error(
      `webpack error: invalid env USE_BUNDLE_ANALYZER, it may be true or false, current USE_BUNDLE_ANALYZER = ${envUseBundleAnalyzer}`
    );
  }
};
