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

//GET steps DONE
function findSteps(id) {
  return db("schemes")
  .join("steps", "schemes.id", "steps.scheme_id")
  .select("schemes.scheme_name", "steps.step_number", "steps.instructions" )
  .where({ scheme_id: id })
  .orderBy("steps.step_number")
};

// Add is DONE
function add(scheme) {
  return db("schemes")
  .insert(scheme, "id")
  .then(([id]) => {
      return findById(id);
  });
};

//Update is DONE
function update(changes, id) {
  return db("schemes")
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        });
};

//Remove is 
function remove(id) {
  return db('schemes')
  .where('id', id)
  .del();

};