function e(e,i){e.prototype=Object.create(i.prototype),e.prototype.constructor=e,t(e,i)}function t(e,i){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,i)}var i=function(t){function i(e){var i;return(i=t.call(this)||this).element=e||document.createElement("div"),i.element.style.position="absolute",i.element.style.pointerEvents="auto",i.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&null!==e.element.parentNode&&e.element.parentNode.removeChild(e.element)})}),i}return e(i,t),i.prototype.copy=function(e,i){return t.prototype.copy.call(this,e,i),this.element=e.element.cloneNode(!0),this},i}(THREE.Object3D);i.prototype.isCSS3DObject=!0,function(t){function i(e){var i;return(i=t.call(this,e)||this).rotation2D=0,i}return e(i,t),i.prototype.copy=function(e,i){return t.prototype.copy.call(this,e,i),this.rotation2D=e.rotation2D,this},i}(i).prototype.isCSS3DSprite=!0;var n=new THREE.Matrix4,s=new THREE.Matrix4,a=function(){var e,t,i,a,r=this,o={camera:{fov:0,style:""},objects:new WeakMap},c=document.createElement("div");c.style.overflow="hidden",this.domElement=c;var l=document.createElement("div");function d(e){return Math.abs(e)<1e-10?0:e}function h(e){var t=e.elements;return"matrix3d("+d(t[0])+","+d(-t[1])+","+d(t[2])+","+d(t[3])+","+d(t[4])+","+d(-t[5])+","+d(t[6])+","+d(t[7])+","+d(t[8])+","+d(-t[9])+","+d(t[10])+","+d(t[11])+","+d(t[12])+","+d(-t[13])+","+d(t[14])+","+d(t[15])+")"}function m(e){var t=e.elements;return"translate(-50%,-50%)matrix3d("+d(t[0])+","+d(t[1])+","+d(t[2])+","+d(t[3])+","+d(-t[4])+","+d(-t[5])+","+d(-t[6])+","+d(-t[7])+","+d(t[8])+","+d(t[9])+","+d(t[10])+","+d(t[11])+","+d(t[12])+","+d(t[13])+","+d(t[14])+","+d(t[15])+")"}function p(e,t,i,a){if(e.isCSS3DObject){var c;e.onBeforeRender(r,t,i),e.isCSS3DSprite?(n.copy(i.matrixWorldInverse),n.transpose(),0!==e.rotation2D&&n.multiply(s.makeRotationZ(e.rotation2D)),n.copyPosition(e.matrixWorld),n.scale(e.scale),n.elements[3]=0,n.elements[7]=0,n.elements[11]=0,n.elements[15]=1,c=m(n)):c=m(e.matrixWorld);var d=e.element,h=o.objects.get(e);void 0!==h&&h.style===c||(d.style.transform=c,o.objects.set(e,{style:c})),d.style.display=e.visible?"":"none",d.parentNode!==l&&l.appendChild(d),e.onAfterRender(r,t,i)}for(var u=0,f=e.children.length;u<f;u++)p(e.children[u],t,i)}l.style.transformStyle="preserve-3d",l.style.pointerEvents="none",c.appendChild(l),this.getSize=function(){return{width:e,height:t}},this.render=function(e,t){var n,s,r=t.projectionMatrix.elements[5]*a;o.camera.fov!==r&&(c.style.perspective=t.isPerspectiveCamera?r+"px":"",o.camera.fov=r),!0===e.autoUpdate&&e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld(),t.isOrthographicCamera&&(n=-(t.right+t.left)/2,s=(t.top+t.bottom)/2);var m=(t.isOrthographicCamera?"scale("+r+")translate("+d(n)+"px,"+d(s)+"px)"+h(t.matrixWorldInverse):"translateZ("+r+"px)"+h(t.matrixWorldInverse))+"translate("+i+"px,"+a+"px)";o.camera.style!==m&&(l.style.transform=m,o.camera.style=m),p(e,e,t)},this.setSize=function(n,s){i=(e=n)/2,a=(t=s)/2,c.style.width=n+"px",c.style.height=s+"px",l.style.width=n+"px",l.style.height=s+"px"}},r=function(){function e(e,t){this.websurfaceEntity=t,this.enabled=!0,this.cssRenderer=new a,this.domElement=this.cssRenderer.domElement,this.cssCamera=new THREE.PerspectiveCamera(e.fov,e.aspect,100*e.near,100*e.far),this.camera=e,this.cssScene=new THREE.Scene,this.update=this.update.bind(this)}var t=e.prototype;return t.setSize=function(e,t){this.cssRenderer.setSize(e,t),this.cssCamera.aspect=e/t,this.cssCamera.updateProjectionMatrix()},t.update=function(){this.camera.getWorldPosition(this.cssCamera.position),this.cssCamera.position.multiplyScalar(100),this.camera.getWorldQuaternion(this.cssCamera.quaternion),this.cssRenderer.render(this.cssScene,this.cssCamera)},e}(),o=function(t){function n(e,n,s,a,r){var o,c=(void 0===r?{}:r).elementWidth,l=void 0===c?1280:c,d=new THREE.PlaneGeometry(s,a),h=new THREE.MeshBasicMaterial({opacity:0,blending:THREE.NoBlending,side:THREE.DoubleSide,color:new THREE.Color(0,0,0)});return(o=t.call(this,d,h)||this).context=e,o.domElement=n,o.aspectRatio=a/s,o.elementWidth=l,o.elementHeight=o.elementWidth*o.aspectRatio,o.width=s,o.height=a,o.resizeElement(),o.cssObject=new i(o.domElement),o.cssObject.scale.multiplyScalar(100/(o.elementWidth/o.width)),o.cssObjectInitialScale=o.cssObject.scale,o.size=new THREE.Vector3,o.box=new THREE.Box3,o.addEventListener("added",o.handleAdded),o.addEventListener("removed",o.handleRemoved),o.update=o.update.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o)),o}e(n,t);var s=n.prototype;return s.handleAdded=function(){this.context.cssScene.add(this.cssObject)},s.handleRemoved=function(){this.context.cssScene.remove(this.cssObject)},s.resizeElement=function(){this.domElement.style.width=this.elementWidth+"px",this.domElement.style.height=this.elementHeight+"px"},s.setElement=function(e){this.domElement.parentNode&&this.domElement.parentNode.removeChild(this.domElement),this.domElement=e,this.cssObject.element=e,this.resizeElement()},s.update=function(e){this.cssObject.quaternion.copy(e.quaternion),this.cssObject.position.copy(e.position).multiplyScalar(100),this.box.setFromObject(this).getSize(this.size);var t=e.scale;this.oldScaleFactor!=t&&(this.oldScaleFactor=t,this.cssObject.scale.set(this.cssObjectInitialScale.x,this.cssObjectInitialScale.y,this.cssObjectInitialScale.z),this.cssObject.scale.multiply(t)),this.cssObject.visible=e.visible},s.dispose=function(){this.removeEventListener("added",this.handleAdded),this.removeEventListener("removed",this.handleRemoved),this.domElement.remove(),this.geometry.dispose(),this.material.dispose()},n}(THREE.Mesh),c=AFRAME.registerComponent("websurface",{schema:{url:{default:"https://aframe.io"},width:{default:1},height:{default:.75},isInteractable:{default:!0},frameSkips:{default:1},autoSceneStyling:{default:!0}},init:function(){var e=this.el,t=this.data;1==t.autoSceneStyling&&(e.sceneEl.style.position="absolute",e.sceneEl.style.zIndex="2"),1==t.isInteractable&&(t.mouseHasLeftScreen=!0,e.setAttribute("geometry","primitive:plane; width:"+t.width+"; height:"+t.height+";"),e.addEventListener("click",function(){0!=t.mouseHasLeftScreen&&(document.exitPointerLock(),e.sceneEl.style.zIndex=-2,t.mouseHasLeftScreen=!1)}),e.addEventListener("mouseleave",function(){t.mouseHasLeftScreen=!0})),e.addEventListener("cam-loaded",function(){var i=document.createElement("iframe");i.setAttribute("src",t.url),i.style.border="none";var n=new r(e.sceneEl.camera,e);n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);var s=new o(n,i,t.width,t.height);if(e.object3D.add(s),1==t.isInteractable){var a=document.createElement("div");a.style.position="fixed",a.style.top="0",a.style.width="100%",a.style.height="100%",a.style.zIndex="-1",n.domElement.appendChild(a),a.addEventListener("click",function(){e.sceneEl.style.zIndex=2})}this.websurface_iframe=i,t.context=n,t.element=s,window.addEventListener("resize",function(){n.setSize(window.innerWidth,window.innerHeight)})}),t.frames=0,t.isCamLoaded=!1},tick:function(){var e=this.el,t=this.data;if(1!=t.isPaused)if(0!=t.isCamLoaded){var i=t.context,n=t.element;t.frames%t.frameSkips==0&&(i&&i.update(),n&&n.update(e.object3D)),t.frames++}else e.sceneEl.camera&&(this.el.emit("cam-loaded"),t.isCamLoaded=!0)},pause:function(){this.data.isPaused=!0},play:function(){this.data.isPaused=!1}});export{c as component};
//# sourceMappingURL=aframe-websurfaces.module.js.map
