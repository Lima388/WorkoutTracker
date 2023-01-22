import { setSchema } from "../schemas/set.model.js";
export async function setSchemaValidation(req, res, next) {
    try {
        const set = req.body;
        const { error } = setSchema.validate(set, { abortEarly: false });
        if (error) {
            const errors = error.details.map((detail) => detail.message);
            return res.status(400).send(errors);
        }
        res.locals.set = set;
        return next();
    }
    catch (err) {
        return res.sendStatus(500);
    }
}
//# sourceMappingURL=setSchemaValidation.js.map