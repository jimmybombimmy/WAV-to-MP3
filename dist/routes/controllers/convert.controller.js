export const hello = (req, res) => {
    res.status(200).send({ message: "this just says hello and does nothing else" });
};
