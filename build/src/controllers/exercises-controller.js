import exerciseRpository from "../repositories/exercise-repository.js";
async function listAll(req, res) {
    const result = await exerciseRpository.selectAll();
    return res.send(result.rows);
}
export { listAll };
//# sourceMappingURL=exercises-controller.js.map