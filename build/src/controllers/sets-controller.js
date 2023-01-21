import setRepository from "../repositories/set-repository.js";
async function listAll(req, res) {
    const result = await setRepository.selectAll();
    return res.send(result.rows);
}
async function listOne(req, res) {
    const id = req.body.id;
    const result = await setRepository.selectById(id);
    return res.send(result.rows[0]);
}
export { listAll, listOne };
//# sourceMappingURL=sets-controller.js.map