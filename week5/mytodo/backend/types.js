const zod = require("zod");

const todoschema = zod.object({
    title: zod.string(),
    description: zod.string()
})

const idschema = zod.object({
    id: zod.string()
});

module.exports = {
    todoschema,
    idschema
}