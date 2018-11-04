function Text(text) {
    if (text === 'Hi') {
        return {
            "text": text
        }
    } else {
        return {
            "text": `You sent the message: "${received_message.text}".`
        }
    }
}