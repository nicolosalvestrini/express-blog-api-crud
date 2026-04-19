const posts = require('./../data/data')


function index(req, res) {
    const tag = req.query.tag;

    if (tag) {
        const filteredPost = posts.filter(post => post.tags.includes(tag))
        return res.json(filteredPost)
    }

    res.json(posts)
}

function show(req, res) {
    const id = (req.params.id);
    const post = posts.find(post => post.id === id)
    if (!post) {
        res.status(404).json({
            error : 'non esiste alcun post con questo id'
        })
        return
    }
    res.json(post)
}

function store(req, res) {
    const newpost = {
        id: (posts.length + 1).toString(),
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags,
    }
    posts.push(newpost)

    res.json(posts)
}

function update(req, res) {
    res.send('sostituisci un post')
}

function patch(req, res) {
    res.send('hai modificato un post')
}

function destroy(req, res) {
    const id = (req.params.id);
    const index = posts.findIndex((post) => post.id === id);
    if (index === -1) {
        res.status(404).json({
            error : 'non esiste alcun post con questo id'
        });
    }

    posts.splice(index, 1);

    res.json(posts);
}

module.exports = { index, show, store, update, patch, destroy }
