export default function GET(req, res) {
  if (req.headers["X-Api-Key"] !== "my-secret-key")
    res.status(200).json({ authorized: false });
  else res.status(200).json({ authorized: true });
}
