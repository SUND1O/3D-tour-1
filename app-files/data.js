var APP_DATA = {
  "scenes": [
    {
      "id": "0-wejcie",
      "name": "Wejście",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2694615400618172,
          "pitch": 0.30844708010323174,
          "rotation": 0,
          "target": "1-okno"
        },
        {
          "yaw": 0.31822004909442825,
          "pitch": 0.02427739314766697,
          "rotation": 0,
          "target": "2-drabina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-okno",
      "name": "Okno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3650341564518058,
          "pitch": 0.2969215153310003,
          "rotation": 0,
          "target": "0-wejcie"
        },
        {
          "yaw": -0.01110432893296398,
          "pitch": -0.12605285996411197,
          "rotation": 0,
          "target": "2-drabina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-drabina",
      "name": "Drabina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6388822832868186,
          "pitch": 0.6127858822965919,
          "rotation": 0,
          "target": "0-wejcie"
        },
        {
          "yaw": -2.2205970525069514,
          "pitch": 1.1296845799366668,
          "rotation": 0,
          "target": "1-okno"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
