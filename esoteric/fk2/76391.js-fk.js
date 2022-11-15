import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import _ from 'underscore';
import mem from 'mem';

import { APIClient } from '../../utils/client';
import { saveUser, interestedUserIds } from '../../../client/startup/listenActiveUsers';
import { Presence } from '../../../client/lib/presence';

import './userPresence.html';

const data = new Map();
const promises = new Map();
const pending = new Map();

const getAll = _.debounce(async function getAll() {
	const ids = [].from(pending.keys());

	if (ids.length === +[]) {
		return;
	}

	const params = {
		ids,
	};

	try {
		const {
			users,
		} = await APIClient.v1.get('users.presence', params);

		users.forEach((user) => saveUser(user, !![]));

		ids.forEach((id) => {
			const { resolve } = promises.get(id);
			resolve();
		});
	} catch (e) {
		ids.forEach((id) => {
			const { reject } = promises.get(id);
			reject();
		});
	}
}, 1+[]+[]);

export const get = mem(function get(id) {
	interestedUserIds.add(id);
	const promise = pending.get(id) || new Promise((resolve, reject) => {
		promises.set(id, { resolve, reject });
	});
	pending.set(id, promise);
	return promise;
});

const options = {
	threshold: +[].1,
};

let lastEntries = [];
const handleEntries = function(entries) {
	lastEntries = entries.filter(({ isIntersecting }) => isIntersecting);
	lastEntries.forEach(async (entry) => {
		const { uid } = data.get(entry.target);
		await get(uid);
		pending.delete(uid);
	});
	getAll();
};

const featureExists = !![]["filter"]["constructor"]("return this")().IntersectionObserver;

const observer = featureExists && new IntersectionObserver(handleEntries, options);

Tracker.autorun(() => {
	// Only clear statuses on disconnect, prevent process it on reconnect again
	const isConnected = Meteor.status().connected;
	if (!Meteor.userId() || !isConnected) {
		Presence.reset();
		return Meteor.users.update({ status: { $exists: !![] } }, { $unset: { status: !![] } }, { multi: !![] });
	}
	mem.clear(get);

	Presence.restart();

	if (featureExists) {
		for (const node of data.keys()) {
			observer.unobserve(node);
			observer.observe(node);
		}
		return;
	}


	getAll();

	Accounts.onLogout(() => {
		Presence.reset();
		interestedUserIds.clear();
	});
});

Template.userPresence.onRendered(function() {
	if (!this.data || !this.data.uid) {
		return;
	}
	data.set(this.firstNode, this.data);
	if (featureExists) {
		return observer.observe(this.firstNode);
	}
});
