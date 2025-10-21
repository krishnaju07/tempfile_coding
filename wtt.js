// === API endpoint for Women's Singles RND2000200 ===
const BASE_URL = "https://liveeventsapi.worldtabletennis.com/api/cms/GetMatchCardDetails/3110/TTEWSINGLES-----------RND2000200----------";

const QUERY_PARAMS = new URLSearchParams({
  use_live_match_cache: false
});

function getApiUrl() {
  // Add timestamp to avoid caching
  return `${BASE_URL}?${QUERY_PARAMS.toString()}&_t=${Date.now()}`;
}

// === Headers from your curl ===
const options = {
  method: "GET",
  headers: {
    "Accept": "application/json",
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,ta;q=0.7,id;q=0.6",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://www.worldtabletennis.com",
    "Referer": "https://www.worldtabletennis.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    "sec-ch-ua": '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"'
  },
  cache: "no-store"
};

let intervalId = null;
let lastGameScores = "";

// === Helper: format game scores nicely ===
function extractGameScores(data) {
  const raw = data?.gameScores;
  if (!raw) return [];
  return raw.split(",").map((s, i) => ({
    game: i + 1,
    score: s
  }));
}

// === Fetch & display ===
async function callAPI() {
  try {
    const response = await fetch(getApiUrl(), options);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    const gameScores = data?.gameScores || "";
    if (gameScores && gameScores !== lastGameScores) {
      console.clear();

      console.log(`🏓 ${data.subEventDescription} (${data.venueName} – ${data.tableName})`);
      console.log(`Status: ${data.resultStatus} | Current Game: ${data.currentGameNumber}`);
      console.log("──────────────────────────────");

      const games = extractGameScores(data);
      games.forEach(g => {
        const marker = g.game === data.currentGameNumber ? "⬅️ LIVE" : "";
        console.log(`Game ${g.game}: ${g.score} ${marker}`);
      });

      if (data.action) {
        console.log("──────────────────────────────");
        console.log(`Server: ${data.action.serverPlayer} | Receiver: ${data.action.serverReceiver}`);
      }

      console.log("──────────────────────────────");
      console.log(`Updated: ${new Date().toLocaleTimeString()}`);

      lastGameScores = gameScores;
    }
  } catch (err) {
    console.error("API Error:", err.message);
  }
}

// === Poll every 2 seconds ===
function startPolling(interval = 2000) {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(callAPI, interval);
  console.log(`Started polling every ${interval / 1000}s`);
  callAPI(); // initial fetch
}

function stopPolling() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("Stopped polling.");
  }
}

// 🚀 Start the live score tracker
startPolling(2000);
