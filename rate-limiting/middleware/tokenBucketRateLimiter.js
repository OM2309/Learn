const tokenBucketRateLimiter = new Map();

function tokenBucketRateLimiter(req, res, next) {
  const ip = req.ip;
  const refillRate = 10;
  const bucketSize = 100;
  const now = Date.now();

 
  if (!tokenBuckets.has(ip)) {
    tokenBuckets.set(ip, { tokens: bucketSize, lastRefill: now });
  }

  const bucket = tokenBuckets.get(ip);

  // Refill tokens
  const elapsedTime = (now - bucket.lastRefill) / 1000;
  bucket.tokens = Math.min(
    bucketSize,
    bucket.tokens + elapsedTime * refillRate
  );
  bucket.lastRefill = now;

  if (bucket.tokens < 1) {
    return res.status(429).send("Too many requests, try again later.");
  }

  bucket.tokens--;
  next();
}
