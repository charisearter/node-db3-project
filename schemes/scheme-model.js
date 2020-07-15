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

// Add is DONE
function add(scheme) {
  return db("schemes")
  .insert(scheme, "id")
  .then(([id]) => {
      return findById(id);
  });
};

//Update is 
function update(changes, id) {
  return db("scheme")
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        });
};

function remove(id) {

};