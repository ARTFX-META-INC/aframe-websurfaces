class e extends THREE.Object3D{constructor(e){super(),this.element=e||document.createElement("div"),this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&null!==e.element.parentNode&&e.element.parentNode.removeChild(e.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}e.prototype.isCSS3DObject=!0;const t=new THREE.Matrix4,s=new THREE.Matrix4;class i{constructor(){const e=this;let i,n,a,o;const r={camera:{fov:0,style:""},objects:new WeakMap},c=document.createElement("div");c.style.overflow="hidden",this.domElement=c;const l=document.createElement("div");function d(e){return Math.abs(e)<1e-10?0:e}function h(e){const t=e.elements;return"matrix3d("+d(t[0])+","+d(-t[1])+","+d(t[2])+","+d(t[3])+","+d(t[4])+","+d(-t[5])+","+d(t[6])+","+d(t[7])+","+d(t[8])+","+d(-t[9])+","+d(t[10])+","+d(t[11])+","+d(t[12])+","+d(-t[13])+","+d(t[14])+","+d(t[15])+")"}function m(e){const t=e.elements;return"translate(-50%,-50%)matrix3d("+d(t[0])+","+d(t[1])+","+d(t[2])+","+d(t[3])+","+d(-t[4])+","+d(-t[5])+","+d(-t[6])+","+d(-t[7])+","+d(t[8])+","+d(t[9])+","+d(t[10])+","+d(t[11])+","+d(t[12])+","+d(t[13])+","+d(t[14])+","+d(t[15])+")"}function p(i,n,a,o){if(i.isCSS3DObject){let o;i.onBeforeRender(e,n,a),i.isCSS3DSprite?(t.copy(a.matrixWorldInverse),t.transpose(),0!==i.rotation2D&&t.multiply(s.makeRotationZ(i.rotation2D)),t.copyPosition(i.matrixWorld),t.scale(i.scale),t.elements[3]=0,t.elements[7]=0,t.elements[11]=0,t.elements[15]=1,o=m(t)):o=m(i.matrixWorld);const c=i.element,d=r.objects.get(i);void 0!==d&&d.style===o||(c.style.transform=o,r.objects.set(i,{style:o})),c.style.display=i.visible?"":"none",c.parentNode!==l&&l.appendChild(c),i.onAfterRender(e,n,a)}for(let e=0,t=i.children.length;e<t;e++)p(i.children[e],n,a)}l.style.transformStyle="preserve-3d",l.style.pointerEvents="none",c.appendChild(l),this.getSize=function(){return{width:i,height:n}},this.render=function(e,t){const s=t.projectionMatrix.elements[5]*o;let i,n;r.camera.fov!==s&&(c.style.perspective=t.isPerspectiveCamera?s+"px":"",r.camera.fov=s),!0===e.autoUpdate&&e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld(),t.isOrthographicCamera&&(i=-(t.right+t.left)/2,n=(t.top+t.bottom)/2);const m=(t.isOrthographicCamera?"scale("+s+")translate("+d(i)+"px,"+d(n)+"px)"+h(t.matrixWorldInverse):"translateZ("+s+"px)"+h(t.matrixWorldInverse))+"translate("+a+"px,"+o+"px)";r.camera.style!==m&&(l.style.transform=m,r.camera.style=m),p(e,e,t)},this.setSize=function(e,t){i=e,n=t,a=i/2,o=n/2,c.style.width=e+"px",c.style.height=t+"px",l.style.width=e+"px",l.style.height=t+"px"}}}class n{constructor(e,t){this.websurfaceEntity=t,this.enabled=!0,this.cssRenderer=new i,this.domElement=this.cssRenderer.domElement,this.cssCamera=new THREE.PerspectiveCamera(e.fov,e.aspect,100*e.near,100*e.far),this.camera=e,this.cssScene=new THREE.Scene,this.update=this.update.bind(this)}setSize(e,t){this.cssRenderer.setSize(e,t),this.cssCamera.aspect=e/t,this.cssCamera.updateProjectionMatrix()}update(){this.camera.getWorldPosition(this.cssCamera.position),this.cssCamera.position.multiplyScalar(100),this.camera.getWorldQuaternion(this.cssCamera.quaternion),this.cssRenderer.render(this.cssScene,this.cssCamera)}}class a extends THREE.Mesh{constructor(t,s,i,n,{elementWidth:a=1280}={}){super(new THREE.PlaneGeometry(i,n),new THREE.MeshBasicMaterial({opacity:0,blending:THREE.NoBlending,side:THREE.DoubleSide,color:new THREE.Color(0,0,0)})),this.context=t,this.domElement=s,this.aspectRatio=n/i,this.elementWidth=a,this.elementHeight=this.elementWidth*this.aspectRatio,this.width=i,this.height=n,this.resizeElement(),this.cssObject=new e(this.domElement),this.cssObject.scale.multiplyScalar(100/(this.elementWidth/this.width)),this.cssObjectInitialScale=this.cssObject.scale,this.size=new THREE.Vector3,this.box=new THREE.Box3,this.addEventListener("added",this.handleAdded),this.addEventListener("removed",this.handleRemoved),this.update=this.update.bind(this)}handleAdded(){this.context.cssScene.add(this.cssObject)}handleRemoved(){this.context.cssScene.remove(this.cssObject)}resizeElement(){this.domElement.style.width=`${this.elementWidth}px`,this.domElement.style.height=`${this.elementHeight}px`}setElement(e){this.domElement.parentNode&&this.domElement.parentNode.removeChild(this.domElement),this.domElement=e,this.cssObject.element=e,this.resizeElement()}update(e){this.cssObject.quaternion.copy(e.quaternion),this.cssObject.position.copy(e.position).multiplyScalar(100),this.box.setFromObject(this).getSize(this.size);const t=e.scale;this.oldScaleFactor!=t&&(this.oldScaleFactor=t,this.cssObject.scale.set(this.cssObjectInitialScale.x,this.cssObjectInitialScale.y,this.cssObjectInitialScale.z),this.cssObject.scale.multiply(t)),this.cssObject.visible=e.visible}dispose(){this.removeEventListener("added",this.handleAdded),this.removeEventListener("removed",this.handleRemoved),this.domElement.remove(),this.geometry.dispose(),this.material.dispose()}}const o=AFRAME.registerComponent("websurface",{schema:{url:{default:"https://aframe.io"},width:{default:1},height:{default:.75},isInteractable:{default:!0},frameSkips:{default:1},autoSceneStyling:{default:!0}},init:function(){const e=this.el,t=this.data;1==t.autoSceneStyling&&(e.sceneEl.style.position="absolute",e.sceneEl.style.zIndex="2"),1==t.isInteractable&&(t.mouseHasLeftScreen=!0,e.setAttribute("geometry",`primitive:plane; width:${t.width}; height:${t.height};`),e.addEventListener("click",function(){0!=t.mouseHasLeftScreen&&(document.exitPointerLock(),e.sceneEl.style.zIndex=-2,t.mouseHasLeftScreen=!1)}),e.addEventListener("mouseleave",function(){t.mouseHasLeftScreen=!0})),e.addEventListener("cam-loaded",function(){const s=document.createElement("iframe");s.setAttribute("src",t.url),s.style.border="none";const i=new n(e.sceneEl.camera,e);i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement);const o=new a(i,s,t.width,t.height);if(e.object3D.add(o),1==t.isInteractable){const t=document.createElement("div");t.style.position="fixed",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.zIndex="-1",i.domElement.appendChild(t),t.addEventListener("click",function(){e.sceneEl.style.zIndex=2})}this.websurface_iframe=s,t.context=i,t.element=o,window.addEventListener("resize",()=>{i.setSize(window.innerWidth,window.innerHeight)})}),t.frames=0,t.isCamLoaded=!1},tick:function(){const e=this.el,t=this.data;if(1==t.isPaused)return;if(0==t.isCamLoaded)return void(e.sceneEl.camera&&(this.el.emit("cam-loaded"),t.isCamLoaded=!0));const s=t.context,i=t.element;t.frames%t.frameSkips==0&&(s&&s.update(),i&&i.update(e.object3D)),t.frames++},pause:function(){this.data.isPaused=!0},play:function(){this.data.isPaused=!1}});export{o as component};
//# sourceMappingURL=aframe-websurfaces.modern.js.map
