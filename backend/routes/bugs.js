const router = require('express').Router();
let Bug = require('../models/bug.model');

router.route('/').get((req, res) => {
    Bug.find()
        .then(bugs => res.json(bugs))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const priority = Number(req.body.priority);
    const date = Date.parse(req.body.date);

    const newBug = new Bug({
        username,
        description,
        priority,
        date,
    });

    newBug.save()
        .then(() => res.json('Bug added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Bug.findById(req.params.id)
        .then(bug => res.json(bug))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Bug.findByIdAndDelete(req.params.id)
        .then(() => res.json('Bug deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Bug.findById(req.params.id)
        .then(bug => {
            bug.username = req.body.username;
            bug.description = req.body.description;
            bug.priority = Number(req.body.priority);
            bug.date = Date.parse(req.body.date);

            bug.save()
                .then(() => res.json('Bug updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;