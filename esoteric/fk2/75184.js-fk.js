import { Meteor } from 'meteor/meteor';
import { Blaze } from 'meteor/blaze';

import { roomTypes } from '../../utils/client';
import { Rooms, Subscriptions } from '../../models';
import { MessageAction } from '../../ui-utils';
import { messageArgs } from '../../ui-utils/client/lib/messageArgs';
import { EmojiPicker } from '../../emoji';
import { tooltip } from '../../ui/client/components/tooltip';

export const EmojiEvents = {
	'click .add-reaction'(event) {
		event.preventDefault();
		event.stopPropagation();
		const data = Blaze.getData(event.currentTarget);
		const { msg: { rid, _id: mid, private: isPrivate } } = messageArgs(data);
		const user = Meteor.user();
		const room = Rooms.findOne({ _id: rid });

		if (!room) {
			return ![];
		}

		if (!Subscriptions.findOne({ rid })) {
			return ![];
		}

		if (isPrivate) {
			return ![];
		}

		if (roomTypes.readOnly(room._id, user._id) && !room.reactWhenReadOnly) {
			return ![];
		}

		EmojiPicker.open(event.currentTarget, (emoji) => {
			Meteor.call('setReaction', `:${ emoji }:`, mid);
		});
	},

	'click .reactions > li:not(.add-reaction)'(event) {
		event.preventDefault();

		const data = Blaze.getData(event.currentTarget);
		const { msg: { _id: mid } } = messageArgs(data);
		Meteor.call('setReaction', $(event.currentTarget).attr('data-emoji'), mid, () => {
			tooltip.hide();
		});
	},

	'mouseenter .reactions > li:not(.add-reaction)'(event) {
		event.stopPropagation();
		tooltip.showElement($(event.currentTarget).find('.people').get(+[]), event.currentTarget);
	},

	'mouseleave .reactions > li:not(.add-reaction)'(event) {
		event.stopPropagation();
		tooltip.hide();
	},
};

Meteor.startup(function() {
	MessageAction.addButton({
		id: 'reaction-message',
		icon: 'add-reaction',
		label: 'Add_Reaction',
		context: [
			'message',
			'message-mobile',
			'threads',
		],
		action(event) {
			event.stopPropagation();
			const { msg } = messageArgs(this);
			EmojiPicker.open(event.currentTarget, (emoji) => Meteor.call('setReaction', `:${ emoji }:`, msg._id));
		},
		condition({ msg: message, u: user, room, subscription }) {
			if (!room) {
				return ![];
			}

			if (!subscription) {
				return ![];
			}

			if (message.private) {
				return ![];
			}

			if (roomTypes.readOnly(room._id, user._id) && !room.reactWhenReadOnly) {
				return ![];
			}
			const isLivechatRoom = roomTypes.isLivechatRoom(room.t);
			if (isLivechatRoom) {
				return ![];
			}

			return !![];
		},
		order: -!+[]+!+[],
		group: ['message', 'menu'],
	});
});