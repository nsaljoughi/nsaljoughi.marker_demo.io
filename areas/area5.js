var fiveMarker = {
	"meta": {
		"createdBy": "Area Learning - AR.js 1.7.2",
		"createdAt": "2021-06-16T12:21:10.972Z"
	},
	"trackingBackend": "artoolkit",
	"subMarkersControls": [
		{
			"parameters": {
				"type": "pattern",
				"patternUrl": "markers/celtich.patt"
			},
			"poseMatrix": [
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1
			]
		},
		{
			"parameters": {
				"type": "pattern",
				"patternUrl": "markers/celticu.patt"
			},
			"poseMatrix": [
				0.9978379531595489,
				-0.06570443565203256,
				0.0010044987423310549,
				0,
				0.06568263803901137,
				0.9977329677125834,
				0.01466845546863125,
				0,
				-0.0019660032215140576,
				-0.01457078318070622,
				0.9998914542075527,
				0,
				1.6011113227804143,
				-0.08984249835198929,
				-0.02498248199149855,
				1
			]
		},
		{
			"parameters": {
				"type": "pattern",
				"patternUrl": "markers/likeaboss.patt"
			},
			"poseMatrix": [
				0.9964379837604822,
				-0.08390755950325945,
				-0.0082974305640037,
				0,
				0.08414557192193513,
				0.9958570148869988,
				0.03449407844454226,
				0,
				0.005368732834232996,
				-0.0350694777073803,
				0.9993700913446304,
				0,
				-1.5885323973292433,
				0.004471783365327609,
				-0.015570404970523586,
				1
			]
		}
	]
}

	localStorage.setItem("fiveMarkerFile", JSON.stringify(fiveMarker));
