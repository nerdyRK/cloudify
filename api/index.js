export default function handler(req, res) {
  if (req.method == "GET") {
    if (req.headers["X-Api-Key"] !== "my-secret-key")
      res.status(200).json({ authorized: false });
    else res.status(200).json({ authorized: true });
  } else {
    res.status(200).json({ message: "method not allowed" });
  }
}
