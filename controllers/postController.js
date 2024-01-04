const all = async(req, res, next) => {
    res.json("All posts")
}
const store = async(req, res, next) => {
    res.json("store posts")
}

const show = async(req, res, next) => {
    res.json("Single post")
}

const update = async(req, res, next) => {
    res.json("Update post")
}

const destroy = async(req, res, next) => {
    res.json("delete post")
}

module.exports =  {
    all,
    store,
    show,
    update,
    destroy
}
