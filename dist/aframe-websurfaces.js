function e(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}var n=function(t){function n(e){var n;return(n=t.call(this)||this).element=e||document.createElement("div"),n.element.style.position="absolute",n.element.style.pointerEvents="auto",n.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&null!==e.element.parentNode&&e.element.parentNode.removeChild(e.element)})}),n}return e(n,t),n.prototype.copy=function(e,n){return t.prototype.copy.call(this,e,n),this.element=e.element.cloneNode(!0),this},n}(THREE.Object3D);n.prototype.isCSS3DObject=!0,function(t){function n(e){var n;return(n=t.call(this,e)||this).rotation2D=0,n}return e(n,t),n.prototype.copy=function(e,n){return t.prototype.copy.call(this,e,n),this.rotation2D=e.rotation2D,this},n}(n).prototype.isCSS3DSprite=!0;var i=new THREE.Matrix4,s=new THREE.Matrix4,a=function(){var e,t,n,a,o=this,r={camera:{fov:0,style:""},objects:new WeakMap},c=document.createElement("div");c.style.overflow="hidden",this.domElement=c;var l=document.createElement("div");function d(e){return Math.abs(e)<1e-10?0:e}function m(e){var t=e.elements;return"matrix3d("+d(t[0])+","+d(-t[1])+","+d(t[2])+","+d(t[3])+","+d(t[4])+","+d(-t[5])+","+d(t[6])+","+d(t[7])+","+d(t[8])+","+d(-t[9])+","+d(t[10])+","+d(t[11])+","+d(t[12])+","+d(-t[13])+","+d(t[14])+","+d(t[15])+")"}function h(e){var t=e.elements;return"translate(-50%,-50%)matrix3d("+d(t[0])+","+d(t[1])+","+d(t[2])+","+d(t[3])+","+d(-t[4])+","+d(-t[5])+","+d(-t[6])+","+d(-t[7])+","+d(t[8])+","+d(t[9])+","+d(t[10])+","+d(t[11])+","+d(t[12])+","+d(t[13])+","+d(t[14])+","+d(t[15])+")"}function u(e,t,n,a){if(e.isCSS3DObject){var c;e.onBeforeRender(o,t,n),e.isCSS3DSprite?(i.copy(n.matrixWorldInverse),i.transpose(),0!==e.rotation2D&&i.multiply(s.makeRotationZ(e.rotation2D)),i.copyPosition(e.matrixWorld),i.scale(e.scale),i.elements[3]=0,i.elements[7]=0,i.elements[11]=0,i.elements[15]=1,c=h(i)):c=h(e.matrixWorld);var d=e.element,m=r.objects.get(e);void 0!==m&&m.style===c||(d.style.transform=c,r.objects.set(e,{style:c})),d.style.display=e.visible?"":"none",d.parentNode!==l&&l.appendChild(d),e.onAfterRender(o,t,n)}for(var p=0,f=e.children.length;p<f;p++)u(e.children[p],t,n)}l.style.transformStyle="preserve-3d",l.style.pointerEvents="none",c.appendChild(l),this.getSize=function(){return{width:e,height:t}},this.render=function(e,t){var i,s,o=t.projectionMatrix.elements[5]*a;r.camera.fov!==o&&(c.style.perspective=t.isPerspectiveCamera?o+"px":"",r.camera.fov=o),!0===e.autoUpdate&&e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld(),t.isOrthographicCamera&&(i=-(t.right+t.left)/2,s=(t.top+t.bottom)/2);var h=(t.isOrthographicCamera?"scale("+o+")translate("+d(i)+"px,"+d(s)+"px)"+m(t.matrixWorldInverse):"translateZ("+o+"px)"+m(t.matrixWorldInverse))+"translate("+n+"px,"+a+"px)";r.camera.style!==h&&(l.style.transform=h,r.camera.style=h),u(e,e,t)},this.setSize=function(i,s){n=(e=i)/2,a=(t=s)/2,c.style.width=i+"px",c.style.height=s+"px",l.style.width=i+"px",l.style.height=s+"px"}},o=function(){function e(e,t){this.websurfaceEntity=t,this.enabled=!0,this.cssRenderer=new a,this.domElement=this.cssRenderer.domElement,this.domElement.style.position="fixed",this.domElement.style.zIndex="-2",this.cssCamera=new THREE.PerspectiveCamera(e.fov,e.aspect,100*e.near,100*e.far),this.camera=e,this.cssScene=new THREE.Scene,this.update=this.update.bind(this)}var t=e.prototype;return t.setSize=function(e,t){this.cssRenderer.setSize(e,t),this.cssCamera.aspect=e/t,this.cssCamera.updateProjectionMatrix()},t.update=function(){this.camera.getWorldPosition(this.cssCamera.position),this.cssCamera.position.multiplyScalar(100),this.camera.getWorldQuaternion(this.cssCamera.quaternion),this.cssRenderer.render(this.cssScene,this.cssCamera)},e}(),r=function(t){function i(e,i,s,a,o){var r,c=(void 0===o?{}:o).elementWidth,l=void 0===c?1280:c,d=new THREE.PlaneGeometry(s,a),m=new THREE.MeshBasicMaterial({opacity:0,blending:THREE.NoBlending,side:THREE.DoubleSide,color:new THREE.Color(0,0,0)});return(r=t.call(this,d,m)||this).context=e,r.domElement=i,r.aspectRatio=a/s,r.elementWidth=l,r.elementHeight=r.elementWidth*r.aspectRatio,r.width=s,r.height=a,r.resizeElement(),r.cssObject=new n(r.domElement),r.cssObject.scale.multiplyScalar(100/(r.elementWidth/r.width)),r.cssObjectInitialScale=r.cssObject.scale,r.size=new THREE.Vector3,r.box=new THREE.Box3,r.addEventListener("added",r.handleAdded),r.addEventListener("removed",r.handleRemoved),r.update=r.update.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}e(i,t);var s=i.prototype;return s.handleAdded=function(){this.context.cssScene.add(this.cssObject)},s.handleRemoved=function(){this.context.cssScene.remove(this.cssObject)},s.resizeElement=function(){this.domElement.style.width=this.elementWidth+"px",this.domElement.style.height=this.elementHeight+"px"},s.setElement=function(e){this.domElement.parentNode&&this.domElement.parentNode.removeChild(this.domElement),this.domElement=e,this.cssObject.element=e,this.resizeElement()},s.update=function(e){this.cssObject.quaternion.copy(e.quaternion),this.cssObject.position.copy(e.position).multiplyScalar(100),this.box.setFromObject(this).getSize(this.size);var t=e.scale;this.oldScaleFactor!=t&&(this.oldScaleFactor=t,this.cssObject.scale.set(this.cssObjectInitialScale.x,this.cssObjectInitialScale.y,this.cssObjectInitialScale.z),this.cssObject.scale.multiply(t)),this.cssObject.visible=e.visible},s.dispose=function(){this.removeEventListener("added",this.handleAdded),this.removeEventListener("removed",this.handleRemoved),this.domElement.remove(),this.geometry.dispose(),this.material.dispose()},i}(THREE.Mesh),c=AFRAME.registerComponent("websurface",{schema:{url:{default:"https://aframe.io"},width:{default:1},height:{default:.75},isInteractable:{default:!0},frameSkips:{default:1},autoSceneStyling:{default:!0},frameid:{default:"websurface"}},init:function(){var e=this.el,t=this.data;1==t.autoSceneStyling&&(e.sceneEl.style.position="absolute",e.sceneEl.style.zIndex="1"),1==t.isInteractable&&(t.mouseHasLeftScreen=!0,e.setAttribute("geometry","primitive:plane; width:"+t.width+"; height:"+t.height+";"),e.addEventListener("click",function(){0!=t.mouseHasLeftScreen&&(document.exitPointerLock(),e.sceneEl.style.zIndex="-1",t.mouseHasLeftScreen=!1)}),e.addEventListener("mouseenter",function(){t.context.domElement.style.zIndex="0"}),e.addEventListener("mouseleave",function(){t.context.domElement.style.zIndex="-2",t.mouseHasLeftScreen=!0})),e.addEventListener("cam-loaded",function(){var n=document.createElement("iframe");n.setAttribute("src",t.url),n.style.border="none",n.id=t.frameid;var i=new o(e.sceneEl.camera,e);i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement);var s=new r(i,n,t.width,t.height);if(e.object3D.add(s),1==t.isInteractable){var a=document.createElement("div");a.style.position="fixed",a.style.top="0",a.style.width="100%",a.style.height="100%",a.style.zIndex="-1",i.domElement.appendChild(a),a.addEventListener("click",function(){e.sceneEl.style.zIndex=1})}this.websurface_iframe=n,this.css3d_context=i,t.context=i,t.element=s,window.addEventListener("resize",function(){i.setSize(window.innerWidth,window.innerHeight)})}),t.frames=0,t.isCamLoaded=!1},tick:function(){var e=this.el,t=this.data;if(1!=t.isPaused)if(0!=t.isCamLoaded){var n=t.context,i=t.element;t.frames%t.frameSkips==0&&(n&&n.update(),i&&i.update(e.object3D)),t.frames++}else e.sceneEl.camera&&(this.el.emit("cam-loaded"),t.isCamLoaded=!0)},pause:function(){this.data.isPaused=!0},play:function(){this.data.isPaused=!1}});exports.component=c;
//# sourceMappingURL=aframe-websurfaces.js.map
