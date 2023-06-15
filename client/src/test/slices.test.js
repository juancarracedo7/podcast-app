import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  fetchPodcastDetails,
  podcastRequest,
  podcastSuccess,
  podcastFail,
  
  getPodcastDetails,
  getPodcastDetailsSuccess,
  getPodcastDetailsFail,
  updateLastRequestDate,
} from '../store/slices/podcast';
import reducer from '../store/slices/podcast';

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);
const store = mockStore();

describe('podcast actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should dispatch getPodcastDetailsSuccess action when fetching podcast details is successful', async () => {
    const trackId = 1;
    const data = { trackId: 1, title: 'Podcast 1' };
    const expectedActions = [getPodcastDetails(), getPodcastDetailsSuccess(data)];

    mock.onGet(`http://localhost:3001/details/${trackId}`).reply(200, data);

    await store.dispatch(fetchPodcastDetails(trackId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch getPodcastDetailsFail action when fetching podcast details fails', async () => {
    const trackId = 1;
    const expectedActions = [getPodcastDetails(), getPodcastDetailsFail('Error fetching podcast details')];

    mock.onGet(`http://localhost:3001/details/${trackId}`).reply(500, 'Error fetching podcast details');

    await store.dispatch(fetchPodcastDetails(trackId));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('podcast reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      podcast: [],
      filteredPodcast: [],
      loading: false,
      error: null,
      details: null,
      lastRequestDate: null,
    });
  });

  it('should handle podcastRequest', () => {
    expect(reducer(undefined, podcastRequest())).toEqual({
      podcast: [],
      filteredPodcast: [],
      loading: true,
      error: null,
      details: null,
      lastRequestDate: null,
    });
  });

  it('should handle podcastSuccess', () => {
    const data = [{ name: 'Podcast 1', title: 'Title 1' }];
    expect(reducer(undefined, podcastSuccess(data))).toEqual({
      podcast: data,
      filteredPodcast: data,
      loading: false,
      error: null,
      details: null,
      lastRequestDate: null,
    });
  });

  it('should handle podcastFail', () => {
    const error = 'Error fetching podcast';
    expect(reducer(undefined, podcastFail(error))).toEqual({
      podcast: [],
      filteredPodcast: [],
      loading: false,
      error: error,
      details: null,
      lastRequestDate: null,
    });
  });

  it('should handle getPodcastDetailsSuccess', () => {
    const data = { trackId: 1, title: 'Podcast 1' };
    expect(reducer(undefined, getPodcastDetailsSuccess(data))).toEqual({
      podcast: [],
      filteredPodcast: [],
      loading: false,
      error: null,
      details: data,
      lastRequestDate: null,
    });
  });

  it('should handle getPodcastDetailsFail', () => {
    const error = 'Error fetching podcast details';
    expect(reducer(undefined, getPodcastDetailsFail(error))).toEqual({
      podcast: [],
      filteredPodcast: [],
      loading: false,
      error: error,
      details: null,
      lastRequestDate: null,
    });
  });

  it('should handle updateLastRequestDate', () => {
    const currentDate = new Date().toISOString();
    expect(reducer(undefined, updateLastRequestDate())).toEqual({
      podcast: [],
      filteredPodcast: [],
      loading: false,
      error: null,
      details: null,
      lastRequestDate: currentDate,
    });
  });
});
