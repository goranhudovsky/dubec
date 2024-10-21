var APP_DATA = {
  "scenes": [
    {
      "id": "0-new-panorama1",
      "name": "New Panorama1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": -2.263654732540166,
        "pitch": 0.004118673086479063,
        "fov": 1.490377985184405
      },
      "linkHotspots": [
        {
          "yaw": -3.06887879597617,
          "pitch": -0.007811952442558834,
          "rotation": 1.5707963267948966,
          "target": "1-new-panorama2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-new-panorama2",
      "name": "New Panorama2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 2.5291612396195102,
        "pitch": 0.007261300560573503,
        "fov": 1.490377985184405
      },
      "linkHotspots": [
        {
          "yaw": -1.4080115611941881,
          "pitch": -0.07396876405572428,
          "rotation": 4.71238898038469,
          "target": "0-new-panorama1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
