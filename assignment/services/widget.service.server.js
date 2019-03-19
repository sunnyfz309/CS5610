module.exports = function (app) {

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

  var widgets = [
    {_id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO'},
    {_id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
    {
      _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%',
      url: 'http://lorempixel.com/400/200/'
    },
    // {_id: '456', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'},
    {_id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
    {
      _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%',
      url: 'https://www.youtube.com/embed/-deQurc3L-g'
    },
    {_id: '789', widgetType: 'HEADING', pageId: '321', size: 6, text: 'The End'}
  ];

  function createWidget(req, res) {
    var widget = req.body;
    widget._id = (new Date()).getTime() + '';
    widgets.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params["pageId"];
    var widgetsByPageId = widgets.filter(function (widget) {
      return widget.pageId === pageId;
    });
    res.json(widgetsByPageId);
  }

  function findWidgetById(req, res) {
    var widgetId = req.params["widgetId"];
    for (const i in widgets) {
      if (widgets[i]._id === widgetId) {
        res.json(widgets[i]);
        return;
      }
    }
  }

  function updateWidget(req, res) {
    var widgetId = req.params["widgetId"];
    var widget = req.body;
    for (const i in widgets) {
      if (widgets[i]._id === widgetId) {
        widgets[i].widgetType = widget.widgetType;
        widgets[i].pageId = widget.pageId;
        widgets[i].size = widget.size;
        widgets[i].text = widget.text;
        widgets[i].width = widget.width;
        widgets[i].url = widget.url;
        widgets[i].placeholder = widget.placeholder;
        widgets[i].formatted = widget.formatted;
        res.json(widgets[i]);
        return;
      }
    }
  }

  function deleteWidget(req, res) {
    var widgetId = req.params["widgetId"];
    widgets.splice(widgets.findIndex(function (widget) {
      return widget._id === widgetId;
    }), 1);
    res.json({});
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
  // var baseUrl = 'https://webdev-zhe-cs5610.herokuapp.com/';

  function uploadImage(req, res) {
    upload(req,res,(err) => {
      if(err){
        res.render('index', {msg: err});
      }else{
        if(req.file === undefined){res.render('index',{
            msg: 'no file selected'
          });
        } else {
          var curwidget = req.body;
          var widgetId = req.body['widgetId'];
          console.log('uploading file');
          console.log('widgetId is :' + widgetId);
          var userId        = req.body.userId;
          var websiteId     = req.body.websiteId;
          var pageId        = req.body.pageId;
          var widgetId      = req.body.widgetId;
          var myFile        = req.file;
          var originalname  = myFile.originalname; // file name on user's computer
          var filename      = myFile.filename;     // new file name in upload folder
          var path          = myFile.path;         // full path of uploaded file
          var destination   = myFile.destination;  // folder where file is saved to
          var size          = myFile.size;
          var mimetype      = myFile.mimetype;
          var myurl = '/assets/uploads/'+filename;
          for(var i in widgets){
            if(widgets[i]._id === widgetId){
              widgets[i].url = myurl;
              widgets[i].size = size;
              //res.redirect("http://localhost:3200/user/website/"+websiteId+"/page/"+pageid+"/widget/"+widgetId);
              return;
            }
          }
          res.render( {
            msg: 'file uploaded'
          });
          res.send("test");
        }
      }
    })
    // var userId        = req.body.userId;
    // var websiteId     = req.body.websiteId;
    // var pageId        = req.body.pageId;
    // var widgetId      = req.body.widgetId;
    // var myFile        = req.file;
    //
    // var callbackUrl = baseUrl+"/profile/"+userId+
    //   "/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId;
    // if (myFile === null) {
    //   res.redirect(callbackUrl);
    //   return;
    // }
    // var originalname  = myFile.originalname; // file name on user's computer
    // var filename      = myFile.filename;     // new file name in upload folder
    // var path          = myFile.path;         // full path of uploaded file
    // var destination   = myFile.destination;  // folder where file is saved to
    // var size          = myFile.size;
    // var mimetype      = myFile.mimetype;

    // for (const i in widgets) {
    //   if (widgets[i]._id === widgetId) {
    //     widgets[i].url = baseUrl+'/assets/uploads/'+filename;
    //     break;
    //   }
    // }
    //
    // res.redirect(callbackUrl);
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

}
