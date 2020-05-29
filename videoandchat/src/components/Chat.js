import React from 'react';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibW9ybmluZy1mb3Jlc3QtOSJ9.jlqKbW3i-h9SgVYxa3AJ2-F8UwTl0CSC4gHNRkspdE8';

chatClient.setUser(
	{
		id: 'morning-forest-9',
		name: 'Morning forest',
		image: 'https://getstream.io/random_svg/?id=morning-forest-9&name=Morning+forest'
	},
	userToken
);

const channel = chatClient.channel('livestream', 'spacex', {
	image: 'https://goo.gl/Zefkbx',
	name: 'SpaceX launch discussion'
});

const ChatMain = () => (
	<Chat client={chatClient} theme={'livestream dark'}>
		<Channel channel={channel} Message={MessageLivestream}>
			<Window hideOnThread>
				<ChannelHeader live />
				<MessageList />
				<MessageInput Input={MessageInputSmall} focus />
			</Window>
			<Thread fullWidth />
		</Channel>
	</Chat>
);

export default ChatMain;
