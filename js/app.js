// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Tochal Kabab', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Kabab Veggie',
          description: 'Combination of squash, zucchini, green and red peppers, onions,and tomatoes grilled',
          img: '<img src="img/pr1.jpg" width="100">',
          price: '$66'
        },
        {
          id: '2',
          title: 'Kabab koobideh',
          description: 'Two juicy skewers of lean ground beef, grilled',
            img: '<img src="img/pr2.jpg" width="100">',
          price: '$72'
        },
        {
          id: '3',
          title: 'Kabab Doner (Gyro)',
          description: 'Mixture of lamb and beef with special seasonsings, carved to order',
          img: '<img src="img/pr3.jpg" width="100">',
          price: '$74'
        }, {
            id: '4',
            title: 'Kabab Joojeh',
            description: 'Grilled chunks of boneless, skinless chicken tenderloin',
            img: '<img src="img/pr4.jpg" width="100">',
            price: '$55'
        },
        {
            id: '5',
            title: 'Kabab Barg',
            description: 'Grilled strips of the best quality marinated beef',
            img: '<img src="img/pr5.jpg" width="100">',
            price: '$45'
        },
        {
            id: '6',
            title: 'Kabab Lamb',
            description: 'Grilled strips of the best quality marinated lamb',
            img: '<img src="img/pr6.jpg" width="100">',
            price:'$75'
        }
      ]
    };
  },
  // App root methods
  methods: {
    forgotPS: function () {
      app.dialog.alert('Please Check Your Email!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/home/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});


// Register Screen Demo
$$('#RegN').on('click', function () {
    var username = $$('#view-settings [name="regUs"]').val();
    var password = $$('#view-settings [name="regPs"]').val();
    if (((username == 'Test1')) || ((username == '') && (password == ''))) {
        app.dialog.alert('Error! Please Check Form');
    } else {
        $$("#usReg").val(username);
        $$("#psReg").val(password);
        app.dialog.alert('Register Succeed');
        //router.refreshPage();
        //app.routes.refreshPage();
        
    }


});


// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var us = $$('#my-login-screen [name="username"]').val();
  var pass = $$('#my-login-screen [name="password"]').val();

  var us1 = $$('#usReg').val();
  var ps1 = $$('#psReg').val();
  if (((us == 'Test1') && (pass == '1234')) || ((us == us1) && (pass == ps1))) {
      app.dialog.alert('Welcome Dear ' + us);      
      app.loginScreen.close('#my-login-screen');
      $$("body").addClass("islogin");
  } else {
      app.dialog.alert('Username And Password unCorrect!');
  }
 
});

$$('#view-catalog .paybtn').on('click', function () {
    var pay = $$('.payInf').val();
    if (pay == '') {
        app.dialog.alert('Please Send Your Payment Info!');
    }
    else {
        app.dialog.alert('Your Request Is Under Process.');
        //reload();
    }
});


$$('#my-login-screen .frgPs').on('click', function () {
    app.methods.forgotPS();
});
$$('#my-login-screen .frgPs').on('click', function () {
    app.methods.forgotPS();
});
$$('#my-login-screen .tab-link').on('click', function () {
    app.loginScreen.close('#my-login-screen');
});
$$('#view-settings .tab-link').on('click', function () {
    //app.dialog.alert("Register Succeed");
});

$$('#view-about .send_cnt').on('click', function () {
    var username = $$('#view-about [name="mail"]').val();
    var password = $$('#view-about [name="Message"]').val();
    if ((username !== "") && (password !== "")) {
        app.dialog.alert('Send Successs');
        //reload();
    } else {
        app.dialog.alert('Please Fill All Fild!');
    }
});

$$('.fnlbsk').on('click', function () {
    app.panel.close("right", true);
    var totv = 0;
    $$('.pric').each(function (i) {
        var p = $(this).text().split("$");
        totv += parseInt(p[1]);
        //alert(p[1]);
        // This is your rel value
    });

    if ($$("body").hasClass("islogin")) {
        app.dialog.alert("Your payment is: $" + totv);
        app.tab.show("#view-catalog");
    } else {
        app.loginScreen.open('#my-login-screen');
    }
});

// اسلایدر
//var swiper = app.swiper.get('.swiper-container');

//swiper.slideNext();

//
function add2bsk(w1, w2, w3, w4) {
    //alert(1);
    var vl = parseInt(jQuery(".badge").html());
    //alert(vl);
    jQuery(".badge").html(vl + 1);
    //clickCounter();
    jQuery('.bsket_viw').append("<ul><li>" + w1 + "</li><li>" + w2 + "</li><li>" + w3 + "</li><li class='pric'>" + w4 + "</li></ul><hr />")
}
