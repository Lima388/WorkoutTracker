import setRepository from "../repositories/set-repository.js";
async function listAll(req, res) {
    try {
        const result = await setRepository.selectAll();
        return res.status(200).send(result.rows);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
async function create(req, res) {
    try {
        const set = res.locals.set;
        await setRepository.insert(set);
        return res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
async function update(req, res) {
    try {
        const set = res.locals.set;
        await setRepository.update(set);
        return res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
export { listAll, create, update };
//# sourceMappingURL=sets-controller.js.map