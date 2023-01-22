import weekRepository from "../repositories/week-repository.js";
async function listAllWithSets(req, res) {
    try {
        const result = await weekRepository.selectAllWithSets();
        return res.status(200).send(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
async function create(req, res) {
    try {
        await weekRepository.insert();
        return res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
async function remove(req, res) {
    try {
        if (isNaN(parseInt(req.params.id))) {
            return res.sendStatus(400);
        }
        const id = parseInt(req.params.id);
        await weekRepository.remove(id);
        return res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
export { listAllWithSets, create, remove };
//# sourceMappingURL=weeks-controller.js.map