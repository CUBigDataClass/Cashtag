  var table = [];
  var team = [
    ["Prad Kikkeri", "<p><b>Major</b>: Computer Science</br></br><b>Email:</b>prki8570@colorado.edu</br></br><b>Bio:</b> Prad, 20, is a Junior in Computer Science, with a focus in Software Engineering. Prad was new to software engineering when he started at the University of Colorado Boulder, but it runs in the family; his father has been a software engineer for 21 years. Prad's interests include aviation, automobiles, entrepreneurship, technology, and gaming. When he's not working at the Apple Store, you'll find him driving around, traveling, gaming, making music, flying, or exploring the great outdoors. He hopes to one day start his own company, and has a goal in life to own and fly his own airplane.</p>", "/images/team/prad.jpg"],
    ["David Bittle", "<p><b>Major</b>: Computer Science</br></br><b>Email:</b> david.bittle@colorado.edu</br></br><b>Bio:</b>David, 28, is a Junior in Computer Science at the University of Colorado .  He served in the United States Army as an Intelligence Analyst from 2007-2011.  David is interested in and plans to have a career in software development. </p>", "/images/team/david.jpg"],
    ["Lincoln Samelson", "<p><b>Major</b>: Computer Science</br></br><b>Email:</b> lincoln.samelson@colorado.edu</br></br><b>Bio:</b> Lincoln, 21, is a Senior in Computer Science at the University of Colorado, Engineering.   He began learning investing from his father Randy early in his childhood and has since founded his own hedge fund Lincoln Capital, LLC.   His principal focus is commodity futures,  currencies, and stocks.  He earned his pilots license at age 16, volunteers for a successful British record label, and enjoys soccer and traveling.  </p>","/images/team/lincoln.jpg"],
    ["Alexander Worth", "<p><b>Major</b>: Economics</br></br><b>Minor</b>: Technology, Arts & Media</br></br><b>Email:</b> alwo1854@colorado.edu</br></br><b>Bio:</b> Alex, 23, is a Spring 2015 graduate of the University of Colorado. His exposure to economic study both nationally and internationally has been a driving factor to his interest in economic analysis on both a micro and macro scale as well as travel. This along with a variety of technical knowledge acquired from his emphasis in technology, arts & media is what gives Alex his unique perspective.</p>","/images/team/alex.jpg"],
    ["Chris Gray", "<p><b>Major</b>: Computer Science</br></br><b>Email:</b> chgr4706@colorado.edu</br></br><b>Bio:</b>Chris, 21, is a Junior in Computer Science at the University of Colorado, Boulder. He has a strong interest in algorithms, mathematics, and finance, and he wants to incorporate these interests in a quantitative finance role. He has played on the Mamabird Ultimate Team for two years and is currently on the CU Freestyle Ski Team.</p>","/images/team/chris.jpg"],
    ["Kirill Novik", "<p><b>Major</b>: Computer Science</br></br><b>Email:</b> kino6052@colorado.edu</br></br><b>Bio:</b>Kirill, 25, is a Senior in Computer Science and MCDB at the University of Colorado, Boulder. He has a strong interest in web development, 3d graphics, and knowledge-based systems. 2015 is the second year he has been a web-designer on the CU iGEM synthetic biology team.</p>", "/images/team/kirill.jpg"]];
    var tableBullish = [];
    var tableBearish = [];

  var camera, scene, renderer;
  var player;

  var auto = true;

  // Floating Element
  var Element = function ( entry, table ) {
    //var entry = parseInt(entry);
    //console.log(entry);
    var index = 0;
    var dom = document.createElement( 'div' );
    dom.style.width = '960px';
    dom.style.height = '400px';

    var image = document.createElement( 'img' ); // this element is needed because it has "load" event, and it seems "div" does not.
    image.style.position = 'absolute';
    image.style.width = '960px';
    image.style.height = '400px';
    image.style.background = 'rgba(0,0,0,0.5)';
    image.style.opacity = 0;
    image.src = "/images/blocker.png";
    dom.appendChild( image );


    var blocker = document.createElement( 'div' );
    blocker.className = 'blocker';
    blocker.style.position = 'absolute';
    blocker.style.width = '960px';
    blocker.style.height = '400px';
    dom.appendChild( blocker );

    var header = document.createElement( 'div' );
      header.className = 'header';
      blocker.appendChild( header );

    var created_at = document.createElement( 'div' );
        created_at.className = 'created_at';
        blocker.appendChild( created_at );

    var sentiment = document.createElement( 'div' );
        sentiment.className = 'sentiment';
        blocker.appendChild( sentiment );

    var text = document.createElement( 'div' );
      text.className = 'text';
      blocker.appendChild( text );

    var object = new THREE.CSS3DObject( dom );
    object.position.x = Math.random() * 8000 - 4000;
    // object.position.y = Math.random() * 2000 - 1000;
    object.position.y = 6000;
    object.position.z = Math.random() * - 10000;

    //

    image.addEventListener( 'load', function ( event ) {

      var sentimentItem = table[entry][3];
      text.textContent = table[entry][0];//parseInt(entry);//table[entry];
      header.textContent = table[entry][1];
      created_at.textContent = table[entry][2];
      if (sentimentItem != null){
        sentiment.textContent = sentimentItem;
        if (sentimentItem === '"Bullish"'){
          blocker.style.backgroundColor = "#c9ffae";
          blocker.style.opacity = "0.8";

        }
        if (sentimentItem === '"Bearish"'){
          blocker.style.backgroundColor = "#ffd7b6";
          blocker.style.opacity = "0.8";
        }
      }
      new TWEEN.Tween( object.position )
        .to( { y: Math.random() * 8000 - 4000 }, 4000 )
        .easing( TWEEN.Easing.Exponential.Out )
        .start();

    }, false );

    dom.addEventListener( 'mouseover', function () {

    }, false );

    dom.addEventListener( 'mouseout', function () {

    }, false );

    dom.addEventListener( 'click', function ( event ) {

      event.stopPropagation();

      auto = false;

      var prev = object.position.z + 300;

      new TWEEN.Tween( camera.position )
        .to( { x: object.position.x, y: object.position.y - 25 }, 1500 )
        .easing( TWEEN.Easing.Exponential.Out )
        .start();

      new TWEEN.Tween( { value: prev } )
        .to( { value: 0  }, 2000 )
        .onUpdate( function () {

          move( this.value - prev );
          prev = this.value;

        } )
        .easing( TWEEN.Easing.Exponential.Out )
        .start();

    }, false );

    return object;

  };

  // Personal Info Element
  // Personal Info Element
    var personalInfoElement = function ( entry ) {
      //var entry = parseInt(entry);
      //console.log(entry);
      var index = 0;
      var dom = document.createElement( 'div' );
      dom.style.width = '960px';
      dom.style.height = '960px';

      var image = document.createElement( 'img' ); // this element is needed because it has "load" event, and it seems "div" does not.
      image.style.position = 'absolute';
      image.style.width = '250px';
      image.style.background = 'rgba(0,0,0,0.5)';
      image.style.right = '40px';
      image.style.top = '40px';
      image.style.zIndex = '10';
      image.src = team[entry][2];
      dom.appendChild( image );


      var blocker = document.createElement( 'div' );
      blocker.className = 'blocker';
      blocker.style.position = 'absolute';
      blocker.style.width = '960px';
      blocker.style.height = '960px';
      dom.appendChild( blocker );

      var header = document.createElement( 'div' );
        header.className = 'header';
        blocker.appendChild( header );

      var text = document.createElement( 'div' );
        text.className = 'text';
        blocker.appendChild( text );
        text.style.width = '600px';
        text.style.opacity = '1';

      var object = new THREE.CSS3DObject( dom );
      object.position.x = Math.random() * 8000 - 4000;
      // object.position.y = Math.random() * 2000 - 1000;
      object.position.y = 6000;
      object.position.z = Math.random() * - 10000;

      //

      image.addEventListener( 'load', function ( event ) {

        //button.style.visibility = 'visible';
        //parseInt(entry);//table[entry];
        header.textContent = team[entry][0];
        text.innerHTML = team[entry][1];

        new TWEEN.Tween( object.position )
          .to( { y: Math.random() * 8000 - 4000 }, 4000 )
          .easing( TWEEN.Easing.Exponential.Out )
          .start();

      }, false );

      dom.addEventListener( 'mouseover', function () {

      }, false );

      dom.addEventListener( 'mouseout', function () {

      }, false );

      dom.addEventListener( 'click', function ( event ) {

        event.stopPropagation();

        auto = false;

        var prev = object.position.z + 400;

        new TWEEN.Tween( camera.position )
          .to( { x: object.position.x, y: object.position.y - 25 }, 1500 )
          .easing( TWEEN.Easing.Exponential.Out )
          .start();

        new TWEEN.Tween( { value: prev } )
          .to( { value: 0  }, 2000 )
          .onUpdate( function () {

            move( this.value - prev );
            prev = this.value;

          } )
          .easing( TWEEN.Easing.Exponential.Out )
          .start();

      }, false );

      return object;

    };

  init();
  animate();

  function init() {

    camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.y = - 25;

    scene = new THREE.Scene();

    renderer = new THREE.CSS3DRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;
    renderer.domElement.style.zIndex = "0";
    document.getElementById( 'containerGL' ).appendChild( renderer.domElement );

    document.body.addEventListener( 'mousewheel', onMouseWheel, false );

    document.body.addEventListener( 'click', function ( event ) {

      auto = true;


      new TWEEN.Tween( camera.position )
          .to( { x: 0, y: - 25 }, 1500 )
          .easing( TWEEN.Easing.Exponential.Out )
          .start();

    }, false );

    window.addEventListener( 'resize', onWindowResize, false );

  }

  // Add Twit Tiles
      function addTiles(num, table){
        for ( var i = 0; i < num; i ++ ) {
          //console.log(parseInt(i));
          scene.add(new Element(i%table.length, table));
        }
      }
  // Add Sentiment Tiles


  // Add Team Tiles
      function addTeamTiles(num){
        for ( var i = 0; i < num; i ++ ) {
          //console.log(parseInt(i));
          scene.add(new personalInfoElement(i%team.length));
        }
      }

      // Remove Tiles
      function removeTiles(){
        for ( var i = 0, l = scene.children.length; i < l; i ++ ) {

          ( function () {

            var object = scene.children[ i ];
            object.textContent = table[i];
            var delay = i * 15;

            new TWEEN.Tween( object.position )
              .to( { y: - 4000 }, 1000 )
              .delay( delay )
              .easing( TWEEN.Easing.Exponential.In )
              .onComplete( function () {

                scene.remove( object );

              } )
              .start();

          } )();
        }
      }

  function move( delta ) {

    for ( var i = 0; i < scene.children.length; i ++ ) {

      var object = scene.children[ i ];

      object.position.z += delta;

      if ( object.position.z > 0 ) {

        object.position.z -= 10000;

      } else if ( object.position.z < - 10000 ) {

        object.position.z += 10000;

      }

    }

  }

  function onMouseWheel( event ) {

    move( event.wheelDelta );

  }

  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

  }

  function animate() {

    requestAnimationFrame( animate );

    TWEEN.update();

    if ( auto === true ) {

      move( 1 );

    }

    renderer.render( scene, camera );
  }
