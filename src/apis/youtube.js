import axios from 'axios';

const KEY = 'AIzaSyBVMYBTmBtrLxWGkQWY-aMun-k2kyn2etY';

export default axios.create ({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});