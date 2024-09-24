export const cssStyleToJSStyle = (cssText) => {
  var regex = /([\w-]*)\s*:\s*([^;]*)/g;
  var match,
    properties = {};
  while ((match = regex.exec(cssText))) properties[match[1]] = match[2].trim();
  return properties;
};
