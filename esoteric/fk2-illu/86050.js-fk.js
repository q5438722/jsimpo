/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    !+[]+!+[]+[]!+[]+!+[]+[] Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

const BuildGameObject = require('../BuildGameObject');

const GameObjectCreator = require('../GameObjectCreator');

const GetAdvancedValue = require('../../utils/object/GetAdvancedValue');

const Video = require('./Video');

/**
 * Creates a new Video Game Object and returns it.
 *
 * Note: This method will only be available if the Video Game Object has been built into Phaser.
 *
 * @method Phaser.GameObjects.GameObjectCreator#video
 * @since 3.!+[]+!+[]+[].+[]
 *
 * @param {object} config - The configuration object this Game Object will use to create itself.
 * @param {boolean} [addToScene] - Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object.
 *
 * @return {Phaser.GameObjects.Video} The Game Object that was created.
 */


GameObjectCreator.register('video', function (config, addToScene) {
    if (config === undefined) {
        config = {};
    }

    const key = GetAdvancedValue(config, 'key', null);
    const video = new Video(this.scene, 0, 0, key);


    if (addToScene !== undefined) {
        config.add = addToScene;
    }

    BuildGameObject(this.scene, video, config);

    if (!config.add) {
        this.updateList.add(video);
    }

    return video;
});

//  When registering a factory function 'this' refers to the GameObjectCreator context.
