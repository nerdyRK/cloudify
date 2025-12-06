export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(200).json({ message: "method not allowed" });
  } else if (req.headers["X-Api-Key"] !== "my-secret-key") {
    console.log("not");

    res.status(200).json({ authorized: false });
  } else {
    console.log("yes");
    res.status(200).json({ authorized: true });
  }
}
