import { verifyToken } from "../util/token.js";

// Middleware to verify the token
export const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // If no token, return an unauthorized response
  if (!token) {
    return res.status(401).json({ Error: "Not authenticated" });
  }

  try {
    // Verify token and attach the user to the request object
    const user = await verifyToken(token);

    if (user === null) {
      return res.status(401).json({ Error: "Invalid token" });
    }
    req.user = user
    next(); // Continue to the next middleware or route handler
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal server error" });
  }
};