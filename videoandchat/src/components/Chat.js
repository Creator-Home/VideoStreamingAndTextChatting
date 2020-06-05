import React from 'react';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('8a8sxmg4dxhm');
const userToken =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYXV0dW1uLWZvZy05In0.k0OTi-HLW5jbMoR8-sw3eN5CoyD653g_EPOGNqDb0H4';

chatClient.setUser(
	{
		id: 'autumn-fog-9',
		name: 'Autumn fog',
		image: 'https://picsum.photos/200'
	},
	userToken
);

const channel = chatClient.channel('livestream', 'creator', {
	image: 'https://picsum.photos/200',
	name: 'LiveStream Discuss'
});

const App = () => (
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

export default App;
