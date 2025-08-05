let currentDomain = null;
let startTime = Date.now();

const isProductive = (domain) => {
  const productiveSites = ["stackoverflow.com", "github.com", "google.com"];
  return productiveSites.includes(domain);
};

function sendTime(domain, duration) {
  if (!domain) return;

  fetch("http://localhost:3000/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      website: domain,
      timeSpent: duration,
      date: new Date().toISOString(),
      isProductive: isProductive(domain)
    })
  }).catch(console.error);
}

chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.tabs.get(tabId, (tab) => {
    if (!tab.url) return;
    const domain = new URL(tab.url).hostname;
    const duration = Date.now() - startTime;
    if (currentDomain) sendTime(currentDomain, duration);
    currentDomain = domain;
    startTime = Date.now();
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    if (!tab.url) return;
    const domain = new URL(tab.url).hostname;
    const duration = Date.now() - startTime;
    if (currentDomain) sendTime(currentDomain, duration);
    currentDomain = domain;
    startTime = Date.now();
  }
});
