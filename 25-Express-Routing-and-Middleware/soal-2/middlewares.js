module.exports = {
  logger: (req, res, next) => {
    console.log("server run \nthis is logger");

    // untuk debugger, misal tim FE mendapat error pada saat request ke endpoint tertentu kita bisa tracing diloggernya
    // untuk tahu errornya dimana, requestnya kapan dan kemana
    console.log(`[${new Date().toString()}]\n ${req.method}\n "${req.url}": ${JSON.stringify(req.headers)}`);
    next();
  },
};
