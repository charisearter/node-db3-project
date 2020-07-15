const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

// GET all DONE
function find() {
  return db("schemes");

};

//Get by ID Done
function findById(id) {
  return db("schemes").where({ id }).first();
};

function findSteps(id) {

};

function add(scheme) {

};

function update(changes, id) {

};

function remove(id) {

};