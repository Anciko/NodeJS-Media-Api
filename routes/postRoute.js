
const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        msg: "All posts"
    });
});

router.post('/', (req, res) => {
    res.json("all  posts");
});

router.route('/:id')
    .get((req, res) => {
        res.json({ msg: "Single post route" })
    })
    .patch((req, res) => {
        res.json({ msg: "Post updated" })
    })
    .delete((req, res) => {
        res.json({ msg: "Post deleted" })
    });


module.exports = router;