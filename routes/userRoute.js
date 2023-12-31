const router = require('express').Router();

let users = [
    {
        "id": 1,
        "name": "Nyein Chan Ko",
        "age": 21
    },
    {
        "id": 2,
        "name": "Chit Su",
        "age": 21
    },
    {
        "id": 1,
        "name": "Ye Yint",
        "age": 28
    },
];



router.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        msg: "All users",
        data: users
    })
});

router.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);

    res.status(200).json({
        status: true,
        msg: "User created",
        data: users
    });
});

router.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        const user = users.find(user => user.id == id);

        if (!user) {
            res.status(404).json({
                status: false,
                msg: 'User not found'
            });
        }

        res.status(200).json({
            status: true,
            data: user
        });
    })
    .patch((req, res) => {
        const id = req.params.id;
        const updateUser = users.find(user => user.id == id);
    
        if (updateUser) {
            updateUser.name = req.body.name;
    
            res.status(200).json({
                status: true,
                msg: 'Updated successfully!',
                data: updateUser,
            })
        } else {
            res.status(404).json({
                status: true,
                msg: "User not found!"
            });
        }
    })
    .delete((req, res) => {
        const id = req.params.id;

        users = users.filter(user => user.id != id);
    
        res.status(200).json({
            status: true,
            msg: "Deleted successfully"
        });
    })



module.exports = router;