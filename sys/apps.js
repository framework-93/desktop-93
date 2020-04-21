system42("apps", function(le) {
  "use strict";
  le._apps = {
    explorer: {
      categories: "Application",
      name: "Desktop 93",
      icon: "c/sys/skins/w93/devices/computer.png",
      exec: function() {
        var data = {
          height: 300,
          width: 600,
          automaximize: false,
          url: "explorer/"
        };
        $window.call(this, data);
      }
    },
    spreadsheet: {
      categories: "Application",
      name: "Spreadsheet",
      icon: "spreadsheet/icon/spreadsheet.png",
      exec: function() {
        var data = {
          height: 200,
          width: 600,
          url: "spreadsheet/"
        };
        $window.call(this, data);
      }
    }
  };
});
