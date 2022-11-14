/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\nconst IDLE_MOTION_DURATION = 60000;\n\nconst contents = {\n    moc: './assets/Yaho/Yaho.moc3',\n    texture: './assets/Yaho/Yaho.4096/texture_00.png',\n    idle_motions: [\n        { name: \"normal_idle\", file: './assets/Yaho/Yaho.cdi3.json' },\n    ],/*\n    onetime_motions: [\n        { name: \"angry\", file: './assets/Tsumugi/angry.motion3.json' },\n        { name: \"comical1\", file: './assets/Tsumugi/comical1.motion3.json' },\n        { name: \"comical2\", file: './assets/Tsumugi/comical2.motion3.json' },\n        { name: \"happy\", file: './assets/Tsumugi/happy.motion3.json' },\n        { name: \"sad\", file: './assets/Tsumugi/sad.motion3.json' },\n        { name: \"shy\", file: './assets/Tsumugi/shy.motion3.json' },\n        { name: \"surprise\", file: './assets/Tsumugi/surprise.motion3.json' },\n    ],*/\n};\n\nvar vue_options = {\n    el: \"#top\",\n    data: {\n        progress_title: '',\n\n    },\n    computed: {\n    },\n    methods: {\n        live2d_clicked: function(){\n            var index = Math.floor(Math.random() * contents.onetime_motions.length);\n            live2d_set_onetime_motion(contents.onetime_motions[index].name);\n        },\n    },\n    created: function(){\n    },\n    mounted: async function(){\n        try{\n            await live2d_init(\"#live2d\", contents, 'normal_idle');\n\n            setInterval(()=>{\n                var index = Math.floor(Math.random() * contents.idle_motions.length);\n                live2d_set_idle_motion(contents.idle_motions[index].name);\n            }, IDLE_MOTION_DURATION);\n        }catch(error){\n            console.log(error);\n            alert(error);\n        }\n    }\n};\nvar vue = new Vue( vue_options );\n\nvar live2d_model = null;\nvar live2d_loader = null;\nvar live2d_motion = null;\nvar live2d_motion_onetime = false;\n\nfunction live2d_set_onetime_motion(name){\n    if( live2d_model == null )\n        return;\n\n    var motion = live2d_model.animator.getLayer(\"base\");\n    motion.stop();\n    live2d_motion_onetime = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(live2d_loader.resources[name].data);\n    motion.play(live2d_motion_onetime);\n    live2d_motion_onetime = true;\n}\n\nfunction live2d_set_idle_motion(name){\n    if( live2d_model == null )\n        return;\n\n    var motion = live2d_model.animator.getLayer(\"base\");\n    motion.stop();\n    if( name ){\n        live2d_motion_onetime = false;\n        live2d_motion = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(live2d_loader.resources[name].data);\n        motion.play(live2d_motion);\n    }else{\n        live2d_motion = null;\n    }\n}\n\nfunction live2d_init(target, contents, first_motion){\n    var loader = new PIXI.loaders.Loader();\n    loader\n        .add('moc', contents.moc, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER })\n        .add('texture', contents.texture);\n    for( var i = 0 ; i < contents.idle_motions.length ; i++ )\n        loader.add(contents.idle_motions[i].name, contents.idle_motions[i].file, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });\n    for( var i = 0 ; i < contents.onetime_motions.length ; i++ )\n        loader.add(contents.onetime_motions[i].name, contents.onetime_motions[i].file, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });\n\n    return new Promise((resolve, reject) =>{\n        loader.load((loader, resources) => {\n            try{\n                var moc = Live2DCubismCore.Moc.fromArrayBuffer(resources['moc'].data);\n                var model = new LIVE2DCUBISMPIXI.ModelBuilder()\n                    .setMoc(moc)\n                    .setTimeScale(1)\n                    .addTexture(0, resources['texture'].texture)\n                    .addAnimatorLayer(\"base\", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.OVERRIDE, 1)\n                    .build();\n\n                var app = new PIXI.Application({ transparent: true, /* backgroundColor: 0x1099bb */ });\n\n//                $(target).append('<hr>');\n                $(target).append(app.view);\n//                $(target).append('<hr>');\n                app.stage.addChild(model);\n                app.stage.addChild(model.masks);\n\n                var motion_name = first_motion ? first_motion : contents.idle_motions[Math.floor(Math.random() * contents.idle_motions.length)].name;\n                live2d_motion = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(resources[motion_name].data);\n                model.animator.getLayer(\"base\").play(live2d_motion);\n\n                app.ticker.add(function (deltaTime) {\n                    if(live2d_motion_onetime){\n                        var motion = model.animator.getLayer(\"base\");\n                        if( motion.currentTime >= motion.currentAnimation.duration){\n                            motion.stop();\n                            live2d_motion_onetime = false;\n                            if( live2d_motion )\n                                motion.play(live2d_motion);\n                        }\n                    }\n                    model.update(deltaTime);\n                    model.masks.update(app.renderer);\n                });\n\n                var onResize = (event) => {\n                    var size = rect_resize( $(target).width(), $(target).height(), model.canvasinfo.CanvasWidth, model.canvasinfo.CanvasHeight, true);\n                    app.renderer.resize(size.valid_width, size.valid_height);\n                    model.position = new PIXI.Point(size.valid_width * 0.5, size.valid_height * 0.5);\n                    model.scale = new PIXI.Point(size.valid_width * 1, size.valid_width * 1);\n                    model.masks.resize(size.valid_width, size.valid_height);\n                };\n                onResize();\n                window.onresize = onResize;\n\n                live2d_model = model;\n                live2d_loader = loader;\n\n                return resolve();\n            }catch(error){\n                return reject(error);\n            }\n        });\n    });\n}\n\nfunction rect_resize( disp_width, disp_height, image_width, image_height, height_expand ){\n    var scale = disp_width / image_width;\n    var adjust = \"width\";\n    if( !height_expand ){\n        var height_scale = disp_height / image_height;\n        if( height_scale < scale ){\n            scale = height_scale;\n            adjust = \"height\";\n        }\n    }else{\n        disp_height = Math.floor(image_height * scale);\n    }\n\n    var valid_width = image_width * scale;\n    var valid_height = image_height * scale;\n\n    return {\n        valid_width: Math.floor(valid_width),\n        valid_height: Math.floor(valid_height),\n        disp_width: disp_width,\n        disp_height: disp_height,\n        image_width: image_width,\n        image_height: image_height,\n        scale: scale,\n        adjust: adjust\n    };\n}\n\n//# sourceURL=webpack://portfolio_site/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;