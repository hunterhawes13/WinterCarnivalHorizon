
import Horizon from '@horizon/client';

const horizon = Horizon({
  secure: false,
  host: 'localhost:8181'
});

// Any number of stores that you like
const chatter = horizon('chats');

export {chatter};