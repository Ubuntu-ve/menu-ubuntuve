exports.main = function() {
  var data = require("sdk/self").data;
  var tabs = require("sdk/tabs");
  var { Ci } = require('chrome');
  var utils = require('sdk/window/utils');
  var allWindows = utils.windows("navigator:browser", {includePrivate:true});
  for each (var item in allWindows) {
    var doc = item.document;
    var menu = doc.createElement('menu');
    menu.setAttribute('label','Ubuntu-Ve');
    menu.setAttribute('id','menuID');
          //menu.setAttribute('insertAfter','file-menu');
          menu.setAttribute('class', 'menu-iconic');
          menu.setAttribute('image', data.url('favicon.png'));

    var menuPopup = doc.createElement('menupopup');
    //menuPopup.setAttribute('label','My Menu');

    /*Start menu item*/
    var menuItem1 = doc.createElement('menuitem');
    menuItem1.setAttribute('label','WEB');
          //   'openUILinkIn("", "tab")');
    menuItem1.setAttribute('oncommand','openUILinkIn("http://www.ubuntu-ve.org", "tab")');
    menuItem1.setAttribute('id','menuItem1ID');
    menuItem1.setAttribute('class', 'menuitem-iconic');
          //menuItem1.setAttribute('image', data.url('https://dl.dropboxusercontent.com/u/19592144/ubuntu/favicon.ico');
    menuItem1.setAttribute('image', data.url('favicon.png'));
    menuPopup.appendChild(menuItem1);

    var menuItem2 = doc.createElement('menuitem');
    menuItem2.setAttribute('label','Nosotros');
    menuItem2.setAttribute('oncommand','openUILinkIn("http://www.ubuntu.org.ve/nuestracomunidad", "tab")');
    menuItem2.setAttribute('id','menuItem2ID');
    menuItem2.setAttribute('class', 'menuitem-iconic');
    menuItem2.setAttribute('image', data.url('pictogram-community-orange-hex.svg'));
    menuPopup.appendChild(menuItem2);

          var menuItem3 = doc.createElement('menuitem');
    menuItem3.setAttribute('label','Radio OnLine');
    menuItem3.setAttribute('oncommand','openUILinkIn("http://www.ubuntu-ve.org/radio", "tab")');
    menuItem3.setAttribute('id','menuItem3ID');
    menuItem3.setAttribute('class', 'menuitem-iconic');
    menuItem3.setAttribute('image', data.url('pictogram-music_stream-orange-hex.svg'));
    menuPopup.appendChild(menuItem3);

    var menuItem4 = doc.createElement('menuitem');
    menuItem4.setAttribute('label','Planet Ubuntu-ve');
    menuItem4.setAttribute('oncommand','openUILinkIn("http://planet.ubuntu-ve.org/", "tab")');
    menuItem4.setAttribute('id','menuItem4ID');
          menuItem4.setAttribute('class', 'menuitem-iconic');
    menuItem4.setAttribute('image', data.url('pictogram-internet-orange-hex.svg'));
    menuPopup.appendChild(menuItem4);

          var menuItem5 = doc.createElement('menuitem');
    menuItem5.setAttribute('label','Wiki');
    menuItem5.setAttribute('oncommand','openUILinkIn("https://wiki.ubuntu.com/VenezuelaTeam/", "tab")');
    menuItem5.setAttribute('id','menuItem5ID');
    menuItem5.setAttribute('class', 'menuitem-iconic');
    menuItem5.setAttribute('image', data.url('pictogram-engineering-orange-hex.svg'));
    menuPopup.appendChild(menuItem5);

    var menuItem6 = doc.createElement('menuitem');
    menuItem6.setAttribute('label','Launchpad');
    menuItem6.setAttribute('oncommand','openUILinkIn("https://launchpad.net/~ubuntu-ve", "tab")');
    menuItem6.setAttribute('id','menuItem6ID');
    menuItem6.setAttribute('class', 'menuitem-iconic');
    menuItem6.setAttribute('image', data.url('pictogram-launhcpad-orange-hex.png'));
    menuPopup.appendChild(menuItem6);

          var menuItem7 = doc.createElement('menuitem');
    menuItem7.setAttribute('label','Contribuye');
    menuItem7.setAttribute('oncommand','openUILinkIn("http://www.ubuntu.org.ve/contribuye", "tab")');
    menuItem7.setAttribute('id','menuItem7ID');
    menuItem7.setAttribute('class', 'menuitem-iconic');
    menuItem7.setAttribute('image', data.url('pictogram-knowledge-orange-hex.svg'));
    menuPopup.appendChild(menuItem7);


          /*End menu item*/

    /*Start*/
      var subMenu1 = doc.createElement('menu');
      subMenu1.setAttribute('label','Redes Sociales');
      subMenu1.setAttribute('class', 'menu-iconic');
      subMenu1.setAttribute('image', data.url('pictogram-reduce_risk-orange-hex.svg'));

      var subMenuPopup1 = doc.createElement('menupopup');

      var menuItem1_1 = doc.createElement('menuitem');
      menuItem1_1.setAttribute('label','Identi.ca');
      menuItem1_1.setAttribute('oncommand','openUILinkIn("http://identi.ca/ubuntuve", "tab")');
      menuItem1_1.setAttribute('id','menuItem1_1ID');
      menuItem1_1.setAttribute('class', 'menuitem-iconic');
      menuItem1_1.setAttribute('image', data.url('pictogram-identica-orange-hex.png'));
      subMenuPopup1.appendChild(menuItem1_1);

              var menuItem1_2 = doc.createElement('menuitem');
      menuItem1_2.setAttribute('label','Twitter');
      menuItem1_2.setAttribute('oncommand','openUILinkIn("https://twitter.com/#!/ubuntu_ve", "tab")');
      menuItem1_2.setAttribute('id','menuItem1_2ID');
      menuItem1_2.setAttribute('class', 'menuitem-iconic');
      menuItem1_2.setAttribute('image', data.url('twiter.png'));
      subMenuPopup1.appendChild(menuItem1_2);

        var menuItem1_3 = doc.createElement('menuitem');
      menuItem1_3.setAttribute('label','Facebook');
      menuItem1_3.setAttribute('oncommand','openUILinkIn("https://www.facebook.com/pages/Ubuntu-ve/25065117931", "tab")');
      menuItem1_3.setAttribute('id','menuItem1_3ID');
      menuItem1_3.setAttribute('class', 'menuitem-iconic');
      menuItem1_3.setAttribute('image', data.url('pictogram-facebook-orange-hex.png'));
      subMenuPopup1.appendChild(menuItem1_3);

        var menuItem1_4 = doc.createElement('menuitem');
      menuItem1_4.setAttribute('label','Google +');
      menuItem1_4.setAttribute('oncommand','openUILinkIn("https://plus.google.com/118200437352168082579", "tab")');
      menuItem1_4.setAttribute('id','menuItem1_4ID');
      menuItem1_4.setAttribute('class', 'menuitem-iconic');
      menuItem1_4.setAttribute('image', data.url('pictogram-googleplus-orange-hex.png'));
              subMenuPopup1.appendChild(menuItem1_4);


              var subMenu2 = doc.createElement('menu');
      subMenu2.setAttribute('label','Actividades');
      subMenu2.setAttribute('class', 'menu-iconic');
      subMenu2.setAttribute('image', data.url('pictogram-articles-orange-hex.svg'));

      var subMenuPopup2 = doc.createElement('menupopup');

              var menuItem2_1 = doc.createElement('menuitem');
        menuItem2_1.setAttribute('label','Eventos');
      menuItem2_1.setAttribute('oncommand','openUILinkIn("http://loco.ubuntu.com/teams/ubuntu-ve/events/", "tab")');
      menuItem2_1.setAttribute('id','menuItem2_1ID');
      menuItem2_1.setAttribute('class', 'menuitem-iconic');
      menuItem2_1.setAttribute('image', data.url('pictogram-easy_admin-orange-hex.svg'));
      subMenuPopup2.appendChild(menuItem2_1);

              var menuItem2_2 = doc.createElement('menuitem');
          menuItem2_2.setAttribute('label','Reuniones');
      menuItem2_2.setAttribute('oncommand','openUILinkIn("http://loco.ubuntu.com/teams/ubuntu-ve/meetings/", "tab")');
      menuItem2_2.setAttribute('id','menuItem2_2ID');
      menuItem2_2.setAttribute('class', 'menuitem-iconic');
      menuItem2_2.setAttribute('image', data.url('pictogram-discussion-orange-hex.svg'));
      subMenuPopup2.appendChild(menuItem2_2);

              var subMenu3 = doc.createElement('menu');
        subMenu3.setAttribute('label','Soporte');
      subMenu3.setAttribute('class', 'menu-iconic');
      subMenu3.setAttribute('image', data.url('pictogram-help-orange-hex.svg'));

      var subMenuPopup3 = doc.createElement('menupopup');

              var menuItem3_1 = doc.createElement('menuitem');
        menuItem3_1.setAttribute('label','Foro');
      menuItem3_1.setAttribute('oncommand','openUILinkIn("http://www.ubuntu.org.ve/forum", "tab")');
      menuItem3_1.setAttribute('id','menuItem3_1ID');
      menuItem3_1.setAttribute('class', 'menuitem-iconic');
      menuItem3_1.setAttribute('image', data.url('pictogram-forum-orange-hex.svg'));
      subMenuPopup3.appendChild(menuItem3_1);

              var menuItem3_2 = doc.createElement('menuitem');
          menuItem3_2.setAttribute('label','Chat IRC');
      menuItem3_2.setAttribute('oncommand','openUILinkIn("http://www.ubuntu-ve/chat", "tab")');
      menuItem3_2.setAttribute('id','menuItem3_2ID');
      menuItem3_2.setAttribute('class', 'menuitem-iconic');
      menuItem3_2.setAttribute('image', data.url('pictogram-cloud_computing-orange-hex.svg'));
      subMenuPopup3.appendChild(menuItem3_2);

              var menuItem3_3 = doc.createElement('menuitem');
            menuItem3_3.setAttribute('label','Lista de Correos');
      menuItem3_3.setAttribute('oncommand','openUILinkIn("https://lists.ubuntu.com/mailman/listinfo/ubuntu-ve", "tab")');
      menuItem3_3.setAttribute('id','menuItem3_3ID');
      menuItem3_3.setAttribute('class', 'menuitem-iconic');
      menuItem3_3.setAttribute('image', data.url('pictogram-email-orange-hex.svg'));
      subMenuPopup3.appendChild(menuItem3_3);

               var subMenu4 = doc.createElement('menu');
          subMenu4.setAttribute('label','Ubuntu');
      subMenu4.setAttribute('class', 'menu-iconic');
      subMenu4.setAttribute('image', data.url('logoubuntu.png'));

      var subMenuPopup4 = doc.createElement('menupopup');

             var menuItem4_1 = doc.createElement('menuitem');
              menuItem4_1.setAttribute('label','Acerca de');
      menuItem4_1.setAttribute('oncommand','openUILinkIn("http://goo.gl/AitP", "tab")');
      menuItem4_1.setAttribute('id','menuItem4_1ID');
              menuItem4_1.setAttribute('class', 'menuitem-iconic');
      menuItem4_1.setAttribute('image', data.url('pictogram-support-orange-hex.svg'));
      subMenuPopup4.appendChild(menuItem4_1);

              var menuItem4_2 = doc.createElement('menuitem');
          menuItem4_2.setAttribute('label','Filosofía');
      menuItem4_2.setAttribute('oncommand','openUILinkIn("http://goo.gl/iwdd", "tab")');
      menuItem4_2.setAttribute('id','menuItem4_2ID');
              menuItem4_2.setAttribute('class', 'menuitem-iconic');
      menuItem4_2.setAttribute('image', data.url('pictogram-merge_contacts-orange-hex.svg'));
      subMenuPopup4.appendChild(menuItem4_2);

              var menuItem4_3 = doc.createElement('menuitem');
            menuItem4_3.setAttribute('label','Descarga');
      menuItem4_3.setAttribute('oncommand','openUILinkIn("http://www.ubuntu.com/descarga", "tab")');
      menuItem4_3.setAttribute('id','menuItem4_3ID');
              menuItem4_3.setAttribute('class', 'menuitem-iconic');
      menuItem4_3.setAttribute('image', data.url('pictogram-download-orange-hex.svg'));
      subMenuPopup4.appendChild(menuItem4_3);

      subMenu1.appendChild(subMenuPopup1);
      menuPopup.appendChild(subMenu1);

      subMenu2.appendChild(subMenuPopup2);
      menuPopup.appendChild(subMenu2);

      subMenu3.appendChild(subMenuPopup3);
      menuPopup.appendChild(subMenu3);

      subMenu4.appendChild(subMenuPopup4);
      menuPopup.appendChild(subMenu4);



      /*End*/
      menu.appendChild(menuPopup);



    var mainMenuBar = doc.getElementById('main-menubar');
    mainMenuBar.appendChild(menu);
  }




};//exports.main
