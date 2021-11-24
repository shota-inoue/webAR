console.log("start");



window.onload = () => {
  console.log("onload");
  const test1 = document.getElementById("test1");
  const m1 = document.createElement("model-viewer");
  const b1 = document.createElement("button");
  const b2 = document.createElement("button");
  const b3 = document.createElement("button");
  b1.setAttribute("id", "bigSize-ar-button");
  b1.setAttribute("slot", "hotspot-demo");
  b1.setAttribute("data-position", "20 90 0");
  b1.setAttribute("data-normal", "0 0 0");
  b1.textContent = "アンテナ（巨大ロボ）";

  //       <button id="bigSize-ar-button" slot="hotspot-demo" data-position="20 90 0" data-normal="0 0 0">アンテナ（巨大ロボ）</button>
  //       <button id="cup-ar-button" slot="hotspot-hand" data-position="50 30 0" data-normal="0 0 0">手（カップ）</button>
  //       <button id="middleSize-ar-button" slot="ar-button" data-position="0 5 0" data-normal="0 0 1">通常サイズAR</button>

  m1.setAttribute("id", "middle");
  m1.setAttribute("src", "./assets/RobotRed10.glb");
  m1.setAttribute("ios-src", "./assets/RobotRed10.usdz");
  m1.setAttribute("alt", "A 3D model");
  m1.setAttribute("auto-rotate", "");
  m1.setAttribute("ar", "");
  m1.setAttribute("ar-scale", "fixed");
  m1.setAttribute("camera-controls", "");


  m1.appendChild(b1);
  test1.appendChild(m1);
  // id="middle"
  //       src="./assets/RobotRed10.glb"
  //       ios-src="./assets/RobotRed10.usdz"
  //       alt="A 3D model"
  //       auto-rotate
  //       camera-controls
  //       ar

  console.log(m1);

  const modelViewerTexture = document.querySelector("model-viewer#middle");

  modelViewerTexture.addEventListener("load", (ev) => {
    let material = modelViewerTexture.model.materials[0];
    const t = Object.assign({}, material.pbrMetallicRoughness['baseColorTexture'].texture.source);
    let applyPBRTexture = (channel, event) => {
      console.log(material.pbrMetallicRoughness[channel].texture.source);
      if (event.target.value == "") {

      }
      else {
        material.pbrMetallicRoughness[channel].texture.source.setURI(event.target.value);
      }
    }
    document.querySelector('#diffuse').addEventListener('input', (event) => {
      applyPBRTexture('baseColorTexture', event);
    });
  });
};
