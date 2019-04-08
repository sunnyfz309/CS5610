module.exports = function (app) {

  var widgetModel = require("../model/widget/widget.model.server");
  var pageModel = require("../model/page/page.model.server");

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.put("/api/page/:pageId/widget", reorderWidgets);

  var multer = require('multer');
  // var upload = multer({dest: __dirname+'/../../src/assets/uploads'});
  var storage = multer.diskStorage({destination: __dirname+'/../../dist/my-project/assets/uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  var upload = multer({storage: storage}).single('myFile');

  app.post("/api/upload",uploadImage);

  // app.post ("/api/upload", upload.single('myFile'), uploadImage);

  var n = -1;

  function createWidget(req, res) {
    var pageId = req.params["pageId"];
    n = n + 1;
    const widget = {
      type: req.body.type,
      position: n
    };
    widgetModel.createWidget(pageId, widget)
      .then(function (widget) {
        pageModel.findPageById(pageId)
          .then(function (page) {
            page.widgets.push(widget);
            pageModel.updatePage(pageId, page).then();
          });
        res.json(widget);
      });
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params["pageId"];
    var newPos = 0;
    widgetModel.findAllWidgetsForPage(pageId)
      .then(function (widgets) {
        widgets.forEach(function (widget) {
          widget.position = newPos++;
          widgetModel.updateWidget(widget._id, widget).then();
        });
        res.json(widgets);
      });
  }

  function findWidgetById(req, res) {
    var widgetId = req.params["widgetId"];
    widgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      });
  }

  function updateWidget(req, res) {
    var widgetId = req.params["widgetId"];
    var widget = req.body;
    widgetModel.updateWidget(widgetId, widget).then();
    widgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      });
  }

  function deleteWidget(req, res) {
    var widgetId = req.params["widgetId"];
    widgetModel.deleteWidget(widgetId)
      .then(function (status) {
        res.send(status);
      });
  }

  function reorderWidgets(req,res) {

    var startIndex = parseInt(req.query["start"]);
    var endIndex = parseInt(req.query["end"]);

    array_swap(widgets, startIndex, endIndex);
    res.sendStatus(200);

    /* var pageId = req.params.pageId;
     var startIndex = parseInt(req.query.start);
     var endIndex = parseInt(req.query.end);
     widgetModel
       .reorderWidgets(pageId, startIndex, endIndex)
       .then(function (stats) {
         res.send(200);
       }, function (err) {
         res.sendStatus(400).send(err);
       });
 */
  }

  // var baseUrl = 'http://localhost:3200';
  var baseUrl = 'https://webdev-zhe-cs5610.herokuapp.com/';

  function uploadImage(req, res) {
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var widgetId = req.body.widgetId;
    var myFile = req.file;

    var callbackUrl = baseUrl + "/profile/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId;

    if (myFile === null) {
      res.redirect(callbackUrl);
      return;
    }
    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    const widget = {
      url: baseUrl + '/assets/uploads/' + filename
    };

    widgetModel.updateWidget(widgetId, widget).then();
    res.redirect(callbackUrl);
  }

  function array_swap(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  };

  var widgets = [
    {_id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO'},
    {_id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
    {_id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%',
      url: 'https://goo.gl/DQBvXg'},
    {_id: '456', widgetType: 'HTML', pageId: '321', text: '<p>HTML sample</p>'},
    {_id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
    {_id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%',
      url: 'https://www.youtube.com/embed/-deQurc3L-g'},
    {_id: "890", widgetType: "TEXT", pageId: "321", text: "TEXT text example", size: 2,
      placeholder: "TEXT placeholder example", formatted: true},
    {_id: '789', widgetType: 'HEADING', pageId: '321', size: 6, text: 'The End'},
  ];

}
