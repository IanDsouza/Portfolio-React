import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {
    tasks: 0
  };

  componentDidMount() {
    var scene = document.getElementById("scene");
    scene.width = window.innerWidth;
    scene.height = window.innerHeight;
    var sceneCtx = scene.getContext("2d");

    //Helper function for adding text in laptop
    function typeOut(str, startX, startY, lineHeight, padding) {
      "use strict";
      var cursorX = startX || 0;
      var cursorY = startY || 0;
      var lineHeight = lineHeight || 32;
      padding = padding || 10;
      var i = 0;
      var $_inter = setInterval(function() {
        var rem = str.substr(i);
        var space = rem.indexOf(" ");
        space = space === -1 ? str.length : space;
        var wordwidth = sceneCtx.measureText(rem.substring(0, space)).width;
        var w = sceneCtx.measureText(str.charAt(i)).width;
        if (cursorX + wordwidth >= canvas.width - padding) {
          cursorX = startX;
          cursorY += lineHeight;
        }
        sceneCtx.fillText(str.charAt(i), cursorX, cursorY);
        i++;
        cursorX += w;
        if (i === str.length) {
          clearInterval($_inter);
        }
      }, 75);
    }

    // Adding image of user
    function make_base() {
      sceneCtx.clearRect(0, 0, innerWidth, innerHeight);
      let base_image = new Image();
      base_image.crossOrigin = "anonymous";
      base_image.src =
        "http://rippedcoders.com:8000/Media/acad/201908/10/typing.png";
      base_image.addEventListener("load", function() {
        sceneCtx.drawImage(
          base_image,
          scene.width / 2 - 250,
          scene.height / 2 - 80
        );
      });
      addIntroText();
      createButtons();
      borderOfLaptop();
    }
    make_base();

    function addIntroText() {
      sceneCtx.clearRect(0, 0, innerWidth, innerHeight);

      sceneCtx.strokeStyle = "";
      sceneCtx.fillStyle = "yellow";
      sceneCtx.font = "20px sans-serif";
      var str = "Hello! I'm  IAN DSOUZA, I'm  a Full Stack Developer . . .";
      typeOut(
        str,
        scene.width / 2 - 200,
        scene.height / 2 - 130,
        32,
        scene.width / 2 - 200
      );
    }

    function createButtons() {
      // buttons on  editor
      vscodebutton(scene.width / 2 - 200, scene.height / 2 - 206, 7, "#f44336");
      vscodebutton(scene.width / 2 - 180, scene.height / 2 - 206, 7, "#fbc02d");
      vscodebutton(scene.width / 2 - 160, scene.height / 2 - 206, 7, "#00c853");
    }

    function borderOfLaptop() {
      sceneCtx.fillStyle = "#1B242F";
      sceneCtx.fillRect(
        scene.width / 2 - 210,
        scene.height / 2 - 220,
        420,
        322
      );
      sceneCtx.closePath();

      sceneCtx.fillStyle = "#575a5b";
      sceneCtx.fillRect(scene.width / 2 - 210, scene.height / 2 - 220, 420, 25);
      sceneCtx.closePath();
      sceneCtx.fillStyle = "white";
      roundedRect(
        sceneCtx,
        scene.width / 2 - 225,
        scene.height / 2 - 240,
        450,
        350,
        15
      );
      roundedRect(
        sceneCtx,
        scene.width / 2 - 225,
        scene.height / 2 - 240,
        451,
        351,
        15
      );
      roundedRect(
        sceneCtx,
        scene.width / 2 - 225,
        scene.height / 2 - 240,
        452,
        352,
        15
      );
      roundedRect(
        sceneCtx,
        scene.width / 2 - 225,
        scene.height / 2 - 240,
        453,
        353,
        15
      );
      roundedRect(
        sceneCtx,
        scene.width / 2 - 225,
        scene.height / 2 - 240,
        454,
        354,
        15
      );
      sceneCtx.fillStyle = "white";

      sceneCtx.beginPath();
      sceneCtx.beginPath();
      sceneCtx.arc(
        scene.width / 2,
        scene.height / 2 + 100,
        80,
        0.3,
        0.9 * Math.PI,
        "",
        true
      );
      sceneCtx.fillStyle = "";
      sceneCtx.lineWidth = 2;
      sceneCtx.fill();
      sceneCtx.closePath();
      // creation on laptop end
    }

    // creation on laptop
    function vscodebutton(x, y, radius, color) {
      sceneCtx.beginPath();
      sceneCtx.fillStyle = color;
      sceneCtx.arc(x, y, radius, 0, Math.PI * 2, false);

      sceneCtx.fill();
      sceneCtx.closePath();
    }

    //helper function to create  laptop rectangles
    function roundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y + height - radius);
      ctx.arcTo(x, y + height, x + radius, y + height, radius);
      ctx.lineTo(x + width - radius, y + height);
      ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
      ctx.lineTo(x + width, y + radius);
      ctx.arcTo(x + width, y, x + width - radius, y, radius);
      ctx.lineTo(x + radius, y);
      ctx.arcTo(x, y, x, y + radius, radius);
      ctx.stroke();
    }

    // Animation canvas begins
    var canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var c = canvas.getContext("2d");

    addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      scene.width = window.innerWidth;
      scene.height = window.innerHeight;
      make_base();
    });

    const colorArray = [
      "#2185C5",
      "#7ECEFD",
      "#FFF6EF",
      "#FF7F66",
      "#e16363",
      "#943855",
      "#fce2ae",
      "#b2fcff",
      "#fbc99d"
    ];
    const code = [
      "dev",
      "test",
      "bugs",
      "clients",
      "prod",
      "deadline",
      "lastdate",
      "git clone",
      "cd -r rm",
      "sudo"
    ];
    let mouse = {
      x: 10,
      y: 10
    };

    // addEventListener("mousemove", function(event) {
    //   mouse.x = event.clientX;
    //   mouse.y = event.clientY;
    // });

    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColors(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    //users invisible head
    function semiCircle(x, y, radius, color, radian) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.radius = radius;
      this.radian = radian;
      this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 0, true);
        c.fillStyle = "";
        c.lineWidth = 2;
        c.fill();
      };
      this.update = function() {
        this.draw();
      };
    }

    //Variable Declaration
    function init() {}

    function animate() {
      requestAnimationFrame(animate);
      // c.clearRect(0, 0, innerWidth, innerHeight);
    }
    init();
    animate();
  }

  render() {
    return (
      <div id="container">
        <canvas className="canvas" style={{ zIndex: 5 }} id="canvas1" />
        <canvas className="canvas" id="scene" />
      </div>
    );
  }
}
export default Home;
