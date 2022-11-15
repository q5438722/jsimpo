import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { FileUpload } from '../../app/file-upload';
import { Messages } from '../../app/models';
Meteor['methods']({
    'deleteFileMessage'(_0x158a73) {
        check(_0x158a73, String);
        const _0x7ce44c = Messages['getMessageByFileId'](_0x158a73);
        if (_0x7ce44c)
            return Meteor['call']('deleteMessage', _0x7ce44c);
        return FileUpload['getStore']('Uploads')['deleteById'](_0x158a73);
    }
});
