const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController");
const MiddlewaresController = require("../controllers/MiddlewaresController");

router.get("/", BookController.getAllBooks);

router.post(
  "/addbook",
  MiddlewaresController.verifyAdmin,
  BookController.addBook
);
module.exports = router;

router.delete(
  "/deletebook/:id",
  MiddlewaresController.verifyAdmin,
  BookController.deleteBook
);
