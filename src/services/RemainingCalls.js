export async function RemainingCalls() {
  const res = await fetch(
    "https://geo.ipify.org/service/account-balance?apiKey=at_k24wjUCIpU1D36mSvgQa7wXYVxDYG"
  );

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  const data = await res.json();
  return data.credits;
}
