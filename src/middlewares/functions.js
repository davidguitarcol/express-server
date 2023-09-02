const Middleware = (req, res, next) => {
    const metodo = req.method;
  
    if (
      metodo == "POST" ||
      metodo == "GET" ||
      metodo == "PUT" ||
      metodo == "DELETE"
    ) {
      next(); //Se utiliza next para continuar
    } else {
      res.status(405).send("Método inválido"); // fin de la solicitud
    }
  };
  
  function validateBody(req, res, next) {
    if (Object.values(req.body).length === 0) {
      res.status(400).send("Es requirido un body");
    } else {
      next();
    }
  }
  
  function validateInfo(req, res, next) {
    const { description, completed } = req.body;
    if (!description || typeof description !== "string") {
      return res
        .status(400)
        .json({ error: "La descripción de la tarea es inválida o faltante." });
    } else if (typeof completed !== "boolean" && completed !== undefined) {
      return res
        .status(400)
        .json({ error: "El campo 'completed' debe ser true o false." });
    } else {
      next();
    }
  }
  
  function validateStatusParam(req, res, next) {
    const { status } = req.params;
    if (status && status !== "completed" && status !== "incomplete") {
      return res.status(400).json({ error: "Parámetro 'status' inválido." });
    }
    next();
  }
  
  module.exports = {
    Middleware,
    validateBody,
    validateInfo,
    validateStatusParam,
  };