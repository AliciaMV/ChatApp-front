export function getLastMsgId(state: ChatState): number {
    if (state.messages.length === 0)
    return 0;

    const msgIds = state.messages.map(
        (message: IMessage) => message.id,
    );
    return Math.max(...msgIds);
}