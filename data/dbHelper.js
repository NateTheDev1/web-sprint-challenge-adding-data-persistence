const db = require("./dbConfig");

function findProjects() {
  return db("projects");
}

function addProjects(project) {
  return db("projects").insert(project);
}

function findResources() {
  return db("resources");
}

function addResources(resource) {
  return db("resources").insert(resource);
}

function addTasks(task) {
  return db("tasks").insert(task);
}

function findTasks() {
  return db("tasks");
}

module.exports = {
  findProjects,
  addProjects,
  findResources,
  addResources,
  addTasks,
  findTasks,
};
