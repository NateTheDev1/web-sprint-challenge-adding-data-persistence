const express = require("express");
const server = express();
server.use(express.json());
const db = require("./data/dbHelper");

server.get("/api/projects", (req, res) => {
  db.findProjects()
    .then((projects) => {
      returnData(projects, res);
    })
    .catch((err) => {
      handleError(err, res);
    });
});

server.post("/api/projects", (req, res) => {
  db.addProjects(req.body)
    .then((created) => {
      returnData(created, res);
    })
    .catch((err) => {
      handleError(err, res);
    });
});

server.get("/api/resources", (req, res) => {
  db.findResources()
    .then((resources) => {
      returnData(resources, res);
    })
    .catch((err) => {
      handleError(err, res);
    });
});

server.post("/api/resources", (req, res) => {
  db.addResources(req.body)
    .then((created) => {
      returnData(created, res);
    })
    .catch((err) => {
      handleError(err, res);
    });
});

server.get("/api/tasks/:id", (req, res) => {
  db.findTasks(req.params.id)
    .then((tasks) => {
      returnData(tasks, res);
    })
    .catch((err) => {
      handleError(err, res);
    });
});

server.post("/api/tasks", (req, res) => {
  db.addTasks(req.body)
    .then((created) => {
      returnData(created, res);
    })
    .catch((err) => {
      handleError(err, res);
    });
});

server.get("/api/projects/:id/resources", (req, res) => {
  db.getResourcesForProjects(req.params.id)
    .then((resources) => {
      returnData(resources, res);
    })
    .catch((err) => {
      handleError(err, res);
    });
});

server.get("/api/resourcesall/:id", (req, res) => {
  db.getResourceProject(req.params.id)
    .then((resources) => {
      returnData(resources, res);
    })
    .catch((err) => {
      handleError(err, res);
    });
});

function returnData(data, res) {
  res.status(200).json({ data: data });
}

function handleError(err, res) {
  console.log(err);
  res.status(500).json({ error: err });
}

server.listen(5000, () => {
  console.log("Server on port 5000");
});
