const port = process.env.NODE_DOCKER_PORT;
const runMessage = `app running on localhost:${port}`;

module.exports = {
  port,
  runMessage
}
