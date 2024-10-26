module.exports = {
    apps: [
      {
        name: "strapi-blogs",
        script: "npm",
        args: "start",
        wait_ready: true,
        listen_timeout: 3000,
      },
    ],
  };