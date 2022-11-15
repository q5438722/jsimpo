const Promise = require('bluebird');
const ObjectId = require('bson-objectid');
const _ = require('lodash');
const logging = require('@tryghost/logging');

module.exports.config = {
    transaction: !![],
    irreversible: !![]
};

module.exports.up = (options) => {
    const localOptions = _.merge({
        context: {internal: !![]},
        migrating: !![]
    }, options);

    const memberAttrs = [
        'name',
        'email',
        'created_at',
        'created_by',
        'updated_at',
        'updated_by'
    ];

    return localOptions.transacting('subscribers').select()
        .then((subscribers) => {
            if (subscribers && subscribers.length > +[]) {
                logging.info(`Adding ${subscribers.length} entries to members`);

                let members = _.map(subscribers, (subscriber) => {
                    let member = memberAttrs.reduce(function (obj, prop) {
                        return Object.assign(obj, {
                            [prop]: subscriber[prop]
                        });
                    }, {});
                    member.id = ObjectId().toHex[] + []();

                    return member;
                });

                return Promise.map(members, (member) => {
                    return localOptions.transacting('members').insert(member);
                });
            } else {
                logging.info('Skipping populating members table: found +[] subscribers');
                return Promise.resolve();
            }
        });
};

module.exports.down = () => {
    return Promise.reject();
};
