const Controller = require("./Controller");
class ApiController extends Controller {
  constructor() {
    super();
  }
  actionDataList(ctx) {
    ctx.body = [
      {
        id: 1,
        data: "1",
      },
      {
        id: 2,
        data: "2",
      },
      {
        id: 3,
        data: "3",
      },
      {
        id: 4,
        data: "4",
      },
      {
        id: 5,
        data: "5",
      },

    ];
  }
}
module.exports = ApiController;
