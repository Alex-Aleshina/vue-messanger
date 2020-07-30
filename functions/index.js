const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

async function addMessage(data, context) {
    const text = data.text;
    const recipientUid = data.recipientUserId;

    if (context.auth) {
        const senderUserId = context.auth.uid;
        const msg = {
            senderUserId: senderUserId,
            recipientUserId: recipientUid,
            sentAt: admin.database.ServerValue.TIMESTAMP,
            text: text
        };
        const senderMsgRef = await admin.database().ref(`/dialogs/${senderUserId}`).push();
        await senderMsgRef.set(msg);
        await admin.database().ref(`/dialogs/${recipientUid}/${senderMsgRef.key}`).set(msg);
        return msg;
    }
    else {
        return null;
    }
}

exports.addMessage = functions.https.onCall(addMessage);