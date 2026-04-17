const express = require("express");
const router = express.Router();


// INDEX → lista
router.get("/", (req, res) => {
  res.json(postBlog);
});

// SHOW → dettaglio
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = postBlog.find(post => post.id ===id)
  if (!post){
    res.send('error 404')
  }
  res.json(post)
});

// STORE → crea
router.post("/", (req, res) => {
  const newpost = {
    id: (postBlog.length + 1).toString(),
    titolo: req.body.titolo,
    contenuto: req.body.contenuto,
    immagine: req.body.immagine,
    tags: req.body.tags,
  }
  postBlog.push(newpost)

  res.json(postBlog)
});

// UPDATE → sostituisce tutto
router.put("/:id", (req, res) => {
  res.send('sostituisci un post')
});

// PATCH → modifica parziale
router.patch("/:id", (req, res) => {
  res.send('hai modificato un post')
});

// DESTROY → elimina
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = postBlog.findIndex((post) => post.id === id);
  if (index === -1) {
    res.send("post non trovato");
  }

  postBlog.splice(index, 1);

  res.json(postBlog);
});

module.exports = router;
