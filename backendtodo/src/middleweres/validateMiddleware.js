const { ZodError } = require("zod");

const validate = (schema, type = "body") => (req, res, next) => {
  try {
    switch (type) {
      case "body":
        schema.parse(req.body);
        break;
      case "query":
        schema.parse(req.query);
        break;
      case "params":
        schema.parse(req.params);
        break;
      default:
        throw new Error("Invalid validation type");
    }
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: error.issues.map((e) => e.message), // ✅ fixed here
      });
    }

    return res.status(500).json({
      message: error.message || "Something went wrong",
    });
  }
};

module.exports = { validate };
