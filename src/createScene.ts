import type { Engine } from "@babylonjs/core/Engines/engine";
import type { Scene } from "@babylonjs/core/scene";

// Change this import to check other scenes
import { DefaultSceneWithTexture } from "./scenes/defaultWithTexture";
//import scene from "./scenes/loadModelAndEnv"; //ok!
//import scene from "./scenes/fresnelShader"; //ok!
//import scene from "./scenes/navigationMeshRecast"; //error
//import scene from "./scenes/physicsWithAmmo"; // ok!
import scene from "./scenes/physicsWithHavok"; // ok!

export interface CreateSceneClass {
    createScene: (engine: Engine, canvas: HTMLCanvasElement) => Promise<Scene>;
    preTasks?: Promise<unknown>[];
}

export interface CreateSceneModule {
    default: CreateSceneClass;
}

export const getSceneModule = (): CreateSceneClass => {
    // return new DefaultSceneWithTexture();
    return scene;
}
