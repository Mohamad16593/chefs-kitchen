// server/plugins/well-known-ignore.ts
export default defineNitroPlugin(() => {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    const msg = args.join(" ");
    if (msg.includes("/.well-known/appspecific/com.chrome.devtools.json")) {
      return; // Silently ignore this specific warning
    }
    originalWarn(...args);
  };
});
