import type { Engine } from "@babylonjs/core/Engines/engine";
import type { Scene } from "@babylonjs/core/scene";

// Change this import to check other scenes
//import { DefaultSceneWithTexture } from "./scenes/defaultWithTexture";
import { LoadModelAndEnvScene } from "./scenes/loadModelAndEnv";
import { FresnelShaderScene } from "./scenes/fresnelShader";
import {NavigationMeshRecast} from "./scenes/navigationMeshRecast";
//import scene from "./scenes/physicsWithAmmo";
import scene from "./scenes/physicsWithHavok";

export interface CreateSceneClass {
    createScene: (engine: Engine, canvas: HTMLCanvasElement) => Promise<Scene>;
    preTasks?: Promise<unknown>[];
}

export interface CreateSceneModule {
    default: CreateSceneClass;
}

export const getSceneModule = (): CreateSceneClass => {
    // return new DefaultSceneWithTexture();
    //return new LoadModelAndEnvScene();
    //return new FresnelShaderScene();
    //return new NavigationMeshRecast();
    return scene;
}
