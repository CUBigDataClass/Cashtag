  var table = [["Surprisingly, no Twits about This Stock Symbol are Found in StockTwits for This Day.", "Oops... No Tweets for This Day"]];
  var team = [
    ["Prad Kikerri", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada."],
    ["David Bittle", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada."],
    ["Lincoln Samelson", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada."],
    ["Alexander Worth", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada."],
    ["Chris Gray", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada."],
    ["Kirill Novik", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada."]];
  var camera, scene, renderer;
  var player;

  var auto = true;

  // Floating Element
  var Element = function ( entry ) {
    //var entry = parseInt(entry);
    //console.log(entry);
    var index = 0;
    var dom = document.createElement( 'div' );
    dom.style.width = '480px';
    dom.style.height = '200px';

    var image = document.createElement( 'img' ); // this element is needed because it has "load" event, and it seems "div" does not.
    image.style.position = 'absolute';
    image.style.width = '480px';
    image.style.height = '200px';
    image.style.background = 'rgba(0,0,0,0.5)';
    image.style.opacity = 0;
    image.src = "/images/blocker.png";
    dom.appendChild( image );


    var blocker = document.createElement( 'div' );
    blocker.className = 'blocker';
    blocker.style.position = 'absolute';
    blocker.style.width = '480px';
    blocker.style.height = '200px';
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
    object.position.x = Math.random() * 4000 - 2000;
    // object.position.y = Math.random() * 2000 - 1000;
    object.position.y = 3000;
    object.position.z = Math.random() * - 5000;

    //

    image.addEventListener( 'load', function ( event ) {

      //button.style.visibility = 'visible';
      text.textContent = table[entry][0];//parseInt(entry);//table[entry];
      header.textContent = table[entry][1];
      created_at.textContent = table[entry][2];
      sentiment.textContent = table[entry][3];
      new TWEEN.Tween( object.position )
        .to( { y: Math.random() * 2000 - 1000 }, 2000 )
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

  // Personal Info Element
  var personalInfoElement = function ( entry ) {
    //var entry = parseInt(entry);
    //console.log(entry);
    var index = 0;
    var dom = document.createElement( 'div' );
    dom.style.width = '480px';
    dom.style.height = '400px';

    var image = document.createElement( 'img' ); // this element is needed because it has "load" event, and it seems "div" does not.
    image.style.position = 'absolute';
    image.style.width = '480px';
    image.style.height = 'auto';
    image.style.background = 'rgba(0,0,0,0.5)';
    image.style.opacity = 0;
    image.src = "/images/blocker.png";
    dom.appendChild( image );


    var blocker = document.createElement( 'div' );
    blocker.className = 'blocker';
    blocker.style.position = 'absolute';
    blocker.style.width = '480px';
    blocker.style.height = '400px';
    dom.appendChild( blocker );

    var header = document.createElement( 'div' );
      header.className = 'header';
      blocker.appendChild( header );

    var text = document.createElement( 'div' );
      text.className = 'text';
      blocker.appendChild( text );

    var object = new THREE.CSS3DObject( dom );
    object.position.x = Math.random() * 4000 - 2000;
    // object.position.y = Math.random() * 2000 - 1000;
    object.position.y = 3000;
    object.position.z = Math.random() * - 5000;

    //

    image.addEventListener( 'load', function ( event ) {

      //button.style.visibility = 'visible';
      //parseInt(entry);//table[entry];
      header.textContent = team[entry][0];
      text.textContent = team[entry][1];

      new TWEEN.Tween( object.position )
        .to( { y: Math.random() * 2000 - 1000 }, 2000 )
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

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.y = - 25;

    scene = new THREE.Scene();

    renderer = new THREE.CSS3DRenderer();
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
      function addTiles(num){
        for ( var i = 0; i < num; i ++ ) {
          //console.log(parseInt(i));
          scene.add(new Element(i%table.length));
        }
      }

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
              .to( { y: - 2000 }, 1000 )
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

        object.position.z -= 5000;

      } else if ( object.position.z < - 5000 ) {

        object.position.z += 5000;

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
