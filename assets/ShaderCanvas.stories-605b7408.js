import{c as f,u as h,j as a,C as y,d as o,e as g,s as b}from"./react-three-fiber.esm-af5de61a.js";import{s as v}from"./shaderMaterial-6fac7b2a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";const s=({shaderMaterial:t,renderCallback:e,...l})=>{const{viewport:i}=f();return h(e),a("mesh",{material:t,children:a("planeGeometry",{attach:"geometry",args:[i.width,i.height],...l})})};try{s.displayName="ShaderPlane",s.__docgenInfo={description:"",displayName:"ShaderPlane",props:{shaderMaterial:{defaultValue:null,description:"",name:"shaderMaterial",required:!0,type:{name:"ShaderMaterial"}},renderCallback:{defaultValue:null,description:"",name:"renderCallback",required:!0,type:{name:"RenderCallback"}},id:{defaultValue:null,description:"Unique number for this {@link THREE.BufferGeometryBufferGeometry} instance.\n@remarks Expects a `Integer`",name:"id",required:!1,type:{name:"number"}},uuid:{defaultValue:null,description:`{@link http://en.wikipedia.org/wiki/Universally_unique_identifier UUID} of this object instance.
@remarks This gets automatically assigned and shouldn't be edited.`,name:"uuid",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Optional name for this {@link THREE.BufferGeometryBufferGeometry} instance.\n@defaultValue `''`",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"A Read-only _string_ to check if `this` object type.\n@remarks Sub-classes will update this value.\n@defaultValue `PlaneGeometry`",name:"type",required:!1,type:{name:"string"}},index:{defaultValue:null,description:`Allows for vertices to be re-used across multiple triangles; this is called using "indexed triangles".
Each triangle is associated with the indices of three vertices. This attribute therefore stores the index of each vertex for each triangular face.
If this attribute is not set, the {@link THREE.WebGLRendererrenderer}  assumes that each three contiguous positions represent a single triangle.
@defaultValue \`null\``,name:"index",required:!1,type:{name:"BufferAttribute | null"}},attributes:{defaultValue:null,description:"This hashmap has as id the name of the attribute to be set and as value the {@link THREE.BufferAttributebuffer} to set it to. Rather than accessing this property directly,\nuse {@link setAttribute.setAttribute} and {@link getAttribute.getAttribute} to access attributes of this geometry.\n@defaultValue `{}`",name:"attributes",required:!1,type:{name:"NormalBufferAttributes"}},morphAttributes:{defaultValue:null,description:`Hashmap of {@link THREE.BufferAttributeBufferAttributes} holding details of the geometry's morph targets.
@remarks Once the geometry has been rendered, the morph attribute data cannot be changed.
You will have to call {@link dispose .dispose}(), and create a new instance of {@link THREE.BufferGeometry BufferGeometry}.
@defaultValue \`{}\``,name:"morphAttributes",required:!1,type:{name:"{ [name: string]: (BufferAttribute | InterleavedBufferAttribute)[]; }"}},morphTargetsRelative:{defaultValue:null,description:"Used to control the morph target behavior; when set to true, the morph target data is treated as relative offsets, rather than as absolute positions/normals.\n@defaultValue `false`",name:"morphTargetsRelative",required:!1,type:{name:"boolean"}},groups:{defaultValue:null,description:`Split the geometry into groups, each of which will be rendered in a separate WebGL draw call. This allows an array of materials to be used with the geometry.
@remarks Every vertex and index must belong to exactly one group — groups must not share vertices or indices, and must not leave vertices or indices unused.
@remarks Use {@link addGroup .addGroup} to add groups, rather than modifying this array directly.
@defaultValue \`[]\``,name:"groups",required:!1,type:{name:"{ start: number; count: number; materialIndex?: number; }[]"}},boundingBox:{defaultValue:null,description:"Bounding box for the {@link THREE.BufferGeometryBufferGeometry}, which can be calculated with {@link computeBoundingBox.computeBoundingBox()}.\n@remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.\n@defaultValue `null`",name:"boundingBox",required:!1,type:{name:"Box3 | null"}},boundingSphere:{defaultValue:null,description:"Bounding sphere for the {@link THREE.BufferGeometryBufferGeometry}, which can be calculated with {@link computeBoundingSphere.computeBoundingSphere()}.\n@remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.\n@defaultValue `null`",name:"boundingSphere",required:!1,type:{name:"Sphere | null"}},drawRange:{defaultValue:null,description:`Determines the part of the geometry to render. This should not be set directly, instead use {@link setDrawRange.setDrawRange(...)}.
@remarks For non-indexed {@link THREE.BufferGeometry BufferGeometry}, count is the number of vertices to render.
@remarks For indexed {@link THREE.BufferGeometry BufferGeometry}, count is the number of indices to render.
@defaultValue \`{ start: 0, count: Infinity }\``,name:"drawRange",required:!1,type:{name:"{ start: number; count: number; }"}},userData:{defaultValue:null,description:"An object that can be used to store custom data about the BufferGeometry. It should not hold references to functions as these will not be cloned.\n@defaultValue `{}`",name:"userData",required:!1,type:{name:"{ [key: string]: any; }"}},isBufferGeometry:{defaultValue:null,description:"Read-only flag to check if a given object is of type {@link BufferGeometry}.\n@remarks This is a _constant_ value\n@defaultValue `true`",name:"isBufferGeometry",required:!1,type:{name:"true"}},getIndex:{defaultValue:null,description:"Return the {@link index.index} buffer.",name:"getIndex",required:!1,type:{name:"(() => BufferAttribute | null)"}},setIndex:{defaultValue:null,description:`Set the {@link THREE.BufferGeometry.index.index} buffer.
@param index`,name:"setIndex",required:!1,type:{name:"((index: BufferAttribute | number[] | null) => PlaneGeometry)"}},setAttribute:{defaultValue:null,description:`Sets an {@link attributesattribute} to this geometry with the specified name.
@remarks Use this rather than the attributes property, because an internal hashmap of {@link attributes .attributes} is maintained to speed up iterating over attributes.
@param name
@param attribute`,name:"setAttribute",required:!1,type:{name:"(<K extends string>(name: K, attribute: BufferAttribute | InterleavedBufferAttribute) => PlaneGeometry)"}},getAttribute:{defaultValue:null,description:`Returns the {@link attributesattribute} with the specified name.
@param name`,name:"getAttribute",required:!1,type:{name:"(<K extends string>(name: K) => BufferAttribute | InterleavedBufferAttribute)"}},deleteAttribute:{defaultValue:null,description:`Deletes the  {@link attributesattribute} with the specified name.
@param name`,name:"deleteAttribute",required:!1,type:{name:"((name: string) => PlaneGeometry)"}},hasAttribute:{defaultValue:null,description:`Returns true if the {@link attributesattribute} with the specified name exists.
@param name`,name:"hasAttribute",required:!1,type:{name:"((name: string) => boolean)"}},addGroup:{defaultValue:null,description:`Adds a group to this geometry
@see the {@link BufferGeometry.groups groups} property for details.
@param start
@param count
@param materialIndex`,name:"addGroup",required:!1,type:{name:"((start: number, count: number, materialIndex?: number) => void)"}},clearGroups:{defaultValue:null,description:"Clears all groups.",name:"clearGroups",required:!1,type:{name:"(() => void)"}},setDrawRange:{defaultValue:null,description:`Set the {@link drawRange.drawRange} property
@remarks For non-indexed BufferGeometry, count is the number of vertices to render
@remarks For indexed BufferGeometry, count is the number of indices to render.
@param start
@param count is the number of vertices or indices to render. Expects a \`Integer\``,name:"setDrawRange",required:!1,type:{name:"((start: number, count: number) => void)"}},applyMatrix4:{defaultValue:null,description:`Applies the matrix transform to the geometry.
@param matrix`,name:"applyMatrix4",required:!1,type:{name:"((matrix: Matrix4) => PlaneGeometry)"}},applyQuaternion:{defaultValue:null,description:`Applies the rotation represented by the quaternion to the geometry.
@param quaternion`,name:"applyQuaternion",required:!1,type:{name:"((quaternion: Quaternion) => PlaneGeometry)"}},rotateX:{defaultValue:null,description:"Rotate the geometry about the X axis. This is typically done as a one time operation, and not during a loop.\n@remarks Use {@link THREE.Object3D.rotation Object3D.rotation} for typical real-time mesh rotation.\n@param angle radians. Expects a `Float`",name:"rotateX",required:!1,type:{name:"((angle: number) => PlaneGeometry)"}},rotateY:{defaultValue:null,description:`Rotate the geometry about the Y axis.
@remarks This is typically done as a one time operation, and not during a loop.
@remarks Use {@link THREE.Object3D.rotation Object3D.rotation} for typical real-time mesh rotation.
@param angle radians. Expects a \`Float\``,name:"rotateY",required:!1,type:{name:"((angle: number) => PlaneGeometry)"}},rotateZ:{defaultValue:null,description:`Rotate the geometry about the Z axis.
@remarks This is typically done as a one time operation, and not during a loop.
@remarks Use {@link THREE.Object3D.rotation Object3D.rotation} for typical real-time mesh rotation.
@param angle radians. Expects a \`Float\``,name:"rotateZ",required:!1,type:{name:"((angle: number) => PlaneGeometry)"}},translate:{defaultValue:null,description:"Translate the geometry.\n@remarks This is typically done as a one time operation, and not during a loop.\n@remarks Use {@link THREE.Object3D.position Object3D.position} for typical real-time mesh rotation.\n@param x Expects a `Float`\n@param y Expects a `Float`\n@param z Expects a `Float`",name:"translate",required:!1,type:{name:"((x: number, y: number, z: number) => PlaneGeometry)"}},scale:{defaultValue:null,description:"Scale the geometry data.\n@remarks This is typically done as a one time operation, and not during a loop.\n@remarks Use {@link THREE.Object3D.scale Object3D.scale} for typical real-time mesh scaling.\n@param x Expects a `Float`\n@param y Expects a `Float`\n@param z Expects a `Float`",name:"scale",required:!1,type:{name:"((x: number, y: number, z: number) => PlaneGeometry)"}},lookAt:{defaultValue:null,description:`Rotates the geometry to face a point in space.
@remarks This is typically done as a one time operation, and not during a loop.
@remarks Use {@link THREE.Object3D.lookAt Object3D.lookAt} for typical real-time mesh usage.
@param vector A world vector to look at.`,name:"lookAt",required:!1,type:{name:"((vector: Vector3) => PlaneGeometry)"}},center:{defaultValue:null,description:"Center the geometry based on the bounding box.",name:"center",required:!1,type:{name:"(() => PlaneGeometry)"}},setFromPoints:{defaultValue:null,description:`Sets the attributes for this BufferGeometry from an array of points.
@param points`,name:"setFromPoints",required:!1,type:{name:"((points: Vector3[] | Vector2[]) => PlaneGeometry)"}},computeBoundingBox:{defaultValue:null,description:"Computes bounding box of the geometry, updating {@link boundingBox.boundingBox} attribute.\n@remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.",name:"computeBoundingBox",required:!1,type:{name:"(() => void)"}},computeBoundingSphere:{defaultValue:null,description:"Computes bounding sphere of the geometry, updating {@link boundingSphere.boundingSphere} attribute.\n@remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.",name:"computeBoundingSphere",required:!1,type:{name:"(() => void)"}},computeTangents:{defaultValue:null,description:`Calculates and adds a tangent attribute to this geometry.
The computation is only supported for indexed geometries and if position, normal, and uv attributes are defined
@remarks When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
{@link BufferGeometryUtils.computeMikkTSpaceTangents } instead.`,name:"computeTangents",required:!1,type:{name:"(() => void)"}},computeVertexNormals:{defaultValue:null,description:`Computes vertex normals for the given vertex data. For indexed geometries, the method sets each vertex normal to
be the average of the face normals of the faces that share that vertex. For non-indexed geometries, vertices are
not shared, and the method sets each vertex normal to be the same as the face normal.`,name:"computeVertexNormals",required:!1,type:{name:"(() => void)"}},normalizeNormals:{defaultValue:null,description:`Every normal vector in a geometry will have a magnitude of 1
@remarks This will correct lighting on the geometry surfaces.`,name:"normalizeNormals",required:!1,type:{name:"(() => void)"}},toNonIndexed:{defaultValue:null,description:"Return a non-index version of an indexed BufferGeometry.",name:"toNonIndexed",required:!1,type:{name:"(() => BufferGeometry<NormalBufferAttributes>)"}},toJSON:{defaultValue:null,description:"Convert the buffer geometry to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 JSON Object/Scene format}.",name:"toJSON",required:!1,type:{name:"(() => {})"}},clone:{defaultValue:null,description:"Creates a clone of this BufferGeometry",name:"clone",required:!1,type:{name:"(() => PlaneGeometry)"}},copy:{defaultValue:null,description:`Copies another BufferGeometry to this BufferGeometry.
@param source`,name:"copy",required:!1,type:{name:"((source: BufferGeometry<NormalBufferAttributes>) => PlaneGeometry)"}},dispose:{defaultValue:null,description:`Frees the GPU-related resources allocated by this instance.
@remarks Call this method whenever this instance is no longer used in your app.`,name:"dispose",required:!1,type:{name:"(() => void)"}},addEventListener:{defaultValue:null,description:`Adds a listener to an event type.
@param type The type of event to listen to.
@param listener The function that gets called when the event is fired.`,name:"addEventListener",required:!1,type:{name:'{ <T extends "dispose">(type: T, listener: EventListener<{ dispose: {}; }[T], T, PlaneGeometry>): void; <T extends string>(type: T, listener: EventListener<{}, T, PlaneGeometry>): void; }'}},hasEventListener:{defaultValue:null,description:`Checks if listener is added to an event type.
@param type The type of event to listen to.
@param listener The function that gets called when the event is fired.`,name:"hasEventListener",required:!1,type:{name:'{ <T extends "dispose">(type: T, listener: EventListener<{ dispose: {}; }[T], T, PlaneGeometry>): boolean; <T extends string>(type: T, listener: EventListener<{}, T, PlaneGeometry>): boolean; }'}},removeEventListener:{defaultValue:null,description:`Removes a listener from an event type.
@param type The type of the listener that gets removed.
@param listener The listener function that gets removed.`,name:"removeEventListener",required:!1,type:{name:'{ <T extends "dispose">(type: T, listener: EventListener<{ dispose: {}; }[T], T, PlaneGeometry>): void; <T extends string>(type: T, listener: EventListener<{}, T, PlaneGeometry>): void; }'}},dispatchEvent:{defaultValue:null,description:`Fire an event type.
@param event The event that gets fired.`,name:"dispatchEvent",required:!1,type:{name:'(<T extends "dispose">(event: BaseEvent<T> & { dispose: {}; }[T]) => void)'}},parameters:{defaultValue:null,description:`An object with a property for each of the constructor parameters.
@remarks Any modification after instantiation does not change the geometry.`,name:"parameters",required:!1,type:{name:"{ readonly width: number; readonly height: number; readonly widthSegments: number; readonly heightSegments: number; }"}}}}}catch{}const n=({renderCallback:t,...e})=>a(y,{children:a(s,{renderCallback:t,...e})});try{n.displayName="ShaderCanvas",n.__docgenInfo={description:"",displayName:"ShaderCanvas",props:{shaderMaterial:{defaultValue:null,description:"",name:"shaderMaterial",required:!0,type:{name:"ShaderMaterial"}},renderCallback:{defaultValue:null,description:"",name:"renderCallback",required:!0,type:{name:"RenderCallback"}},id:{defaultValue:null,description:"Unique number for this {@link THREE.BufferGeometryBufferGeometry} instance.\n@remarks Expects a `Integer`",name:"id",required:!1,type:{name:"number"}},uuid:{defaultValue:null,description:`{@link http://en.wikipedia.org/wiki/Universally_unique_identifier UUID} of this object instance.
@remarks This gets automatically assigned and shouldn't be edited.`,name:"uuid",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Optional name for this {@link THREE.BufferGeometryBufferGeometry} instance.\n@defaultValue `''`",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"A Read-only _string_ to check if `this` object type.\n@remarks Sub-classes will update this value.\n@defaultValue `PlaneGeometry`",name:"type",required:!1,type:{name:"string"}},index:{defaultValue:null,description:`Allows for vertices to be re-used across multiple triangles; this is called using "indexed triangles".
Each triangle is associated with the indices of three vertices. This attribute therefore stores the index of each vertex for each triangular face.
If this attribute is not set, the {@link THREE.WebGLRendererrenderer}  assumes that each three contiguous positions represent a single triangle.
@defaultValue \`null\``,name:"index",required:!1,type:{name:"BufferAttribute | null"}},attributes:{defaultValue:null,description:"This hashmap has as id the name of the attribute to be set and as value the {@link THREE.BufferAttributebuffer} to set it to. Rather than accessing this property directly,\nuse {@link setAttribute.setAttribute} and {@link getAttribute.getAttribute} to access attributes of this geometry.\n@defaultValue `{}`",name:"attributes",required:!1,type:{name:"NormalBufferAttributes"}},morphAttributes:{defaultValue:null,description:`Hashmap of {@link THREE.BufferAttributeBufferAttributes} holding details of the geometry's morph targets.
@remarks Once the geometry has been rendered, the morph attribute data cannot be changed.
You will have to call {@link dispose .dispose}(), and create a new instance of {@link THREE.BufferGeometry BufferGeometry}.
@defaultValue \`{}\``,name:"morphAttributes",required:!1,type:{name:"{ [name: string]: (BufferAttribute | InterleavedBufferAttribute)[]; }"}},morphTargetsRelative:{defaultValue:null,description:"Used to control the morph target behavior; when set to true, the morph target data is treated as relative offsets, rather than as absolute positions/normals.\n@defaultValue `false`",name:"morphTargetsRelative",required:!1,type:{name:"boolean"}},groups:{defaultValue:null,description:`Split the geometry into groups, each of which will be rendered in a separate WebGL draw call. This allows an array of materials to be used with the geometry.
@remarks Every vertex and index must belong to exactly one group — groups must not share vertices or indices, and must not leave vertices or indices unused.
@remarks Use {@link addGroup .addGroup} to add groups, rather than modifying this array directly.
@defaultValue \`[]\``,name:"groups",required:!1,type:{name:"{ start: number; count: number; materialIndex?: number; }[]"}},boundingBox:{defaultValue:null,description:"Bounding box for the {@link THREE.BufferGeometryBufferGeometry}, which can be calculated with {@link computeBoundingBox.computeBoundingBox()}.\n@remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.\n@defaultValue `null`",name:"boundingBox",required:!1,type:{name:"Box3 | null"}},boundingSphere:{defaultValue:null,description:"Bounding sphere for the {@link THREE.BufferGeometryBufferGeometry}, which can be calculated with {@link computeBoundingSphere.computeBoundingSphere()}.\n@remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.\n@defaultValue `null`",name:"boundingSphere",required:!1,type:{name:"Sphere | null"}},drawRange:{defaultValue:null,description:`Determines the part of the geometry to render. This should not be set directly, instead use {@link setDrawRange.setDrawRange(...)}.
@remarks For non-indexed {@link THREE.BufferGeometry BufferGeometry}, count is the number of vertices to render.
@remarks For indexed {@link THREE.BufferGeometry BufferGeometry}, count is the number of indices to render.
@defaultValue \`{ start: 0, count: Infinity }\``,name:"drawRange",required:!1,type:{name:"{ start: number; count: number; }"}},userData:{defaultValue:null,description:"An object that can be used to store custom data about the BufferGeometry. It should not hold references to functions as these will not be cloned.\n@defaultValue `{}`",name:"userData",required:!1,type:{name:"{ [key: string]: any; }"}},isBufferGeometry:{defaultValue:null,description:"Read-only flag to check if a given object is of type {@link BufferGeometry}.\n@remarks This is a _constant_ value\n@defaultValue `true`",name:"isBufferGeometry",required:!1,type:{name:"true"}},getIndex:{defaultValue:null,description:"Return the {@link index.index} buffer.",name:"getIndex",required:!1,type:{name:"(() => BufferAttribute | null)"}},setIndex:{defaultValue:null,description:`Set the {@link THREE.BufferGeometry.index.index} buffer.
@param index`,name:"setIndex",required:!1,type:{name:"((index: BufferAttribute | number[] | null) => PlaneGeometry)"}},setAttribute:{defaultValue:null,description:`Sets an {@link attributesattribute} to this geometry with the specified name.
@remarks Use this rather than the attributes property, because an internal hashmap of {@link attributes .attributes} is maintained to speed up iterating over attributes.
@param name
@param attribute`,name:"setAttribute",required:!1,type:{name:"(<K extends string>(name: K, attribute: BufferAttribute | InterleavedBufferAttribute) => PlaneGeometry)"}},getAttribute:{defaultValue:null,description:`Returns the {@link attributesattribute} with the specified name.
@param name`,name:"getAttribute",required:!1,type:{name:"(<K extends string>(name: K) => BufferAttribute | InterleavedBufferAttribute)"}},deleteAttribute:{defaultValue:null,description:`Deletes the  {@link attributesattribute} with the specified name.
@param name`,name:"deleteAttribute",required:!1,type:{name:"((name: string) => PlaneGeometry)"}},hasAttribute:{defaultValue:null,description:`Returns true if the {@link attributesattribute} with the specified name exists.
@param name`,name:"hasAttribute",required:!1,type:{name:"((name: string) => boolean)"}},addGroup:{defaultValue:null,description:`Adds a group to this geometry
@see the {@link BufferGeometry.groups groups} property for details.
@param start
@param count
@param materialIndex`,name:"addGroup",required:!1,type:{name:"((start: number, count: number, materialIndex?: number) => void)"}},clearGroups:{defaultValue:null,description:"Clears all groups.",name:"clearGroups",required:!1,type:{name:"(() => void)"}},setDrawRange:{defaultValue:null,description:`Set the {@link drawRange.drawRange} property
@remarks For non-indexed BufferGeometry, count is the number of vertices to render
@remarks For indexed BufferGeometry, count is the number of indices to render.
@param start
@param count is the number of vertices or indices to render. Expects a \`Integer\``,name:"setDrawRange",required:!1,type:{name:"((start: number, count: number) => void)"}},applyMatrix4:{defaultValue:null,description:`Applies the matrix transform to the geometry.
@param matrix`,name:"applyMatrix4",required:!1,type:{name:"((matrix: Matrix4) => PlaneGeometry)"}},applyQuaternion:{defaultValue:null,description:`Applies the rotation represented by the quaternion to the geometry.
@param quaternion`,name:"applyQuaternion",required:!1,type:{name:"((quaternion: Quaternion) => PlaneGeometry)"}},rotateX:{defaultValue:null,description:"Rotate the geometry about the X axis. This is typically done as a one time operation, and not during a loop.\n@remarks Use {@link THREE.Object3D.rotation Object3D.rotation} for typical real-time mesh rotation.\n@param angle radians. Expects a `Float`",name:"rotateX",required:!1,type:{name:"((angle: number) => PlaneGeometry)"}},rotateY:{defaultValue:null,description:`Rotate the geometry about the Y axis.
@remarks This is typically done as a one time operation, and not during a loop.
@remarks Use {@link THREE.Object3D.rotation Object3D.rotation} for typical real-time mesh rotation.
@param angle radians. Expects a \`Float\``,name:"rotateY",required:!1,type:{name:"((angle: number) => PlaneGeometry)"}},rotateZ:{defaultValue:null,description:`Rotate the geometry about the Z axis.
@remarks This is typically done as a one time operation, and not during a loop.
@remarks Use {@link THREE.Object3D.rotation Object3D.rotation} for typical real-time mesh rotation.
@param angle radians. Expects a \`Float\``,name:"rotateZ",required:!1,type:{name:"((angle: number) => PlaneGeometry)"}},translate:{defaultValue:null,description:"Translate the geometry.\n@remarks This is typically done as a one time operation, and not during a loop.\n@remarks Use {@link THREE.Object3D.position Object3D.position} for typical real-time mesh rotation.\n@param x Expects a `Float`\n@param y Expects a `Float`\n@param z Expects a `Float`",name:"translate",required:!1,type:{name:"((x: number, y: number, z: number) => PlaneGeometry)"}},scale:{defaultValue:null,description:"Scale the geometry data.\n@remarks This is typically done as a one time operation, and not during a loop.\n@remarks Use {@link THREE.Object3D.scale Object3D.scale} for typical real-time mesh scaling.\n@param x Expects a `Float`\n@param y Expects a `Float`\n@param z Expects a `Float`",name:"scale",required:!1,type:{name:"((x: number, y: number, z: number) => PlaneGeometry)"}},lookAt:{defaultValue:null,description:`Rotates the geometry to face a point in space.
@remarks This is typically done as a one time operation, and not during a loop.
@remarks Use {@link THREE.Object3D.lookAt Object3D.lookAt} for typical real-time mesh usage.
@param vector A world vector to look at.`,name:"lookAt",required:!1,type:{name:"((vector: Vector3) => PlaneGeometry)"}},center:{defaultValue:null,description:"Center the geometry based on the bounding box.",name:"center",required:!1,type:{name:"(() => PlaneGeometry)"}},setFromPoints:{defaultValue:null,description:`Sets the attributes for this BufferGeometry from an array of points.
@param points`,name:"setFromPoints",required:!1,type:{name:"((points: Vector3[] | Vector2[]) => PlaneGeometry)"}},computeBoundingBox:{defaultValue:null,description:"Computes bounding box of the geometry, updating {@link boundingBox.boundingBox} attribute.\n@remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.",name:"computeBoundingBox",required:!1,type:{name:"(() => void)"}},computeBoundingSphere:{defaultValue:null,description:"Computes bounding sphere of the geometry, updating {@link boundingSphere.boundingSphere} attribute.\n@remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.",name:"computeBoundingSphere",required:!1,type:{name:"(() => void)"}},computeTangents:{defaultValue:null,description:`Calculates and adds a tangent attribute to this geometry.
The computation is only supported for indexed geometries and if position, normal, and uv attributes are defined
@remarks When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
{@link BufferGeometryUtils.computeMikkTSpaceTangents } instead.`,name:"computeTangents",required:!1,type:{name:"(() => void)"}},computeVertexNormals:{defaultValue:null,description:`Computes vertex normals for the given vertex data. For indexed geometries, the method sets each vertex normal to
be the average of the face normals of the faces that share that vertex. For non-indexed geometries, vertices are
not shared, and the method sets each vertex normal to be the same as the face normal.`,name:"computeVertexNormals",required:!1,type:{name:"(() => void)"}},normalizeNormals:{defaultValue:null,description:`Every normal vector in a geometry will have a magnitude of 1
@remarks This will correct lighting on the geometry surfaces.`,name:"normalizeNormals",required:!1,type:{name:"(() => void)"}},toNonIndexed:{defaultValue:null,description:"Return a non-index version of an indexed BufferGeometry.",name:"toNonIndexed",required:!1,type:{name:"(() => BufferGeometry<NormalBufferAttributes>)"}},toJSON:{defaultValue:null,description:"Convert the buffer geometry to three.js {@link https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4 JSON Object/Scene format}.",name:"toJSON",required:!1,type:{name:"(() => {})"}},clone:{defaultValue:null,description:"Creates a clone of this BufferGeometry",name:"clone",required:!1,type:{name:"(() => PlaneGeometry)"}},copy:{defaultValue:null,description:`Copies another BufferGeometry to this BufferGeometry.
@param source`,name:"copy",required:!1,type:{name:"((source: BufferGeometry<NormalBufferAttributes>) => PlaneGeometry)"}},dispose:{defaultValue:null,description:`Frees the GPU-related resources allocated by this instance.
@remarks Call this method whenever this instance is no longer used in your app.`,name:"dispose",required:!1,type:{name:"(() => void)"}},addEventListener:{defaultValue:null,description:`Adds a listener to an event type.
@param type The type of event to listen to.
@param listener The function that gets called when the event is fired.`,name:"addEventListener",required:!1,type:{name:'{ <T extends "dispose">(type: T, listener: EventListener<{ dispose: {}; }[T], T, PlaneGeometry>): void; <T extends string>(type: T, listener: EventListener<{}, T, PlaneGeometry>): void; }'}},hasEventListener:{defaultValue:null,description:`Checks if listener is added to an event type.
@param type The type of event to listen to.
@param listener The function that gets called when the event is fired.`,name:"hasEventListener",required:!1,type:{name:'{ <T extends "dispose">(type: T, listener: EventListener<{ dispose: {}; }[T], T, PlaneGeometry>): boolean; <T extends string>(type: T, listener: EventListener<{}, T, PlaneGeometry>): boolean; }'}},removeEventListener:{defaultValue:null,description:`Removes a listener from an event type.
@param type The type of the listener that gets removed.
@param listener The listener function that gets removed.`,name:"removeEventListener",required:!1,type:{name:'{ <T extends "dispose">(type: T, listener: EventListener<{ dispose: {}; }[T], T, PlaneGeometry>): void; <T extends string>(type: T, listener: EventListener<{}, T, PlaneGeometry>): void; }'}},dispatchEvent:{defaultValue:null,description:`Fire an event type.
@param event The event that gets fired.`,name:"dispatchEvent",required:!1,type:{name:'(<T extends "dispose">(event: BaseEvent<T> & { dispose: {}; }[T]) => void)'}},parameters:{defaultValue:null,description:`An object with a property for each of the constructor parameters.
@remarks Any modification after instantiation does not change the geometry.`,name:"parameters",required:!1,type:{name:"{ readonly width: number; readonly height: number; readonly widthSegments: number; readonly heightSegments: number; }"}}}}}catch{}const x=`#define GLSLIFY 1
varying vec2 vUv;
  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;
    vUv = uv;
  }`,k=`#define GLSLIFY 1
//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;
varying vec2 vUv;
void main() {
    vec2 displacedUv = vUv + cnoise(vec3(vUv * 7.0, uTime * 0.1));
    float strength = cnoise(vec3(displacedUv * 5.0, uTime * 0.2));
    float outerGlow = distance(vUv, vec2(0.5)) * 4.0 - 1.4;
    strength += outerGlow;
    strength += step(-0.2, strength) * 0.8;
    strength = clamp(strength, 0.0, 1.0);
    vec3 color = mix(uColorStart, uColorEnd, strength);
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <encodings_fragment>
  }`,p=v({uTime:0,uColorStart:new o("blue"),uColorEnd:new o("white")},x,k);g({PortalMaterial:p});const q={component:n,title:"gle-r3f-components/ShaderCanvas",argTypes:{}},T=b.div`
  width: 100vw;
  height: 100vh;
`,r=t=>{const e=new p;return e.uniforms.uColorStart.value=new o("blue"),a(T,{children:a(n,{shaderMaterial:e,renderCallback:(i,c)=>{e.uniforms.uTime.value+=c}})})};r.args={};var u,d,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const shaderMaterial = new PortalMaterial();
  shaderMaterial.uniforms.uColorStart.value = new Color('blue');
  const renderCallback = (state: RootState, delta: number) => {
    shaderMaterial.uniforms.uTime.value += delta;
  };
  return <ShaderCanvasContainer>
            <ShaderCanvas shaderMaterial={shaderMaterial} renderCallback={renderCallback} />
        </ShaderCanvasContainer>;
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const P=["PortalShader"];export{r as PortalShader,P as __namedExportsOrder,q as default};
//# sourceMappingURL=ShaderCanvas.stories-605b7408.js.map
