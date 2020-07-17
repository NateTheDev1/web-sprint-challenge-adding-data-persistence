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

function findTasks(project_id) {
  const { name, description } = db("projects").where(
    project_id,
    "=",
    "project.id"
  );
  return db("tasks")
    .where("project_id", "=", project_id)
    .then((task) => {
      return {
        ...task,
        description,
        name,
      };
    });
}

module.exports = {
  findProjects,
  addProjects,
  findResources,
  addResources,
  addTasks,
  findTasks,
};
